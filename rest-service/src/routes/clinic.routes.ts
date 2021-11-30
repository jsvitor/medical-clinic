import { Router } from "express";

import clinicController from "../controllers/clinicControllers";

const clinicRoutes = Router();

clinicRoutes.post("/", clinicController.createClinic);

clinicRoutes.get("/", clinicController.listAllClinics);

clinicRoutes.put("/", clinicController.updateClinic);

clinicRoutes.delete("/", clinicController.deleteOneClinic);

export { clinicRoutes };