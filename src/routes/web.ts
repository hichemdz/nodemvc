import express ,{ Router} from "express";

const router:Router = express.Router();

import {AuthController, HomeController} from "../controllers/";
import UserController from "../controllers/UserController";

import { authMiddelware, guestMiddelware } from "../middlewares";

router.get('/', HomeController.index);

router.get('/login',guestMiddelware, AuthController.login );
router.post('/login',guestMiddelware, AuthController.login );

// users 

router.get('/user', UserController.create);

export default router;
