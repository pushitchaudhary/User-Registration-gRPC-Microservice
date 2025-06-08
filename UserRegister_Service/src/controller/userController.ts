
import { Request, Response } from 'express';

class userController {
    async registerUser(req:Request, res:Response) : Promise<void>{
        const {name, email} = req.body

        console.log(name, email)    
    }
}

export default new userController