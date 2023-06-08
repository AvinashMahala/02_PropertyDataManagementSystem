import express from "express";
import * as MaintenanceController from "../controllers/MaintenanceRequestsController";


const router = express.Router();

router.get("/all",MaintenanceController.RetrieveAllRecords);
router.get("/one/:maintenanceId",MaintenanceController.RetrieveOneRecord);
router.post("/create",MaintenanceController.CreateOneRecord);
// router.post("/createArr",MaintenanceController.CreateMultipleRecords);
router.patch("/update/:maintenanceId",MaintenanceController.UpdateOneRecord);
router.delete("/delete/:maintenanceId",MaintenanceController.DeleteOneRecord);



export default router;