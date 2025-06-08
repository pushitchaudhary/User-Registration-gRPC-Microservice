
import { Request, Response } from 'express';
import { User } from '../models/userModel';

class userController {
    async registerUser(req:Request, res:Response) : Promise<void>{
        const {name, email} = req.body

        console.log(name, email)  
        
        User.create({
            name,
            email
        })

        res.send("User Registered Successfully")
    }
}

export default new userController