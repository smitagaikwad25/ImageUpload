"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUserValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

// Joi.image = require("joi-image-extension");
var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().min(4).required(),
    image: _joi["default"].image().required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newUserValidator = newUserValidator;