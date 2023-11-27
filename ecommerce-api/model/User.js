const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        required: true,
        type: String,
        minLength: 3,
    },
    email: {
        type: String,
        required: true, // mongoose default validationasdfasdfaf
        validate: { // custom validation
            validator: async function (requestValue) {
                let user = await mongoose.models.User.findOne({ email: requestValue })
                if (user) {
                    return false
                }
                return true;
            },
            message: "Email already used"
        }
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel