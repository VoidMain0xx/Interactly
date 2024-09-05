import { db } from '../../config/config.js';

export const createDBContact = async (req, res) => {
    const { first_name, last_name, email, mobile_number } = req.body;
    const query = 'INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)';

    try {
        const [result] = await db.execute(query, [first_name, last_name, email, mobile_number]);
        res.json({ id: result.insertId, first_name, last_name, email, mobile_number });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};




export const getDBContact = async (req, res) => {
    const { contact_id } = req.body;
    const query = 'SELECT * FROM contacts WHERE id = ?';

    try {
        const [rows] = await db.execute(query, [contact_id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateDBContact = async (req, res) => {
    const { contact_id, new_email, new_mobile_number } = req.body;
    const query = 'UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?';

    try {
        const [result] = await db.execute(query, [new_email, new_mobile_number, contact_id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Contact updated successfully' });
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteDBContact = async (req, res) => {
    const { contact_id } = req.body;
    const query = 'DELETE FROM contacts WHERE id = ?';

    try {
        const [result] = await db.execute(query, [contact_id]);
        if (result.affectedRows > 0) {
            res.json({ message: `Contact with ID ${contact_id} deleted successfully` });
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
