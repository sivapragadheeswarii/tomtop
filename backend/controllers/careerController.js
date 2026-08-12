import Career from '../models/Career.js';

// Get all careers/job openings
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find({}).sort({ createdAt: -1 });
    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new career/job opening
export const createCareer = async (req, res) => {
  const { title, category, type, location, experience, description, requirements, status } = req.body;

  try {
    const career = new Career({
      title,
      category,
      type: type || 'Full-Time',
      location: location || 'Madurai, TN / Remote',
      experience: experience || '1-3 Years',
      description,
      requirements: requirements || [],
      status: status || 'Open'
    });

    const createdCareer = await career.save();
    res.status(201).json(createdCareer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a career/job opening
export const updateCareer = async (req, res) => {
  const { title, category, type, location, experience, description, requirements, status } = req.body;

  try {
    const career = await Career.findById(req.params.id);

    if (career) {
      career.title = title || career.title;
      career.category = category || career.category;
      career.type = type || career.type;
      career.location = location || career.location;
      career.experience = experience || career.experience;
      career.description = description || career.description;
      career.requirements = requirements || career.requirements;
      career.status = status || career.status;

      const updatedCareer = await career.save();
      res.json(updatedCareer);
    } else {
      res.status(404).json({ message: 'Career opening not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a career/job opening
export const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (career) {
      await career.deleteOne();
      res.json({ message: 'Career opening removed successfully' });
    } else {
      res.status(404).json({ message: 'Career opening not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
