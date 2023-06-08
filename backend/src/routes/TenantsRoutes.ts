import express from "express";
import * as TenantController from "../controllers/TenantsController";

const router = express.Router();

router.get("/all",TenantController.getAllTenants);
router.get("/one/:tenantId",TenantController.getOneTenant);
router.post("/create",TenantController.createTenant);
// router.post("/createArr",TenantController.createOwnerDetailsArr);
router.patch("/update/:tenantId",TenantController.updateTenant);
router.delete("/delete/:tenantId",TenantController.deleteTenant);

export default router;