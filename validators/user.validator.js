const Joi = require('joi');

const baseValidation = require("../middleware/baseValidation");

class UserValidation {
	signUp(req, res, next){
		const schema = Joi.object({
			phoneNumber: Joi.string().required(),
			countryCode: Joi.string().min(2).required(),
		});
		return baseValidation.validateBody(req, res, next, schema);
	};
}

module.exports = new UserValidation();

