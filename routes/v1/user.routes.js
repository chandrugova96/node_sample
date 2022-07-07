const express = require("express");
const userRoutes = express.Router();

const { userController } = require("../../controllers");
const { verifyToken } = require("../../middleware");
const { user } = require("../../validators");

userRoutes.post('/signup', user.signUp, userController.signup);

module.exports = userRoutes;