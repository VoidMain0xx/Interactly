import { deleteCRMContact, getCRMContact, updateCRMContact } from '../Controller/crm.controller.js';
import { createDBContact } from '../Controller/db.controller.js';
import express from 'express'


const router = express.Router();

router.post('/createContact', async (req, res) => {
  const { data_store } = req.body;

  if (data_store === 'CRM') {
    return createDBContact(req, res);
  } else if (data_store === 'DATABASE') {
    return createDBContact(req, res);
  } else {
    return res.status(400).json({ error: 'Invalid data_store value' });
  }
});

router.post('/getContact', async (req, res) => {
  const { data_store } = req.body;

  if (data_store === 'CRM') {
    return getCRMContact(req, res);
  } else if (data_store === 'DATABASE') {
    return getDBContact(req, res);
  } else {
    return res.status(400).json({ error: 'Invalid data_store value' });
  }
});

router.post('/updateContact', async (req, res) => {
  const { data_store } = req.body;

  if (data_store === 'CRM') {
    return updateCRMContact(req, res);
  } else if (data_store === 'DATABASE') {
    return updateDBContact(req, res);
  } else {
    return res.status(400).json({ error: 'Invalid data_store value' });
  }
});

router.post('/deleteContact', async (req, res) => {
  const { data_store } = req.body;

  if (data_store === 'CRM') {
    return deleteCRMContact(req, res);
  } else if (data_store === 'DATABASE') {
    return deleteDBContact(req, res);
  } else {
    return res.status(400).json({ error: 'Invalid data_store value' });
  }
});

export default router;
