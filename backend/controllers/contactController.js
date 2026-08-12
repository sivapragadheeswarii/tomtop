import Contact from '../models/Contact.js';

// Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact
export const createContact = async (req, res) => {
  const { name, organization, designation, phone, email, category, notes } = req.body;

  try {
    const contact = new Contact({
      name,
      organization: organization || '',
      designation: designation || '',
      phone: phone || '',
      email: email || '',
      category: category || 'Business Contact',
      notes: notes || ''
    });

    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a contact
export const updateContact = async (req, res) => {
  const { name, organization, designation, phone, email, category, notes } = req.body;

  try {
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      contact.name = name !== undefined ? name : contact.name;
      contact.organization = organization !== undefined ? organization : contact.organization;
      contact.designation = designation !== undefined ? designation : contact.designation;
      contact.phone = phone !== undefined ? phone : contact.phone;
      contact.email = email !== undefined ? email : contact.email;
      contact.category = category !== undefined ? category : contact.category;
      contact.notes = notes !== undefined ? notes : contact.notes;

      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (contact) {
      await contact.deleteOne();
      res.json({ message: 'Contact deleted successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default contacts
export const seedContacts = async () => {
  try {
    const defaultContacts = [
      {
        name: 'Karthik Raja M.',
        organization: 'Apex Solutions Group',
        designation: 'Chief Operations Officer (COO)',
        phone: '+91 98401 55210',
        email: 'karthik@apexgroup.com',
        category: 'Client',
        notes: 'Primary point of contact for enterprise software SLA and cloud upgrades.'
      },
      {
        name: 'Priya Dharshini',
        organization: 'AWS Cloud Services Partner',
        designation: 'Senior Cloud Solutions Architect',
        phone: '+91 97100 22340',
        email: 'priya.architect@aws-partner.net',
        category: 'Partner',
        notes: 'Cloud hosting infrastructure setup and NVMe server optimization.'
      },
      {
        name: 'Venkatesh S.',
        organization: 'NextGen Hardware Systems',
        designation: 'Regional Hardware Vendor',
        phone: '+91 94440 12890',
        email: 'venkat@nextgenhardware.in',
        category: 'Vendor',
        notes: 'Thermal POS barcode scanner & receipt printer hardware supplier.'
      }
    ];

    for (const c of defaultContacts) {
      const exists = await Contact.findOne({ name: c.name });
      if (!exists) {
        await Contact.create(c);
        console.log(`✅ Seeded default contact: ${c.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding contacts:', error);
  }
};
