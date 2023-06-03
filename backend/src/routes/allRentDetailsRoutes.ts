import express from "express";
import * as RentController from "../controllers/rentController";


const router = express.Router();

router.get("/all",RentController.getAllRents);
router.get("/one/:rentId",RentController.getOneRent);
router.post("/create",RentController.createRent);
router.post("/createArr",RentController.createRentArr);
router.patch("/update/:rentId",RentController.updateRent);
router.delete("/delete/:rentId",RentController.deleteRent);



export default router;