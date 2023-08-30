import { Router } from "express";
import { createEmployes, deleteEmployes, getEmployes, getEmploye, updateEmployes } from "../controllers/employes.js";

const router = Router();

router.get('/employees', getEmployes);

router.get('/employees/:id', getEmploye);

router.post('/employees', createEmployes);

router.patch('/employees/:id', updateEmployes);

router.delete('/employees/:id', deleteEmployes);

export default router;