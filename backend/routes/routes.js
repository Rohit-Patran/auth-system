import express from 'express';
import signup_user from '../controllers/signup_controllers.js';
import login_user from '../controllers/login_controllers.js';

const ROUTER = express.Router();

ROUTER.post("/api/user" , signup_user);
ROUTER.post("/api/auth" , login_user)

export { ROUTER as default };