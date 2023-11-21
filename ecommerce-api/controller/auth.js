const UserModel = require("../model/User")

const signup = async (req, res) => {
    console.log("req.body", req.body)
    try {
        let user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.send(user)
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

async function login(req, res) {
    console.log("req.body", req.body)
    try {
        res.send("logged in.")
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

module.exports = {
    "login": login,
    "signup": signup
}