import express from "express";
import * as MaintenanceController from "../controllers/maintenanceController";


const router = express.Router();

router.get("/all",MaintenanceController.getAllMaintenanceRequests);
router.get("/one/:maintenanceId",MaintenanceController.getOneMaintenanceRequest);
router.post("/create",MaintenanceController.createMaintenanceRequest);
// router.post("/createArr",MaintenanceController.createRentArr);
router.patch("/update/:maintenanceId",MaintenanceController.updateMaintenanceRequest);
router.delete("/delete/:maintenanceId",MaintenanceController.deleteMaintenanceRequest);



export default router;