import {Router} from 'express'
import {Registration,Login,GetMe} from '../controllers/auth.js'
import { checkAuth } from '../utils/check.js';
const router=new Router();

//Registration
//http://localhost:3002/api/auth/registration
router.post('/registration',Registration)

//Login
//http://localhost:3002/api/auth/login

router.post('/login',Login)
//GetMe
//http://localhost:3002/api/auth/getme
router.get('/getme',checkAuth,GetMe)
export default router
