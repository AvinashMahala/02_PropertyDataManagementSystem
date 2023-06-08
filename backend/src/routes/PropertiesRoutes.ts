import express from "express";
import * as AllPropertiesController from "../controllers/PropertiesController";


const router = express.Router();

router.get("/all",AllPropertiesController.RetrieveAllRecords);
router.get("/one/:propertyId",AllPropertiesController.RetrieveOneRecord);
router.post("/create",AllPropertiesController.CreateOneRecord);
// router.post("/createArr",AllPropertiesController.CreateMultipleRecords);
router.patch("/update/:propertyId",AllPropertiesController.UpdateOneRecord);
router.delete("/delete/:propertyId",AllPropertiesController.DeleteOneRecord);



export default router;