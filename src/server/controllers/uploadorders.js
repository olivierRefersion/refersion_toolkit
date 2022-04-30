const axios = require("axios");

const uploadorders = (req, res) => {
    res.json({ status: 'success', message: 'Just testing for now'})
}

module.exports.uploadorders = uploadorders;