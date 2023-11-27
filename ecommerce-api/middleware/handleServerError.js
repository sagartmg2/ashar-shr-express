
/* global error handler */

module.exports = (err, req, res, next) => {
    let status = 500
    let message = "Sever Error"

    if (err.name === "ValidationError") {
        status = 400;
        message = "Bad Reqeuest"
    }

    return res.status(status).send({
        "error": err.message,
        "msg": message,
        "errorStack": err.stack
    })
}