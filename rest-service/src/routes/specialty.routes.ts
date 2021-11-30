import { Router } from "express";

import specialtyController from "../controllers/specialtyControllers";

const specialtyRoutes = Router();

specialtyRoutes.post("/", specialtyController.createSpecialty);

specialtyRoutes.get("/", specialtyController.listAllSpecialties);

specialtyRoutes.put("/", specialtyController.updateSpecialty);

specialtyRoutes.delete("/", specialtyController.deleteOneSpecialty);

export { specialtyRoutes };
