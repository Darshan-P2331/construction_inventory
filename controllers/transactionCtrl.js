const transactionCtrl = {
    addTransaction: (req, res) => {
        try {
            const {site_id,receiver,amount,details,date} = req.body;
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    getTransaction: (req, res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = transactionCtrl