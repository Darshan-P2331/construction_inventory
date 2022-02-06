const db = require("../sql");
const { v1 } = require("uuid");

const workersCtrl = {
  newWorkers: async (req, res) => {
    try {
      const { name, contact_info, pay_per_day, gender,work_type } = req.body;
      await db.query(
        "INSERT INTO workers SET ?",
        { id: v1(), name, contact_info, pay_per_day, gender,work_type },
        (err, result) => {
          if (err) throw err;
          return res.status(200).json({ msg: "Register successfull" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  assignSite: async (req, res) => {
    try {
      const { id, site_id } = req.body;
      await db.query(
        "UPDATE workers SET site_id = ? WHERE id = ?",
        [site_id, id],
        (err, result) => {
          if (err) return res.status(400).json({ msg: err.message });
          return res.status(200).json({ msg: "Register successfull" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  fetchWorkers: async (req, res) => {
    try {
      await db.query(
        "SELECT * FROM workers",
        [],
        (err, result) => {
          if (err) throw err;
          if (result.length > 0) return res.status(200).json(result)
        }
      )
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = workersCtrl;
