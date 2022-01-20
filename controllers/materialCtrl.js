const db = require("../sql");

const materialCtrl = {
    requestMaterial: async (req, res) => {
        try {
            await db.query(
                "INSERT INTO requestMaterial SET ?",
                {},
                (err, result) => {
                    if (err) throw err;
                    return res.status(200).json({msg: "Request Submitted"})
                }
            )
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = materialCtrl