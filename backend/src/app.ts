import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import env from "./util/validateenv";
import MongoStore  from "connect-mongo";
import { requiresAuth } from "./middleware/auth";

import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import ownerDetailsRoutes from "./routes/ownerDetailsRoutes";
import rentReceiptMetaDataDetailsRoutes from "./routes/rentReceiptMetaDataDetailsRoutes";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60 * 60 * 1000, 
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_CONNECTION_STRING
    })
}));


app.use("/api/users", userRoutes);
app.use("/api/ownerDetails", requiresAuth, ownerDetailsRoutes);
app.use("/api/rentReceiptMetaDataDetails", rentReceiptMetaDataDetailsRoutes);
app.use("/api/notes", requiresAuth, notesRoutes);

app.use((req, res, next)=>{
    next(createHttpError(404,"Endpoint not Found!!"));
});


app.use((error:unknown, req:Request, res:Response, next:NextFunction)=>{
    //console.log(error);
    let errorMessage="An Unknown Error Occurred!";
    let statusCode=500;
    if(isHttpError(error)){
        statusCode=error.status;
        errorMessage=error.message;
    }
    res.status(statusCode).json({error: errorMessage});
});

export default app;