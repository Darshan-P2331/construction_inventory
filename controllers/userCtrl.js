const db = require("../sql");
const bcrypt = require("bcryptjs");
const { v1 } = require("uuid");

const userCtrl = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid email" });

      await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, result) => {
          if (err) throw err;
          if (result.length > 0) {
            const isMatch = await bcrypt.compare(password, result[0].password);
            if (!isMatch)
              return res.status(400).json({ msg: "Invalid password" });
            delete result[0]["password"]
            return res
              .status(200)
              .json({ msg: "Login successful", user: result[0] });
          } else {
            return res.status(400).json({ msg: "Invalid email" });
          }
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password, name, phone_no } = req.body;
      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid email" });

      if (password.length < 8)
        return res.status(400).json({ msg: "Invalid password" });

      const passwordHash = await bcrypt.hash(password, 5);
      // console.log({ email, name, passwordHash, phone_no });
      await db.query(
        "INSERT INTO users SET ?",
        { uid: v1(), name, email, password: passwordHash, phone_no },
        (err, result) => {
          if (err && err.errno === 1062)
            return res.status(400).json({ msg: "Email already in use" });
          return res.status(200).json({ msg: "Register successfull" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  assignSite: async (req,res) => {
    const {user: uid, id: site_id} = req.body;
    await db.query('UPDATE users SET site_id = ? WHERE uid = ?', [site_id, uid],(err, result) => {
      if (err)
        return res.status(400).json({ msg: err.message });
      return res.status(200).json({ msg: "Register successfull" });
    })
  },
  freeUsers: async (req, res) => {
    try {
      await db.query(
        "SELECT name,uid FROM users WHERE site_id IS NULL",[],(err,result) => {
          if (err) throw err;
          if (result.length > 0) {
            return res.status(200).json({ result})
          }
        }
      )
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = userCtrl;

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
