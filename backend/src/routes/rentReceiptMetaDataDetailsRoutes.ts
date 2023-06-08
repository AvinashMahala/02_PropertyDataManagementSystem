import express from "express";
import * as RentReceiptMetaDataDetailsController from "../controllers/PaymentMetaDataController";


const router = express.Router();

router.get("/all",RentReceiptMetaDataDetailsController.getAllRentReceiptMetaDataDetails);
router.get("/one/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.getOneRentReceiptMetaDataDetails);
router.post("/create",RentReceiptMetaDataDetailsController.createRentReceiptMetaDataDetails);
router.post("/createArr",RentReceiptMetaDataDetailsController.createRentReceiptMetaDataDetailsArr);
router.patch("/update/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.updateRentReceiptMetaDataDetails);
router.delete("/delete/:rentReceiptMetaDataId",RentReceiptMetaDataDetailsController.deleteRentReceiptMetaDataDetails);



export default router;