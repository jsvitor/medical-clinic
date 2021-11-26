import { Router } from "express";

import advancedQueriesControllers from "../controllers/advancedQueriesControllers";

const advancedQueriesRoutes = Router();

advancedQueriesRoutes.get("/clinics", advancedQueriesControllers.listClinicBySpecialty);


export { advancedQueriesRoutes };