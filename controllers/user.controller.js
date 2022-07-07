'use strict'

const { userService } = require('../services');
const { response } = require('../middleware');
const { statusCodes, responseMessage, loggerMessage } = require('../constants');
const { logger } = require('../helper');

class UserController { };
UserController.signup = async (req, res, next) => {
    try {
        let data = await userService.signup();
        logger.info(loggerMessage.getDataSuccess);
        return response.success(req, res, statusCodes.HTTP_OK, data, responseMessage.signupSuccess);
    } catch (err) {
        logger.error(loggerMessage.getDataFailure);
        return response.errors(req, res, statusCodes.HTTP_INTERNAL_SERVER_ERROR);
    }
};

module.exports = UserController;