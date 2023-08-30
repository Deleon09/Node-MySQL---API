import { pool } from "../db.js";


export const getEmployes = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.status(200).json(rows);

    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' });
    }
};

export const getEmploye = async(req, res) => {
    const { id } = req.params;
    
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        if(rows.length <= 0)
            return res.status(404).json({ message: `Employe with id ${id} does not exists` });

        res.status(200).json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' });
    }
};

export const createEmployes = async(req, res) => {
    const { name, salary } = req.body;
    
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
        res.status(200).json({
            id: rows.insertId,
            name,
            salary
        });

    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' });
    }
};

export const deleteEmployes = async(req, res) => {
    const { id } = req.params;
    
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

        if(result.affectedRows <= 0)
            return res.status(404).json({ message: `Employe with id ${id} does not exists` });

        res.status(200).json({ message: `Employe with id ${id} deleted successfully` });

    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' });
    }
};

export const updateEmployes = async(req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    
    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

        if(result.affectedRows === 0) return res.status(404).json({ 
            message: `Employe with id ${id} does not exists` 
        }); 

        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        res.status(200).json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: 'Something goes wrong' });
    }
};
