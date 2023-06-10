import express from "express";
import * as OwnerDetailsController from "../controllers/OwnersController";


const router = express.Router();

router.get("/all",OwnerDetailsController.RetrieveAllRecords);
router.get("/one/:ownerId",OwnerDetailsController.RetrieveOneRecord);
router.post("/create",OwnerDetailsController.CreateOneRecord);
router.post("/createArr",OwnerDetailsController.CreateMultipleRecords);
router.patch("/update/:ownerId",OwnerDetailsController.UpdateOneRecord);
router.delete("/delete/:ownerId",OwnerDetailsController.DeleteOneRecord);



export default router;