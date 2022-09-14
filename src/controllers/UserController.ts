import { Request, Response } from "express";
import {hash,compare} from '../halper';
import User from "../models/User";
import bcrypt from 'bcrypt'
class UserController {

    async create(req: Request, res: Response) {
         
        const {name,email,password} = req.body;

         const myHash = await hash('123');
        //  const result = await bcrypt.compare('123',myHash);
    
        

       const user = await  User.create({
            name:'lk',
            email:'lk@gmail.com',
            password:myHash
        })

        res.send(user);
        


    }
}   

export default new UserController();