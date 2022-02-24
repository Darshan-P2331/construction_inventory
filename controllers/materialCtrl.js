const db = require("../sql");
const { v1} = require("uuid");

const materialCtrl = {
  requestMaterial: async (req, res) => {
    try {
      const { uid, site_id, material, cost, quantity } = req.body;
      await db.query(
        "INSERT INTO request_material SET ?",
        { id: v1(),uid, site_id, material, cost, quantity },
        (err, result) => {
          if (err) throw err;
          return res.status(200).json({ msg: "Request Submitted" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  setApproval: async (req, res) => {
    try {
      const { id } = req.body;
      db.query(
        "UPDATE request_material SET isApproved = ? WHERE id = ?",
        [1, id],
        (err, result) => {
          if (err) throw err;
          return res.status(200).json({ msg: "Field updated" });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  fetchRequest: async (req, res) => {
    try {
      const { site_id } = req.body;
      await db.query(
        "SELECT * FROM request_material WHERE site_id = ?",
        [site_id],
        (err, result) => {
          if (err) throw err;
          if (result.length > 0) return res.status(200).json(result);
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  fetchOne: async (req, res) => {
    try {
      const {id} = req.body;
      await db.query(`SELECT * FROM request_material WHERE id=?`, 
      [id],
      (err,result) => {
        if (err) throw err;
        return res.status(200).json(result);
      }
      )
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

module.exports = materialCtrl;
