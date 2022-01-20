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
};

module.exports = constructionCtrl;
