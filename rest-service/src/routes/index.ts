import { Router } from "express";

import { advancedQueriesRoutes } from "./advancedQueries.routes";
import { clinicRoutes } from "./clinic.routes";
import { doctorRoutes } from "./doctors.routes";
import { patientRoutes } from "./patient.routes";
import { specialtyRoutes } from "./specialty.routes";

const router = Router();

/* 
- [x]  Doctor
- [x]  Clinics
- [x]  Patients
- [x]  specialties
- [ ]  appointment schedule
- [ ]  medical clinic
*/

router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/clinic", clinicRoutes);
router.use("/specialty", specialtyRoutes);
router.use("/advancedquery", advancedQueriesRoutes);

export { router };
