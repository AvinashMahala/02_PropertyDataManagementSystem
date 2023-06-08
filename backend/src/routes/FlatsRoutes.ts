import express from "express";
import * as FlatsController from "../controllers/FlatsController";

const router = express.Router();

router.get("/all",FlatsController.RetrieveAllRecords);
router.get("/one/:flatId",FlatsController.RetrieveOneRecord);
router.post("/create",FlatsController.CreateOneRecord);
// router.post("/createArr",FlatsController.CreateFlatDetailsArr);
router.patch("/update/:flatId",FlatsController.UpdateOneRecord);
router.delete("/delete/:flatId",FlatsController.DeleteOneRecord);

export default router;