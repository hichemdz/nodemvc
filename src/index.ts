import express ,{Express,Response,Request, NextFunction}from 'express';
import path from 'path';
import dotenv from 'dotenv';
import hbs from 'hbs';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import cookieParser from "cookie-parser";
import session  from  'express-session';
import csurf from 'csurf';


import {web} from './routes';
import {sessionOption} from './configs';

dotenv.config();

const app:Express = express()

const port = process.env.port || 8000;


// statcis 

app.use(express.static(path.join(__dirname,'public','assets')))
// views 
app.set('views', path.join(__dirname,'public', 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({extended:false}))
app.use(session(sessionOption))
app.use(cookieParser())
app.use(flash());
app.use(csurf({cookie:true}))
app.use(morgan(':method :url :http-version :referrer :remote-addr :remote-user :req[header] :res[header] :response-time[digits] :status :total-time[digits]'));


app.use((req:Request,res:Response,next:NextFunction)=>{
   
   req.app.locals.csrf = req.csrfToken;
   next();
})

app.use(web);



 
app.listen(port,()=>{
   console.log(`start server on http://localhost:${port}`);
   
})




