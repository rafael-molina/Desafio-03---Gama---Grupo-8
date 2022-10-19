const {validate, Joy} = require("express-validation");

module.exports = validate({
    body: Joy.object({
        email: Joy.string().email().required(),
        senha: Joy.string().required()
    })
})