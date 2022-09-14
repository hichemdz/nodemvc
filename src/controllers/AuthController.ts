import { Request, Response } from "express";
import User from "../models/User";

class AuthController {

    async login(req: Request, res: Response) {
        if (req.method === 'GET') {
            console.log(req.session);
            const error = req.flash('error')
            res.render('login',{error})
        }
        else {
            const { email, password } = req.body
            const {state,message,data} = await User.auth(email, password)
            if(state) {
                req.session.auth = data;
                req.flash('success',message)
                return res.redirect('/');
            }  
            
            req.flash('error',message)
            return res.redirect('login');
            
            
        }


    }
}   

export default new AuthController();