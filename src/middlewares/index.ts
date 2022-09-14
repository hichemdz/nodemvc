import { Request,Response,NextFunction } from "express";

const guestMiddelware = (req:Request,res:Response,next:NextFunction) => {

  if(req.session.auth) return res.redirect('/')

  next()
  
}

const authMiddelware = (req:Request,res:Response,next:NextFunction) => {
  if(! req.session.auth) return res.redirect('/login')

  next()
}


export {
  authMiddelware,
  guestMiddelware
}

