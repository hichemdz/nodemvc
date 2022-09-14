"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controllers_1 = require("../controllers/");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const middlewares_1 = require("../middlewares");
router.get('/', controllers_1.HomeController.index);
router.get('/login', middlewares_1.guestMiddelware, controllers_1.AuthController.login);
router.post('/login', middlewares_1.guestMiddelware, controllers_1.AuthController.login);
// users 
router.get('/user', UserController_1.default.create);
exports.default = router;
