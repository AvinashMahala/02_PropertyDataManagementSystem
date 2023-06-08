import express from "express";
import * as RentReceiptMetaDataDetailsController from "../controllers/PaymentMetaDataController";


const router = express.Router();

router.get("/all",RentReceiptMetaDataDetailsController.RetrieveAllRecords);
router.get("/one/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.RetrieveOneRecord);
router.post("/create",RentReceiptMetaDataDetailsController.CreateOneRecord);
router.post("/createArr",RentReceiptMetaDataDetailsController.CreateMultipleRecords);
router.patch("/update/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.UpdateOneRecord);
router.delete("/delete/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.DeleteOneRecord);



export default router;