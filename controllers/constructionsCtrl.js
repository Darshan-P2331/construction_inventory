const db = require("../sql");
const { v1 } = require("uuid");

const constructionCtrl = {
  addSites: async (req, res, next) => {
    try {
      const { title, owner, location, estimate_cost, user } = req.body;
      const id = v1();
      await db.query(
        "INSERT INTO constructions SET ?",
        { id, title, owner, location, estimate_cost },
        (err, result) => {
          if (err) return res.status(400).json({ msg: err.message });
          req.body = { user, id };
          next();
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      await db.query(
        "SELECT C.*, U.name FROM constructions C, users U WHERE U.site_id = C.id",[],
        (err, result) => {
          if (err) throw err;
          if (result.length > 0) return res.status(200).json(result)
        }
      )
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
};

module.exports = constructionCtrl;
