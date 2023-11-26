const UserModel = require("../model/User")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    console.log("req.body", req.body)
    try {

        let hashedPassword = await bcrypt.hash(req.body.password, 10);

        let user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        res.send(user)

    } catch (err) {
        console.log(err.name)
        res.status(400).send({
            error: err.message
        })
    }
}

async function login(req, res) {
    console.log("req.body", req.body)
    try {
        /* check if email exists in database or not */
        /* compare the hashed password */

        let user = await UserModel.findOne({ email: req.body.email })

        // console.log(user);// {...user_details} if found , null if email not found

        if (user) {
            user = user.toObject()
            let hasedPassword = user.password  // password stored in database

            delete user.password;
            let matched = await bcrypt.compare(req.body.password, hasedPassword);
            const SECRET_KEY = 'shhhhh'
            var token = jwt.sign(user, SECRET_KEY);
            if (matched) {
                return res.send({
                    user: user,
                    "token": token
                })
            }
        }

        return res.status(401).send("invalid credentials")

        /* 
         if (!user) {  // falsy values in javascript  false,0,null,undefined,NaN,"" 
            return res.status(401).send("invalid credentials")
        }

        let hasedPassword = user.password  // password stored in database
        let matched = await bcrypt.compare(req.body.password, hasedPassword );

        if (!matched) {
            return res.status(401).send("invalid credentials")
        }
         */
        res.send(user)

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