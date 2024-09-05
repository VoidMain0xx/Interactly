import axios from 'axios';

export const createCRMContact = async (req, res) => { 
  const { first_name, last_name, email, mobile_number } = req.body;

  try {
    const response = await axios.post(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts`, {
      contact: { first_name, last_name, email, mobile_number },
    }, {
      headers: {
        'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCRMContact = async (req, res) => {
  const { contact_id } = req.body;

  try {
      const response = await axios.get(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
          headers: {
              'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
              'Content-Type': 'application/json',
          },
      });

      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

export const updateCRMContact = async (req, res) => {
  const { contact_id, new_email, new_mobile_number } = req.body;

  try {
      const response = await axios.put(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
          contact: { email: new_email, mobile_number: new_mobile_number },
      }, {
          headers: {
              'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
              'Content-Type': 'application/json',
          },
      });

      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};



export const deleteCRMContact = async (req, res) => {
  const { contact_id } = req.body;

  try {
      await axios.delete(`https://${process.env.FRESHSALES_DOMAIN}.freshsales.io/api/contacts/${contact_id}`, {
          headers: {
              'Authorization': `Token token=${process.env.FRESHSALES_API_KEY}`,
              'Content-Type': 'application/json',
          },
      });

      res.json({ message: `Contact with ID ${contact_id} deleted successfully` });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


