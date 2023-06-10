import express from "express";
import * as TenantController from "../controllers/TenantsController";

const router = express.Router();

router.get("/all",TenantController.RetrieveAllRecords);
router.get("/one/:tenantId",TenantController.RetrieveOneRecord);
router.post("/create",TenantController.CreateOneRecord);
// router.post("/createArr",TenantController.CreateMultipleRecords);
router.patch("/update/:tenantId",TenantController.UpdateOneRecord);
router.delete("/delete/:tenantId",TenantController.DeleteOneRecord);

export default router;