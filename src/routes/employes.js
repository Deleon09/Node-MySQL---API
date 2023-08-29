import { Router } from "express";
import { createEmployes, deleteEmployes, getEmployes, updateEmployes } from "../controllers/employes.js";

const router = Router();

router.get('/employees', getEmployes);

router.post('/employees', createEmployes);

router.put('/employees', updateEmployes);

router.delete('/employees', deleteEmployes);

export default router;