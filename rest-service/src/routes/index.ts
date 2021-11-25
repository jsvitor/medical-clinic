import { Router } from "express";

import { clinicRoutes } from "./clinic.routes";
import { doctorRoutes } from "./doctors.routes";
import { patientRoutes } from "./patient.routes";
import { specialtyRoutes } from "./specialty.routes";

const router = Router();

/* 
- [x]  Doctor
- [x]  Clinics
- [x]  Patients
- [ ]  specialties
- [ ]  appointment schedule
- [ ]  medical clinic
*/

router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/clinic", clinicRoutes);
router.use("/specialty", specialtyRoutes);

export { router };
