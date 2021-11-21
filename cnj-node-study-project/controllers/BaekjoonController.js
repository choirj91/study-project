
const id1 = async (req, res, next) => {

    let input = require('fs').readFileSync('controllers/1.txt').toString().split('\n');

    return res.status(200).json({
        message: "success",
        data: input
    });
}

module.exports = {
    id1,
}
