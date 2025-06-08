import userController from "../controller/userController"


const router = require('express').Router()

router.route('/register', userController.registerUser)

export default router