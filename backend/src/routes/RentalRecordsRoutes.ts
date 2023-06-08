import express from "express";
import * as RentController from "../controllers/RentalRecordsController";


const router = express.Router();

router.get("/all",RentController.RetrieveAllRecords);
router.get("/one/:rentId",RentController.RetrieveOneRecord);
router.post("/create",RentController.CreateOneRecord);
router.post("/createArr",RentController.CreateMultipleRecords);
router.patch("/update/:rentId",RentController.UpdateOneRecord);
router.delete("/delete/:rentId",RentController.DeleteOneRecord);



export default router;