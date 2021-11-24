import { Router } from "express";

// import { clinicRoutes } from "./clinic.routes";
import { doctorRoutes } from "./doctors.routes";
import { patientRoutes } from "./patient.routes";

const router = Router();

/* 
- [x]  Doctor
- [ ]  Clinics
- [ ]  Patients
- [ ]  specialties
- [ ]  appointment schedule
- [ ]  medical clinic
*/

router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
// router.use("/clinic", clinicRoutes);

export { router };
