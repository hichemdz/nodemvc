import { Request,Response } from "express";

class HomeController {
    
    public index (req:Request,res:Response){
        const success = req.flash('success')
        res.render('index',{success}) 
    }
}

export default new HomeController();