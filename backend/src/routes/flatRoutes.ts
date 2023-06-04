import express from "express";
import * as FlatController from "../controllers/flatController";

const router = express.Router();

router.get("/all",FlatController.getAllFlats);
router.get("/one/:flatId",FlatController.getOneFlatDetails);
router.post("/create",FlatController.createFlatDetails);
// router.post("/createArr",FlatController.createOwnerDetailsArr);
router.patch("/update/:flatId",FlatController.updateFlatDetails);
router.delete("/delete/:flatId",FlatController.deleteFlatDetails);

export default router;