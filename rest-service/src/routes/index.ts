import { Router } from "express";

import { doctorRoutes } from "./doctors.routes";

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

export { router };
