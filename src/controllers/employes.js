import { pool } from "../db.js";


export const getEmployes = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.status(200).json(rows);
};

export const getEmploye = async(req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

    if(rows.length <= 0)
        return res.status(404).json({ message: `Employe with id ${id} does not exists` });

    res.status(200).json(rows[0]);
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

export const deleteEmployes = async(req, res) => {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

    if(result.affectedRows <= 0)
        return res.status(404).json({ message: `Employe with id ${id} does not exists` });

    res.status(200).json({ message: `Employe with id ${id} deleted successfully` });
};

export const updateEmployes = (req, res) => res.send('Updating employees');
