import { pool } from "../db.js";


export const getEmployes = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.status(200).json(rows);
};

export const createEmployes = async(req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
    res.status(200).json({
        id: rows.insertId,
        name,
        salary
    });
};

export const updateEmployes = (req, res) => res.send('Updating employees');

export const deleteEmployes = (req, res) => res.send('Deleting employees');