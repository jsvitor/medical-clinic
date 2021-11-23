import { Router } from "express";

import doctorController from "../controllers/doctorControllers";

const doctorRoutes = Router();

doctorRoutes.post("/", doctorController.createDoctor);

doctorRoutes.get("/", doctorController.listAllDoctors);

doctorRoutes.put("/", doctorController.updateDoctor);

doctorRoutes.delete("/", doctorController.deleteOneDoctor);

export { doctorRoutes };
