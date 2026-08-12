import Application from '../models/Application.js';

// Submit job application (public)
export const submitApplication = async (req, res) => {
  const { name, email, phone, role, resumeUrl, message } = req.body;

  try {
    const application = new Application({
      name,
      email,
      phone,
      role,
      resumeUrl,
      message: message || ''
    });

    const savedApplication = await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application: savedApplication });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all applications (Admin only)
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update application status (Admin only)
export const updateApplicationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      application.status = status || application.status;
      const updatedApp = await application.save();
      res.json(updatedApp);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete application (Admin only)
export const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      await application.deleteOne();
      res.json({ message: 'Application removed successfully' });
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
