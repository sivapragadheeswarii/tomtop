import Document from '../models/Document.js';

// Get all documents
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({}).sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new document
export const createDocument = async (req, res) => {
  const { name, category, fileType, fileUrl, fileSize, description } = req.body;

  try {
    const document = new Document({
      name,
      category: category || 'Company Documents',
      fileType: fileType || 'PDF',
      fileUrl: fileUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: fileSize || '1.5 MB',
      description: description || ''
    });

    const createdDocument = await document.save();
    res.status(201).json(createdDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a document
export const updateDocument = async (req, res) => {
  const { name, category, fileType, fileUrl, fileSize, description } = req.body;

  try {
    const document = await Document.findById(req.params.id);

    if (document) {
      document.name = name !== undefined ? name : document.name;
      document.category = category !== undefined ? category : document.category;
      document.fileType = fileType !== undefined ? fileType : document.fileType;
      document.fileUrl = fileUrl !== undefined ? fileUrl : document.fileUrl;
      document.fileSize = fileSize !== undefined ? fileSize : document.fileSize;
      document.description = description !== undefined ? description : document.description;

      const updatedDocument = await document.save();
      res.json(updatedDocument);
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a document
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (document) {
      await document.deleteOne();
      res.json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed default documents
export const seedDocuments = async () => {
  try {
    const defaultDocuments = [
      {
        name: 'Tomtop Corporate Incorporation Certificate',
        category: 'Company Documents',
        fileType: 'PDF',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileSize: '2.4 MB',
        description: 'Official corporate registration & tax incorporation agreement documents.'
      },
      {
        name: 'ClearBill ERP Enterprise Client Agreement',
        category: 'Contracts',
        fileType: 'DOCX',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileSize: '1.1 MB',
        description: 'Master service level agreement (SLA) for enterprise software deployment.'
      },
      {
        name: 'GST Tax Compliance & Invoicing Records 2026',
        category: 'Invoices',
        fileType: 'PDF',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileSize: '3.8 MB',
        description: 'Quarterly audited tax invoice statements and compliance filings.'
      }
    ];

    for (const doc of defaultDocuments) {
      const exists = await Document.findOne({ name: doc.name });
      if (!exists) {
        await Document.create(doc);
        console.log(`✅ Seeded default document: ${doc.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding documents:', error);
  }
};
