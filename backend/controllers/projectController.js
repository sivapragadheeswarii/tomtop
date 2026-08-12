import Project from '../models/Project.js';

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new project
export const createProject = async (req, res) => {
  const { title, category, description, image, client, results, status } = req.body;

  try {
    const project = new Project({
      title,
      category,
      description,
      image: image || '',
      client: client || 'Enterprise Client',
      results: results || '100% Operational Efficiency',
      status: status || 'Active'
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  const { title, category, description, image, client, results, status } = req.body;

  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      project.title = title !== undefined ? title : project.title;
      project.category = category !== undefined ? category : project.category;
      project.description = description !== undefined ? description : project.description;
      project.image = image !== undefined ? image : project.image;
      project.client = client !== undefined ? client : project.client;
      project.results = results !== undefined ? results : project.results;
      project.status = status !== undefined ? status : project.status;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await project.deleteOne();
      res.json({ message: 'Project removed successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default projects from Portfolio Page
export const seedProjects = async () => {
  try {
    const defaultProjects = [
      {
        title: 'AI-Powered Predictive Enterprise ERP',
        category: 'AI & ERP',
        description: 'Next-gen enterprise cloud ERP software equipped with AI demand forecasting engines, automated GST invoicing, and real-time inventory sync.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        client: 'Global Manufacturing Corp',
        results: '99.4% Forecast Accuracy',
        status: 'Active'
      },
      {
        title: 'Industrial ERP & Billing Suite',
        category: 'ERP Application',
        description: 'Comprehensive enterprise resource planning platform managing paperless billing workflows, supply chain inventory, and employee payroll.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        client: 'Apex Manufacturing',
        results: '60% Faster Billing Execution',
        status: 'Active'
      },
      {
        title: 'Omnichannel E-Commerce & Retail POS',
        category: 'Web & POS Portal',
        description: 'Scalable e-commerce web portal integrated with barcode POS terminal sync across 14 retail branches.',
        image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80',
        client: 'Vogue Retail Chains',
        results: '300% Online Revenue Surge',
        status: 'Active'
      },
      {
        title: 'Campus Management & Student Portal',
        category: 'EdTech System',
        description: 'Integrated school management system handling student admissions, online fee collection, attendance tracking, and parent mobile portals.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        client: 'St. Joseph Educational Group',
        results: '10,000+ Active Student Accounts',
        status: 'Active'
      }
    ];

    for (const proj of defaultProjects) {
      const exists = await Project.findOne({ title: proj.title });
      if (!exists) {
        await Project.create(proj);
        console.log(`✅ Seeded default portfolio project: ${proj.title}`);
      }
    }

    // Clean up duplicate projects by title in MongoDB
    const allProjects = await Project.find({});
    const seenTitles = new Set();
    for (const p of allProjects) {
      const cleanTitle = p.title.trim().toLowerCase();
      if (seenTitles.has(cleanTitle)) {
        await Project.findByIdAndDelete(p._id);
        console.log(`🗑️ Removed duplicate project from MongoDB: ${p.title}`);
      } else {
        seenTitles.add(cleanTitle);
      }
    }
  } catch (error) {
    console.error('Error seeding projects:', error);
  }
};
