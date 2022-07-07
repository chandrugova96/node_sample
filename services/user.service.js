'use strict'
const db = require("../Models");

class UserService { };
UserService.signup = async () => {
    try {
        let admin = await db.Admin.findAll({});
        return admin;
    } catch (err) {
        return err;
    }
};

module.exports = UserService;