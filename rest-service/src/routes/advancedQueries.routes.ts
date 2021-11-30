import { Router } from "express";

import advancedQueriesControllers from "../controllers/advancedQueriesControllers";

const advancedQueriesRoutes = Router();

advancedQueriesRoutes.get(
  "/clinics",
  advancedQueriesControllers.listClinicBySpecialty
);

advancedQueriesRoutes.get(
  "/:nomeEspec",
  advancedQueriesControllers.listDoctorsBySpecialty
);

export { advancedQueriesRoutes };
