import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Box, FolderKanban, Briefcase, Users, Plus, Edit3, Trash2,
  LogOut, ShieldCheck, CheckCircle2, Search, X, Loader2,
  ExternalLink, FileText, CheckSquare, Sparkles, RefreshCw, Menu,
  ChevronRight, Database, Eye, Globe, ArrowUpRight, TrendingUp, Bell,
  Download, Phone, Mail, Building2, UserCheck, PhoneCall, FileCheck, FileCode,
  Paperclip, Tag, Calendar, Upload, File, Image, Check
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'portfolio' | 'documents' | 'clients' | 'contacts' | 'careers' | 'applications'
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initial State from Backend
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [careers, setCareers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Category & Status Filters
  const [docCategoryFilter, setDocCategoryFilter] = useState('All');
  const [clientStatusFilter, setClientStatusFilter] = useState('All');
  const [contactCategoryFilter, setContactCategoryFilter] = useState('All');

  // Modal States - Core
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '', category: 'Billing Software', shortDesc: '', features: '', image: '', status: 'Active'
  });

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', category: 'Software Development', description: '', client: '', results: '', image: '', status: 'Active'
  });

  const [showCareerModal, setShowCareerModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);
  const [careerForm, setCareerForm] = useState({
    title: '', category: 'Software Development', type: 'Full-Time', location: 'Madurai, TN', experience: '1-3 Years', description: '', status: 'Open'
  });

  // Modal States - New 3 Modules
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [docUploadMode, setDocUploadMode] = useState('file'); // 'file' | 'url'
  const [uploadingDocFile, setUploadingDocFile] = useState(false);
  const [docFileName, setDocFileName] = useState('');
  const [documentForm, setDocumentForm] = useState({
    name: '', category: 'Company Documents', fileType: 'PDF', fileUrl: '', fileSize: '', description: ''
  });

  const [showClientModal, setShowClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [clientForm, setClientForm] = useState({
    name: '', company: '', email: '', phone: '', address: '', service: 'Enterprise Software', status: 'Active', notes: ''
  });

  const [showContactModal, setShowContactModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '', organization: '', designation: '', phone: '', email: '', category: 'Business Contact', notes: ''
  });

  const token = localStorage.getItem('tomtop_admin_token');
  const adminUser = JSON.parse(localStorage.getItem('tomtop_admin_user') || '{}');

  const getApiPort = () => localStorage.getItem('tomtop_api_port') || '5001';
  const getApiBase = () => `http://localhost:${getApiPort()}/api`;

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchBackendData();
    }
  }, [token]);

  const fetchBackendData = async () => {
    setLoading(true);
    try {
      const apiBase = getApiBase();

      // Fetch Products
      const prodRes = await fetch(`${apiBase}/products`);
      if (prodRes.ok) {
        const prodData = await prodRes.json();
        if (Array.isArray(prodData)) setProducts(prodData);
      }

      // Fetch Portfolio Projects
      const projRes = await fetch(`${apiBase}/projects`);
      if (projRes.ok) {
        const projData = await projRes.json();
        if (Array.isArray(projData)) setProjects(projData);
      }

      // Fetch Careers
      const carRes = await fetch(`${apiBase}/careers`);
      if (carRes.ok) {
        const carData = await carRes.json();
        if (Array.isArray(carData)) setCareers(carData);
      }

      // Fetch Applications
      const appRes = await fetch(`${apiBase}/applications`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (appRes.ok) {
        const appData = await appRes.json();
        if (Array.isArray(appData)) setApplications(appData);
      }

      // Fetch Documents
      const docRes = await fetch(`${apiBase}/documents`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (docRes.ok) {
        const docData = await docRes.json();
        if (Array.isArray(docData)) setDocuments(docData);
      }

      // Fetch Clients
      const cliRes = await fetch(`${apiBase}/clients`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (cliRes.ok) {
        const cliData = await cliRes.json();
        if (Array.isArray(cliData)) setClients(cliData);
      }

      // Fetch Contacts
      const conRes = await fetch(`${apiBase}/contacts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (conRes.ok) {
        const conData = await conRes.json();
        if (Array.isArray(conData)) setContacts(conData);
      }

    } catch (err) {
      console.warn('Backend server offline:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('tomtop_admin_token');
    localStorage.removeItem('tomtop_admin_user');
    navigate('/admin/login');
  };

  // ── 1. PRODUCT HANDLERS ──
  const openProductForm = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setProductForm({
        ...product,
        features: Array.isArray(product.features) ? product.features.join(', ') : (product.features || '')
      });
    } else {
      setEditingProduct(null);
      setProductForm({
        name: '', category: 'Billing Software', shortDesc: '', features: '', image: '', status: 'Active'
      });
    }
    setShowProductModal(true);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...productForm,
        features: typeof productForm.features === 'string'
          ? productForm.features.split(',').map(f => f.trim()).filter(Boolean)
          : productForm.features
      };

      if (editingProduct) {
        const res = await fetch(`${getApiBase()}/products/${editingProduct._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const updated = await res.json();
          setProducts(products.map(p => p._id === editingProduct._id ? updated : p));
        }
      } else {
        const res = await fetch(`${getApiBase()}/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const created = await res.json();
          setProducts([created, ...products]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowProductModal(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await fetch(`${getApiBase()}/products/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 2. PORTFOLIO PROJECT HANDLERS ──
  const openProjectForm = (project = null) => {
    if (project) {
      setEditingProject(project);
      setProjectForm(project);
    } else {
      setEditingProject(null);
      setProjectForm({
        title: '', category: 'Software Development', description: '', client: '', results: '', image: '', status: 'Active'
      });
    }
    setShowProjectModal(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    try {
      if (editingProject) {
        const res = await fetch(`${getApiBase()}/projects/${editingProject._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(projectForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setProjects(projects.map(p => p._id === editingProject._id ? updated : p));
        }
      } else {
        const res = await fetch(`${getApiBase()}/projects`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(projectForm)
        });
        if (res.ok) {
          const created = await res.json();
          setProjects([created, ...projects]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowProjectModal(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio project?')) return;
    try {
      await fetch(`${getApiBase()}/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 3. CAREER HANDLERS ──
  const openCareerForm = (career = null) => {
    if (career) {
      setEditingCareer(career);
      setCareerForm(career);
    } else {
      setEditingCareer(null);
      setCareerForm({
        title: '', category: 'Software Development', type: 'Full-Time', location: 'Madurai, TN', experience: '1-3 Years', description: '', status: 'Open'
      });
    }
    setShowCareerModal(true);
  };

  const handleSaveCareer = async (e) => {
    e.preventDefault();
    try {
      if (editingCareer) {
        const res = await fetch(`${getApiBase()}/careers/${editingCareer._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(careerForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setCareers(careers.map(c => c._id === editingCareer._id ? updated : c));
        }
      } else {
        const res = await fetch(`${getApiBase()}/careers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(careerForm)
        });
        if (res.ok) {
          const created = await res.json();
          setCareers([created, ...careers]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowCareerModal(false);
    }
  };

  const handleDeleteCareer = async (id) => {
    if (!window.confirm('Are you sure you want to delete this career opening?')) return;
    try {
      await fetch(`${getApiBase()}/careers/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setCareers(careers.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 4. APPLICATION HANDLERS ──
  const handleUpdateAppStatus = async (id, status) => {
    try {
      const res = await fetch(`${getApiBase()}/applications/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setApplications(applications.map(a => a._id === id ? { ...a, status } : a));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteApplication = async (id) => {
    if (!window.confirm('Are you sure you want to delete this candidate application?')) return;
    try {
      await fetch(`${getApiBase()}/applications/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setApplications(applications.filter(a => a._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 5. DOCUMENT HANDLERS (NEW MODULE 1) ──
  const openDocumentForm = (doc = null) => {
    if (doc) {
      setEditingDocument(doc);
      setDocumentForm(doc);
      setDocFileName(doc.name || '');
      setDocUploadMode(doc.fileUrl && doc.fileUrl.startsWith('data:') ? 'file' : (doc.fileUrl ? 'url' : 'file'));
    } else {
      setEditingDocument(null);
      setDocumentForm({
        name: '', category: 'Company Documents', fileType: 'PDF', fileUrl: '', fileSize: '', description: ''
      });
      setDocFileName('');
      setDocUploadMode('file');
    }
    setShowDocumentModal(true);
  };

  const handleDocFileSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploadingDocFile(true);
    setDocFileName(file.name);

    // Calculate file size
    let sizeStr = '';
    if (file.size < 1024 * 1024) {
      sizeStr = `${(file.size / 1024).toFixed(1)} KB`;
    } else {
      sizeStr = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    }

    // Auto detect document category format
    const ext = file.name.split('.').pop().toUpperCase();
    let detectedType = 'PDF';
    if (['PNG', 'JPG', 'JPEG', 'WEBP', 'GIF', 'SVG'].includes(ext)) {
      detectedType = 'PNG';
    } else if (['DOC', 'DOCX'].includes(ext)) {
      detectedType = 'DOCX';
    } else if (['XLS', 'XLSX', 'CSV'].includes(ext)) {
      detectedType = 'XLSX';
    } else if (['ZIP', 'RAR', '7Z', 'TAR'].includes(ext)) {
      detectedType = 'ZIP';
    } else if (ext === 'PDF') {
      detectedType = 'PDF';
    } else {
      detectedType = ext || 'OTHER';
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      setDocumentForm(prev => ({
        ...prev,
        name: prev.name ? prev.name : file.name.replace(/\.[^/.]+$/, ""),
        fileType: detectedType,
        fileSize: sizeStr,
        fileUrl: base64Data
      }));
      setUploadingDocFile(false);
    };
    reader.onerror = () => {
      alert("Failed to read file.");
      setUploadingDocFile(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveDocument = async (e) => {
    e.preventDefault();
    try {
      if (editingDocument) {
        const res = await fetch(`${getApiBase()}/documents/${editingDocument._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(documentForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setDocuments(documents.map(d => d._id === editingDocument._id ? updated : d));
        }
      } else {
        const res = await fetch(`${getApiBase()}/documents`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(documentForm)
        });
        if (res.ok) {
          const created = await res.json();
          setDocuments([created, ...documents]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowDocumentModal(false);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;
    try {
      await fetch(`${getApiBase()}/documents/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setDocuments(documents.filter(d => d._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 6. CLIENT HANDLERS (NEW MODULE 2) ──
  const openClientForm = (client = null) => {
    if (client) {
      setEditingClient(client);
      setClientForm(client);
    } else {
      setEditingClient(null);
      setClientForm({
        name: '', company: '', email: '', phone: '', address: '', service: 'Enterprise Software', status: 'Active', notes: ''
      });
    }
    setShowClientModal(true);
  };

  const handleSaveClient = async (e) => {
    e.preventDefault();
    try {
      if (editingClient) {
        const res = await fetch(`${getApiBase()}/clients/${editingClient._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(clientForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setClients(clients.map(c => c._id === editingClient._id ? updated : c));
        }
      } else {
        const res = await fetch(`${getApiBase()}/clients`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(clientForm)
        });
        if (res.ok) {
          const created = await res.json();
          setClients([created, ...clients]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowClientModal(false);
    }
  };

  const handleDeleteClient = async (id) => {
    if (!window.confirm('Are you sure you want to delete this client entry?')) return;
    try {
      await fetch(`${getApiBase()}/clients/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setClients(clients.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // ── 7. CONTACT HANDLERS (NEW MODULE 3) ──
  const openContactForm = (contact = null) => {
    if (contact) {
      setEditingContact(contact);
      setContactForm(contact);
    } else {
      setEditingContact(null);
      setContactForm({
        name: '', organization: '', designation: '', phone: '', email: '', category: 'Business Contact', notes: ''
      });
    }
    setShowContactModal(true);
  };

  const handleSaveContact = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        const res = await fetch(`${getApiBase()}/contacts/${editingContact._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(contactForm)
        });
        if (res.ok) {
          const updated = await res.json();
          setContacts(contacts.map(c => c._id === editingContact._id ? updated : c));
        }
      } else {
        const res = await fetch(`${getApiBase()}/contacts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(contactForm)
        });
        if (res.ok) {
          const created = await res.json();
          setContacts([created, ...contacts]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowContactModal(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact entry?')) return;
    try {
      await fetch(`${getApiBase()}/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(contacts.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Search & Category Filters
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCareers = careers.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredApplications = applications.filter(a =>
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = documents.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = docCategoryFilter === 'All' || d.category === docCategoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = clientStatusFilter === 'All' || c.status === clientStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredContacts = contacts.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.designation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = contactCategoryFilter === 'All' || c.category === contactCategoryFilter;
    return matchesSearch && matchesCat;
  });

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'products', label: 'Products', icon: Box, badge: products.length },
    { id: 'portfolio', label: 'Portfolio', icon: FolderKanban, badge: projects.length },
    { id: 'documents', label: 'Documents', icon: FileText, badge: documents.length },
    { id: 'clients', label: 'Clients', icon: Building2, badge: clients.length },
    { id: 'contacts', label: 'Contacts', icon: PhoneCall, badge: contacts.length },
    { id: 'careers', label: 'Careers', icon: Briefcase, badge: careers.length },
    { id: 'applications', label: 'Applications', icon: Users, badge: applications.length },
  ];

  const docCategories = ['All', 'Company Documents', 'Client Documents', 'Project Documents', 'Contracts', 'Agreements', 'Invoices', 'Other'];
  const clientStatuses = ['All', 'Active', 'Inactive', 'Prospect'];
  const contactCategories = ['All', 'Client', 'Vendor', 'Partner', 'Business Contact', 'Other'];

  return (
    <div className="flex h-screen bg-[#F1F5F9] text-[#0F172A] overflow-hidden font-sans">
      
      {/* ── 1. LEFT SIDEBAR ── */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Logo & Brand Header */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-black text-sm tracking-tight text-white leading-none">TOMTOP</h2>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Admin Control</span>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl font-bold text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== null && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: Admin Profile & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-extrabold text-xs flex items-center justify-center border border-white/20 shadow-md">
              TA
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold text-white truncate">{adminUser.name || 'Tomtop Admin'}</p>
              <p className="text-[10px] text-slate-400 truncate">{adminUser.email || 'admin@tomtopsolutions.com'}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-rose-500/20 hover:text-rose-300 text-slate-300 border border-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* ── 2. MAIN CONTENT WRAPPER ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOP EXECUTIVE HEADER BAR */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-black text-[#0F172A] capitalize">
                {activeTab === 'overview' ? 'Executive Overview' : `${activeTab} Management`}
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">
                Manage Products, Portfolio, Documents, Clients, and Contacts portal.
              </p>
            </div>
          </div>

          {/* Search & Actions Bar */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeTab}...`}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none focus:border-[#2563EB] focus:bg-white transition-all"
              />
            </div>

            {/* Sync Refresh Button */}
            <button
              onClick={fetchBackendData}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors"
              title="Sync Backend Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#2563EB]' : ''}`} />
            </button>

            {/* Direct Website View Button */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-xl bg-blue-50 text-[#2563EB] hover:bg-blue-100 font-bold text-xs hidden sm:flex items-center gap-1.5 border border-blue-200 transition-all"
            >
              <span>View Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* MAIN BODY AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">

          {/* ── TAB 1: OVERVIEW ── */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Executive Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                  onClick={() => setActiveTab('products')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Box className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      Products Suite
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">{products.length}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">Software Products</p>
                </div>

                <div
                  onClick={() => setActiveTab('portfolio')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FolderKanban className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      Portfolio
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">{projects.length}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">Portfolio Case Studies</p>
                </div>

                <div
                  onClick={() => setActiveTab('documents')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      Vault
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">{documents.length}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">Important Documents</p>
                </div>

                <div
                  onClick={() => setActiveTab('clients')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      Database
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A]">{clients.length}</h3>
                  <p className="text-xs font-bold text-slate-500 mt-1">Client Database</p>
                </div>
              </div>

              {/* Secondary Stat Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div
                  onClick={() => setActiveTab('contacts')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Directory</span>
                    <h3 className="text-2xl font-black text-[#0F172A]">{contacts.length}</h3>
                    <p className="text-xs font-bold text-slate-500">Important Contacts</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('careers')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Hiring</span>
                    <h3 className="text-2xl font-black text-[#0F172A]">{careers.length}</h3>
                    <p className="text-xs font-bold text-slate-500">Active Job Openings</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('applications')}
                  className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Resumes</span>
                    <h3 className="text-2xl font-black text-[#0F172A]">{applications.length}</h3>
                    <p className="text-xs font-bold text-slate-500">Applications Received</p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Two Column Section: Recent Documents & Recent Clients */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Documents Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-[#0F172A]">Important Documents</h3>
                    <button
                      onClick={() => openDocumentForm()}
                      className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Upload Doc</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {documents.slice(0, 3).map((d) => (
                      <div key={d._id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-xs text-[#0F172A] truncate">{d.name}</h4>
                            <span className="text-[10px] text-slate-500">{d.category} • {d.fileSize}</span>
                          </div>
                        </div>
                        <a
                          href={d.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 text-xs font-bold shrink-0"
                          title="Download Document"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Clients Card */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-extrabold text-base text-[#0F172A]">Client Database</h3>
                    <button
                      onClick={() => openClientForm()}
                      className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Client</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {clients.slice(0, 3).map((c) => (
                      <div key={c._id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-xs text-[#0F172A] truncate">{c.name}</h4>
                            <span className="text-[10px] text-slate-500">{c.company || c.service}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border shrink-0 ${
                          c.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          c.status === 'Prospect' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-slate-100 text-slate-600 border-slate-300'
                        }`}>
                          {c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ── TAB 2: PRODUCTS PAGE MANAGEMENT ── */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Products Suite Catalog (/products)</h2>
                  <p className="text-xs text-slate-500">Manage products displayed on the Products page. Add, edit, or delete items.</p>
                </div>
                <button
                  onClick={() => openProductForm()}
                  className="px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Product</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-4 text-center text-white">
                            <Box className="w-8 h-8 text-blue-300 mb-2" />
                            <span className="font-extrabold text-sm">{product.name}</span>
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-extrabold text-base text-[#0F172A]">{product.name}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{product.shortDesc}</p>
                        
                        {Array.isArray(product.features) && product.features.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-1">
                            {product.features.map((feat, fIdx) => (
                              <span key={fIdx} className="text-[9px] font-bold px-2 py-0.5 bg-blue-50 text-[#2563EB] rounded border border-blue-200">
                                {feat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                        {product.status || 'Active'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openProductForm(product)}
                          className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] transition-colors"
                          title="Edit Product"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 3: PORTFOLIO PAGE MANAGEMENT ── */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Portfolio Showcase Projects (/portfolio)</h2>
                  <p className="text-xs text-slate-500">Manage case studies & projects displayed on the Portfolio page. Add, edit, or delete items.</p>
                </div>
                <button
                  onClick={() => openProjectForm()}
                  className="px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Case Study</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project._id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-4 text-center text-white">
                            <FolderKanban className="w-8 h-8 text-blue-300 mb-2" />
                            <span className="font-extrabold text-sm">{project.title}</span>
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-extrabold text-base text-[#0F172A]">{project.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                        <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-500">
                          <span className="bg-blue-50 text-[#2563EB] px-2.5 py-0.5 rounded-lg border border-blue-100">
                            Client: {project.client}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                        {project.status || 'Active'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openProjectForm(project)}
                          className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] transition-colors"
                          title="Edit Project"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project._id)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 4: IMPORTANT DOCUMENTS (NEW MODULE 1) ── */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Important Documents Vault</h2>
                  <p className="text-xs text-slate-500">Secure corporate document management system. Upload, view, filter, and download files.</p>
                </div>
                <button
                  onClick={() => openDocumentForm()}
                  className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Upload Document</span>
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {docCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setDocCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      docCategoryFilter === cat
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Document Cards / Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc._id}
                    className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                              {doc.fileType || 'PDF'}
                            </span>
                            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{doc.fileSize}</p>
                          </div>
                        </div>

                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          {doc.category}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-extrabold text-sm text-[#0F172A] leading-snug">{doc.name}</h3>
                        {doc.description && (
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{doc.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-slate-400 font-medium">
                        {new Date(doc.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            if (!doc.fileUrl) return;
                            const win = window.open();
                            if (win) {
                              if (doc.fileUrl.startsWith('data:image')) {
                                win.document.write(`<div style="display:flex;justify-center;align-items:center;min-height:100vh;background:#0f172a;"><img src="${doc.fileUrl}" style="max-width:90%;max-height:90vh;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.5);" /></div>`);
                              } else {
                                win.location.href = doc.fileUrl;
                              }
                            }
                          }}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="View Document"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={doc.fileUrl}
                          download={`${doc.name || 'Document'}.${(doc.fileType || 'pdf').toLowerCase()}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                        <button
                          onClick={() => openDocumentForm(doc)}
                          className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] transition-colors"
                          title="Edit Document"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteDocument(doc._id)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Delete Document"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 5: CLIENT DATABASE (NEW MODULE 2) ── */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Client Database & Accounts</h2>
                  <p className="text-xs text-slate-500">Centralized database for enterprise clients, status tracking, and active software services.</p>
                </div>
                <button
                  onClick={() => openClientForm()}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Client</span>
                </button>
              </div>

              {/* Status Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {clientStatuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setClientStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      clientStatusFilter === st
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Client List / Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredClients.map((client) => (
                  <div
                    key={client._id}
                    className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 font-black text-sm flex items-center justify-center shrink-0 border border-emerald-100">
                            {client.name ? client.name.charAt(0).toUpperCase() : 'C'}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-sm text-[#0F172A]">{client.name}</h3>
                            <p className="text-xs text-slate-500 font-medium">{client.company || 'Private Business'}</p>
                          </div>
                        </div>

                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          client.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          client.status === 'Prospect' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-slate-100 text-slate-600 border-slate-300'
                        }`}>
                          {client.status}
                        </span>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-2xl space-y-1 text-xs">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Box className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="font-bold text-slate-800 truncate">{client.service}</span>
                        </div>
                        {client.email && (
                          <div className="flex items-center gap-2 text-slate-600">
                            <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <a href={`mailto:${client.email}`} className="hover:underline text-blue-600 truncate font-semibold">{client.email}</a>
                          </div>
                        )}
                        {client.phone && (
                          <div className="flex items-center gap-2 text-slate-600">
                            <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <a href={`tel:${client.phone}`} className="hover:underline text-slate-700 font-semibold">{client.phone}</a>
                          </div>
                        )}
                      </div>

                      {client.notes && (
                        <p className="text-xs text-slate-500 italic leading-snug">"{client.notes}"</p>
                      )}
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                      <button
                        onClick={() => openClientForm(client)}
                        className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteClient(client._id)}
                        className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 6: IMPORTANT CONTACTS (NEW MODULE 3) ── */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Important Contacts Directory</h2>
                  <p className="text-xs text-slate-500">Corporate phonebook directory for clients, partners, vendors, and business contacts.</p>
                </div>
                <button
                  onClick={() => openContactForm()}
                  className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Contact</span>
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {contactCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setContactCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      contactCategoryFilter === cat
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Contacts Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 font-extrabold text-sm flex items-center justify-center shrink-0 border border-sky-100">
                            {contact.name ? contact.name.charAt(0).toUpperCase() : 'C'}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-sm text-[#0F172A]">{contact.name}</h3>
                            <p className="text-xs text-slate-500 font-semibold">{contact.designation || 'Representative'}</p>
                          </div>
                        </div>

                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                          {contact.category}
                        </span>
                      </div>

                      {contact.organization && (
                        <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{contact.organization}</span>
                        </p>
                      )}

                      <div className="bg-slate-50 p-3 rounded-2xl space-y-1.5 text-xs">
                        {contact.phone && (
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-medium">Phone:</span>
                            <a href={`tel:${contact.phone}`} className="font-extrabold text-slate-800 hover:text-[#2563EB]">
                              {contact.phone}
                            </a>
                          </div>
                        )}
                        {contact.email && (
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-medium">Email:</span>
                            <a href={`mailto:${contact.email}`} className="font-extrabold text-blue-600 hover:underline truncate max-w-[170px]">
                              {contact.email}
                            </a>
                          </div>
                        )}
                      </div>

                      {contact.notes && (
                        <p className="text-xs text-slate-500 italic leading-snug">"{contact.notes}"</p>
                      )}
                    </div>

                    {/* Quick Actions: Call, Email, Edit, Delete */}
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {contact.phone && (
                          <a
                            href={`tel:${contact.phone}`}
                            className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                            title="Call Contact"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {contact.email && (
                          <a
                            href={`mailto:${contact.email}`}
                            className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                            title="Send Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openContactForm(contact)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title="Edit Contact"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteContact(contact._id)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Delete Contact"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 7: CAREERS MANAGEMENT ── */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-[#0F172A]">Job Openings & Hiring (/careers)</h2>
                  <p className="text-xs text-slate-500">Manage career opportunities displayed on the careers portal.</p>
                </div>
                <button
                  onClick={() => openCareerForm()}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Job Opening</span>
                </button>
              </div>

              <div className="space-y-4">
                {filteredCareers.map((career) => (
                  <div
                    key={career._id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          {career.type}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">• {career.location}</span>
                        <span className="text-xs text-slate-400 font-semibold">• Exp: {career.experience}</span>
                      </div>
                      <h3 className="font-extrabold text-base text-[#0F172A]">{career.title}</h3>
                      <p className="text-xs text-slate-600 max-w-2xl">{career.description}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => openCareerForm(career)}
                        className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#2563EB] text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteCareer(career._id)}
                        className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 8: APPLICATIONS MANAGEMENT ── */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-extrabold text-[#0F172A]">Candidate Resume Applications</h2>
                <p className="text-xs text-slate-500">Review incoming developer & consultant job applications.</p>
              </div>

              <div className="space-y-4">
                {filteredApplications.map((app) => (
                  <div
                    key={app._id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-black uppercase text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          Role: {app.role}
                        </span>
                        <h3 className="font-extrabold text-lg text-[#0F172A] mt-1">{app.name}</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={app.status}
                          onChange={(e) => handleUpdateAppStatus(app._id, e.target.value)}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 border border-slate-300 text-slate-700 outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Reviewed">Reviewed</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Rejected">Rejected</option>
                        </select>

                        <button
                          onClick={() => handleDeleteApplication(app._id)}
                          className="p-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Delete Application"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block">Email:</span>
                        <a href={`mailto:${app.email}`} className="text-[#2563EB] font-bold hover:underline">{app.email}</a>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block">Phone:</span>
                        <a href={`tel:${app.phone}`} className="text-slate-800 font-bold">{app.phone}</a>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold block">Resume / CV:</span>
                        <a href={app.resumeUrl} target="_blank" rel="noreferrer" className="text-[#2563EB] font-bold flex items-center gap-1 hover:underline">
                          <span>View Candidate Resume</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {app.message && (
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 font-medium">
                        <span className="font-bold block text-slate-500 mb-0.5">Cover Note:</span>
                        "{app.message}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ── MODAL 1: ADD/EDIT PRODUCT MODAL ── */}
      <AnimatePresence>
        {showProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowProductModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingProduct ? 'Edit Product Details' : 'Add New Product'}
              </h3>
              <form onSubmit={handleSaveProduct} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Product Name *</label>
                  <input
                    type="text" required value={productForm.name}
                    onChange={e => setProductForm({...productForm, name: e.target.value})}
                    placeholder="e.g. ClearBill ERP, KTS Kaithari ERP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category *</label>
                  <input
                    type="text" required value={productForm.category}
                    onChange={e => setProductForm({...productForm, category: e.target.value})}
                    placeholder="e.g. Billing Software, Textile & Manufacturing"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Short Description *</label>
                  <textarea
                    rows="3" required value={productForm.shortDesc}
                    onChange={e => setProductForm({...productForm, shortDesc: e.target.value})}
                    placeholder="Describe what this software product does..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Capabilities / Features (Comma Separated)</label>
                  <input
                    type="text" value={productForm.features}
                    onChange={e => setProductForm({...productForm, features: e.target.value})}
                    placeholder="Automated GST, Barcode POS, Stock Sync"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Image URL (Optional)</label>
                  <input
                    type="url" value={productForm.image}
                    onChange={e => setProductForm({...productForm, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2563EB] text-white font-bold text-xs rounded-xl shadow-md mt-2"
                >
                  Save Product
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 2: ADD/EDIT PORTFOLIO PROJECT MODAL ── */}
      <AnimatePresence>
        {showProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowProjectModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingProject ? 'Edit Portfolio Case Study' : 'Add New Portfolio Case Study'}
              </h3>
              <form onSubmit={handleSaveProject} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Project Title *</label>
                  <input
                    type="text" required value={projectForm.title}
                    onChange={e => setProjectForm({...projectForm, title: e.target.value})}
                    placeholder="e.g. AI-Powered Predictive Enterprise ERP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category *</label>
                  <input
                    type="text" required value={projectForm.category}
                    onChange={e => setProjectForm({...projectForm, category: e.target.value})}
                    placeholder="e.g. AI & ERP, Industrial ERP"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Description / Overview *</label>
                  <textarea
                    rows="3" required value={projectForm.description}
                    onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Client Name</label>
                    <input
                      type="text" value={projectForm.client}
                      onChange={e => setProjectForm({...projectForm, client: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Key Result Delivered</label>
                    <input
                      type="text" value={projectForm.results}
                      onChange={e => setProjectForm({...projectForm, results: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Image URL (Optional)</label>
                  <input
                    type="url" value={projectForm.image}
                    onChange={e => setProjectForm({...projectForm, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2563EB] text-white font-bold text-xs rounded-xl shadow-md mt-2"
                >
                  Save Case Study
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 3: ADD/EDIT DOCUMENT MODAL (NEW MODULE 1) ── */}
      <AnimatePresence>
        {showDocumentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowDocumentModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingDocument ? 'Edit Document Details' : 'Upload Important Document'}
              </h3>

              {/* Mode Toggle Switch: Upload File vs Web Link */}
              <div className="flex rounded-2xl bg-slate-100 p-1 font-bold text-xs">
                <button
                  type="button"
                  onClick={() => setDocUploadMode('file')}
                  className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    docUploadMode === 'file'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File (PDF / Image / Doc)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDocUploadMode('url')}
                  className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    docUploadMode === 'url'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Paste Direct URL</span>
                </button>
              </div>

              <form onSubmit={handleSaveDocument} className="space-y-3">

                {/* File Dropzone / File Picker input */}
                {docUploadMode === 'file' ? (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Upload File (PDF, PNG, JPG, DOCX, XLSX, ZIP) *</label>
                    <input
                      type="file"
                      id="docFileInput"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp,.zip,.txt,.csv"
                      onChange={handleDocFileSelect}
                      className="hidden"
                    />
                    <label
                      htmlFor="docFileInput"
                      className="border-2 border-dashed border-purple-200 hover:border-purple-500 bg-purple-50/40 hover:bg-purple-50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all text-center group"
                    >
                      {uploadingDocFile ? (
                        <div className="flex items-center gap-2 text-purple-600 font-bold text-xs py-3">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Reading & Processing File...</span>
                        </div>
                      ) : documentForm.fileUrl ? (
                        <div className="flex items-center justify-between w-full p-2.5 bg-white rounded-xl border border-purple-200 shadow-xs">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0">
                              {documentForm.fileType || 'FILE'}
                            </div>
                            <div className="min-w-0 text-left">
                              <p className="text-xs font-extrabold text-slate-800 truncate">
                                {docFileName || documentForm.name || 'File Attached'}
                              </p>
                              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                                {documentForm.fileSize || 'Attached'} • Ready
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-purple-600 hover:underline px-2 shrink-0">
                            Choose Different File
                          </span>
                        </div>
                      ) : (
                        <div className="py-2 space-y-1">
                          <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                            <Upload className="w-5 h-5" />
                          </div>
                          <p className="text-xs font-extrabold text-slate-800">
                            Click here to select a file from device
                          </p>
                          <p className="text-[10px] text-slate-500 font-semibold">
                            Supports PDF, PNG, JPG, DOCX, XLSX, ZIP (Max 50MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">File URL / Download Link *</label>
                    <input
                      type="text" required value={documentForm.fileUrl}
                      onChange={e => setDocumentForm({...documentForm, fileUrl: e.target.value})}
                      placeholder="https://... (Cloudinary / S3 / Direct Link)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Document Name *</label>
                  <input
                    type="text" required value={documentForm.name}
                    onChange={e => setDocumentForm({...documentForm, name: e.target.value})}
                    placeholder="e.g. Annual Audit Agreement 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Category *</label>
                    <select
                      value={documentForm.category}
                      onChange={e => setDocumentForm({...documentForm, category: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Company Documents">Company Documents</option>
                      <option value="Client Documents">Client Documents</option>
                      <option value="Project Documents">Project Documents</option>
                      <option value="Contracts">Contracts</option>
                      <option value="Agreements">Agreements</option>
                      <option value="Invoices">Invoices</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">File Format / Type</label>
                    <select
                      value={documentForm.fileType}
                      onChange={e => setDocumentForm({...documentForm, fileType: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    >
                      <option value="PDF">PDF Document</option>
                      <option value="DOCX">Word DOCX</option>
                      <option value="XLSX">Excel Spreadsheet</option>
                      <option value="ZIP">ZIP Archive</option>
                      <option value="PNG">PNG / JPG Image</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">File Size</label>
                  <input
                    type="text" value={documentForm.fileSize}
                    onChange={e => setDocumentForm({...documentForm, fileSize: e.target.value})}
                    placeholder="e.g. 2.4 MB"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Description / Notes</label>
                  <textarea
                    rows="2" value={documentForm.description}
                    onChange={e => setDocumentForm({...documentForm, description: e.target.value})}
                    placeholder="Add optional notes about this document..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={uploadingDocFile || (!documentForm.fileUrl && docUploadMode === 'file')}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md mt-2 flex items-center justify-center gap-2 transition-all"
                >
                  <Upload className="w-4 h-4" />
                  <span>Save Document Entry</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 4: ADD/EDIT CLIENT MODAL (NEW MODULE 2) ── */}
      <AnimatePresence>
        {showClientModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowClientModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingClient ? 'Edit Client Record' : 'Add New Client'}
              </h3>
              <form onSubmit={handleSaveClient} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Client Person Name *</label>
                  <input
                    type="text" required value={clientForm.name}
                    onChange={e => setClientForm({...clientForm, name: e.target.value})}
                    placeholder="e.g. Suresh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization</label>
                  <input
                    type="text" value={clientForm.company}
                    onChange={e => setClientForm({...clientForm, company: e.target.value})}
                    placeholder="e.g. Apex Industrial Manufacturing"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email" value={clientForm.email}
                      onChange={e => setClientForm({...clientForm, email: e.target.value})}
                      placeholder="client@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text" value={clientForm.phone}
                      onChange={e => setClientForm({...clientForm, phone: e.target.value})}
                      placeholder="+91 98421 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Service / Project</label>
                    <input
                      type="text" value={clientForm.service}
                      onChange={e => setClientForm({...clientForm, service: e.target.value})}
                      placeholder="ClearBill ERP Integration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Status</label>
                    <select
                      value={clientForm.status}
                      onChange={e => setClientForm({...clientForm, status: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Active">Active Client</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Prospect">Prospect Lead</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Office Address</label>
                  <input
                    type="text" value={clientForm.address}
                    onChange={e => setClientForm({...clientForm, address: e.target.value})}
                    placeholder="City, State"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Notes & Requirements</label>
                  <textarea
                    rows="2" value={clientForm.notes}
                    onChange={e => setClientForm({...clientForm, notes: e.target.value})}
                    placeholder="Add operational notes or contract details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md mt-2"
                >
                  Save Client Details
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 5: ADD/EDIT CONTACT MODAL (NEW MODULE 3) ── */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingContact ? 'Edit Contact Directory Entry' : 'Add New Contact Entry'}
              </h3>
              <form onSubmit={handleSaveContact} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Contact Person Name *</label>
                  <input
                    type="text" required value={contactForm.name}
                    onChange={e => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="e.g. Priya Dharshini"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Organization / Firm</label>
                    <input
                      type="text" value={contactForm.organization}
                      onChange={e => setContactForm({...contactForm, organization: e.target.value})}
                      placeholder="e.g. AWS Partner"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Designation / Role</label>
                    <input
                      type="text" value={contactForm.designation}
                      onChange={e => setContactForm({...contactForm, designation: e.target.value})}
                      placeholder="Senior Solutions Architect"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text" value={contactForm.phone}
                      onChange={e => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+91 97100 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email" value={contactForm.email}
                      onChange={e => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="contact@org.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category *</label>
                  <select
                    value={contactForm.category}
                    onChange={e => setContactForm({...contactForm, category: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  >
                    <option value="Client">Client Contact</option>
                    <option value="Vendor">Vendor Partner</option>
                    <option value="Partner">Cloud & Tech Partner</option>
                    <option value="Business Contact">Business Contact</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Notes</label>
                  <textarea
                    rows="2" value={contactForm.notes}
                    onChange={e => setContactForm({...contactForm, notes: e.target.value})}
                    placeholder="Add operational notes or background details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-sky-600 text-white font-bold text-xs rounded-xl shadow-md mt-2"
                >
                  Save Contact Entry
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ── MODAL 6: ADD/EDIT CAREER MODAL ── */}
      <AnimatePresence>
        {showCareerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl my-8">
              <button
                onClick={() => setShowCareerModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-xl text-[#0F172A]">
                {editingCareer ? 'Edit Career Opening' : 'Add New Career Opening'}
              </h3>
              <form onSubmit={handleSaveCareer} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Job Title *</label>
                  <input
                    type="text" required value={careerForm.title}
                    onChange={e => setCareerForm({...careerForm, title: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Type</label>
                    <select
                      value={careerForm.type}
                      onChange={e => setCareerForm({...careerForm, type: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Location</label>
                    <input
                      type="text" value={careerForm.location}
                      onChange={e => setCareerForm({...careerForm, location: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Description *</label>
                  <textarea
                    rows="3" required value={careerForm.description}
                    onChange={e => setCareerForm({...careerForm, description: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md mt-2"
                >
                  Save Career Opening
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
