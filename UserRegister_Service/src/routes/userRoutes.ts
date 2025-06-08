import userController from "../controller/userController"


const router = require('express').Router()

router.post('/register', userController.registerUser)

export default router