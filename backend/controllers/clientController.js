import Client from '../models/Client.js';

// Get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({}).sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new client
export const createClient = async (req, res) => {
  const { name, company, email, phone, address, service, status, notes } = req.body;

  try {
    const client = new Client({
      name,
      company: company || '',
      email: email || '',
      phone: phone || '',
      address: address || '',
      service: service || 'Enterprise Software',
      status: status || 'Active',
      notes: notes || ''
    });

    const createdClient = await client.save();
    res.status(201).json(createdClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a client
export const updateClient = async (req, res) => {
  const { name, company, email, phone, address, service, status, notes } = req.body;

  try {
    const client = await Client.findById(req.params.id);

    if (client) {
      client.name = name !== undefined ? name : client.name;
      client.company = company !== undefined ? company : client.company;
      client.email = email !== undefined ? email : client.email;
      client.phone = phone !== undefined ? phone : client.phone;
      client.address = address !== undefined ? address : client.address;
      client.service = service !== undefined ? service : client.service;
      client.status = status !== undefined ? status : client.status;
      client.notes = notes !== undefined ? notes : client.notes;

      const updatedClient = await client.save();
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a client
export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (client) {
      await client.deleteOne();
      res.json({ message: 'Client deleted successfully' });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default clients
export const seedClients = async () => {
  try {
    const defaultClients = [
      {
        name: 'Balakrishnan R.',
        company: 'Vogue Retail Chains Ltd',
        email: 'balakrishnan@vogueretail.in',
        phone: '+91 98421 10293',
        address: 'KK Nagar, Madurai, TN',
        service: 'Omnichannel E-Commerce & Barcode POS',
        status: 'Active',
        notes: 'Enterprise retail chain client operating 14 store locations.'
      },
      {
        name: 'Suresh Kumar',
        company: 'Apex Industrial Manufacturing',
        email: 'suresh@apexind.com',
        phone: '+91 94431 88920',
        address: 'SIDCO Industrial Estate, Trichy, TN',
        service: 'Industrial ERP & Paperless Billing Suite',
        status: 'Active',
        notes: 'Full manufacturing process automation and warehouse stock sync.'
      },
      {
        name: 'Dr. Meenakshi Sundaram',
        company: 'St. Joseph Educational Academy',
        email: 'sundaram@stjoseph.edu.in',
        phone: '+91 97892 44100',
        address: 'Anna Nagar, Chennai, TN',
        service: 'GuruDesk Campus ERP & Mobile Portal',
        status: 'Prospect',
        notes: 'Evaluating cloud campus management software for 8,000+ students.'
      }
    ];

    for (const c of defaultClients) {
      const exists = await Client.findOne({ name: c.name });
      if (!exists) {
        await Client.create(c);
        console.log(`✅ Seeded default client: ${c.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding clients:', error);
  }
};
