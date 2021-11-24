import { Router } from "express";

import patientController from "../controllers/patientControllers";

const patientRoutes = Router();

patientRoutes.post("/", patientController.createPatient);

patientRoutes.get("/", patientController.listAllPatients);

patientRoutes.put("/", patientController.updatePatient);

patientRoutes.delete("/", patientController.deleteOnePatient);

export { patientRoutes };