import express from "express";
import * as AllPropertiesController from "../controllers/PropertiesController";


const router = express.Router();

router.get("/all",AllPropertiesController.getAllPropertiesDetails);
router.get("/one/:propertyId",AllPropertiesController.getOnePropertiesDetails);
router.post("/create",AllPropertiesController.createPropertyDetails);
// router.post("/createArr",AllPropertiesController.createOwnerDetailsArr);
router.patch("/update/:propertyId",AllPropertiesController.updatePropertyDetails);
router.delete("/delete/:propertyId",AllPropertiesController.deletePropertyDetails);



export default router;