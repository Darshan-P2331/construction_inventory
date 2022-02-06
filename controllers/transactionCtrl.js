const {v4} = require('uuid');
const db = require("../sql");

const transactionCtrl = {
  addTransaction: async (req, res) => {
    try {
      const { site_id, receiver, amount, details } = req.body;

      db.query(
        "INSERT INTO transactions SET ?",
        {id: v4(), site_id,receiver, amount, details},
        (err, result) => {
          if (err) throw err;
          return res.status(200).json({msg: "Transaction completed"})
        }
      )
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getTransaction: async (req, res) => {
    try {
        const {site_id} = req.body;
      await db.query(
        "SELECT * FROM transactions WHERE site_id = ?",
        [site_id],
        (err, result) => {
          if (err) throw err;
          if (result.length > 0) return res.status(200).json(result);
          return res.status(200).json([]);
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = transactionCtrl;
