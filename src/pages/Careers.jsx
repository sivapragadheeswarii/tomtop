import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Users, Lightbulb, Compass, Award,
  Briefcase, Mail, CheckCircle2, ArrowRight, Sparkles,
  Send, ChevronDown, HelpCircle, Code, ShieldCheck,
  Search, Layers, X, Loader2, MapPin, Clock, ExternalLink, Upload
} from 'lucide-react';
import { careersData, companyInfo } from '../data/companyData';

export default function Careers() {
  const context = useOutletContext();
  const onOpenQuote = context?.onOpenQuote || (() => {});
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Careers fetched from Backend
  const [jobOpenings, setJobOpenings] = useState([]);

  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'General Application',
    resumeUrl: '',
    message: ''
  });
  const [resumeFileName, setResumeFileName] = useState('');
  const [uploadingResume, setUploadingResume] = useState(false);

  const handleResumeFileSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploadingResume(true);
    setResumeFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      setApplicantForm(prev => ({ ...prev, resumeUrl: event.target.result }));
      setUploadingResume(false);
    };
    reader.onerror = () => {
      alert("Error loading file");
      setUploadingResume(false);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const port = localStorage.getItem('tomtop_api_port') || '5001';
        const res = await fetch(`http://localhost:${port}/api/careers`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setJobOpenings(data.filter(c => c.status === 'Open'));
          }
        }
      } catch (err) {
        console.warn('Backend API offline:', err);
      }
    };
    fetchCareers();
  }, []);

  const openModal = (role = "General Application") => {
    setApplicantForm(prev => ({ ...prev, role }));
    setIsSubmitted(false);
    setShowApplyModal(true);
  };

  const triggerApplicationMailto = (roleName = "General Application") => {
    const recipient = "hr@tomtopsolutions.com";
    const subject = encodeURIComponent(`Career Application / Resume - ${roleName}`);
    const body = encodeURIComponent(
      `Hello Tomtop Solutions HR Team,\n\nI am interested in exploring career opportunities / internships with Tomtop Solutions.\n\nName: ${applicantForm.name}\nEmail: ${applicantForm.email}\nPhone: ${applicantForm.phone}\nRole: ${roleName}\nResume Link: ${applicantForm.resumeUrl}\n\nCover Note:\n${applicantForm.message}`
    );
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Post to MongoDB Backend API
    try {
      const port = localStorage.getItem('tomtop_api_port') || '5001';
      await fetch(`http://localhost:${port}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: applicantForm.name,
          email: applicantForm.email,
          phone: applicantForm.phone,
          role: applicantForm.role,
          resumeUrl: applicantForm.resumeUrl,
          message: applicantForm.message
        })
      });
    } catch (err) {
      console.warn('Backend application save offline:', err);
    }

    // 2. Send Email via FormSubmit AJAX API
    try {
      const response = await fetch("https://formsubmit.co/ajax/hr@tomtopsolutions.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: applicantForm.name,
          email: applicantForm.email,
          phone: applicantForm.phone,
          role: applicantForm.role,
          resumeUrl: applicantForm.resumeUrl,
          message: applicantForm.message,
          _subject: `Career CV Application: ${applicantForm.name} (${applicantForm.role})`,
          _template: "table"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        triggerApplicationMailto(applicantForm.role);
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      triggerApplicationMailto(applicantForm.role);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F0F7FF] text-[#111827] min-h-screen">
      
      {/* 1. HERO BANNER (Full 100dvh Viewport Constraint) */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen flex flex-col justify-between items-center pt-20 pb-4 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF3FF] via-[#F0F7FF] to-[#F8FAFC]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/careers_hero_bg.png"
            alt="Tomtop Solutions IT Professional Career Growth Environment"
            className="w-full h-full object-cover object-center opacity-90 sm:opacity-95 filter contrast-110 brightness-105 saturate-110 pointer-events-none transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0F7FF]/75 to-[#F8FAFC] z-10 pointer-events-none" />
        </div>

        {/* Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-[250px] sm:h-[350px] bg-blue-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-10" />

        {/* Hero Content Container (Centered Vertically) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center space-y-3 sm:space-y-8 my-auto">
          
          {/* Top Centered Pill Badge (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 shadow-md shadow-blue-900/5 text-[#1E3A8A] text-[10px] sm:text-xs font-black uppercase tracking-wide sm:tracking-wider max-w-[95%] mx-auto"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">Join Our Engineering &amp; Consulting Team</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-[#0F172A] max-w-4xl mx-auto drop-shadow-xs px-1"
          >
            Build Your Career With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Tomtop Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-xs sm:text-lg max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto font-medium leading-relaxed px-2"
          >
            Empower your career through real-world software projects, enterprise client exposure, and structured professional development in Madurai &amp; hybrid environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 max-w-xs xs:max-w-sm sm:max-w-none mx-auto w-full"
          >
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2 sm:space-x-2.5 text-xs sm:text-base group transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-blue-300/30"
            >
              <Send className="w-4 h-4 text-white shrink-0" />
              <span>Submit Resume / CV</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-white/95 hover:bg-blue-50 border border-blue-200 text-[#0F172A] font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center space-x-2 text-xs sm:text-base hover:border-[#3B82F6] hover:text-[#2563EB] active:scale-95 shadow-sm backdrop-blur-md"
            >
              <span>Explore Roles</span>
              <ChevronDown className="w-4 h-4 text-[#2563EB]" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          className="mt-auto pt-2 flex flex-col items-center space-y-1 relative z-20 cursor-pointer"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700/70 hidden sm:block">Scroll</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-blue-200 flex items-center justify-center hover:border-[#2563EB] shadow-sm">
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
          </div>
        </motion.div>
      </section>

      {/* 2. DYNAMIC OPEN POSITIONS SECTION */}
      <section className="py-10 sm:py-24 bg-white border-b border-blue-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
            <span className="text-[#2563EB] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200">
              Live Hiring
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-[#0B1120] tracking-tight mt-2 sm:mt-3">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">Positions</span>
            </h2>
            <p className="mt-1.5 sm:mt-3 text-slate-600 text-xs sm:text-sm font-medium">
              Explore open roles updated directly by our administrative team.
            </p>
          </div>

          {jobOpenings.length === 0 ? (
            <div className="bg-blue-50/60 rounded-2xl sm:rounded-3xl border border-blue-100 p-5 sm:p-14 text-center max-w-xl mx-auto space-y-3 sm:space-y-4 shadow-xs">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#2563EB] flex items-center justify-center mx-auto shadow-md border border-blue-100">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#111827]">No Current Openings Available</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                There are currently no active job postings listed by our team. However, we are always eager to meet talented developers &amp; consultants! Submit your profile below for future opportunities.
              </p>
              <button
                onClick={() => openModal("General Application")}
                className="w-full sm:w-auto px-5 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <span>Submit General Application / CV</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              {jobOpenings.map((job) => (
                <motion.div
                  key={job._id}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100 p-4 sm:p-6 shadow-md sm:shadow-xl shadow-blue-900/5 flex flex-col justify-between hover:border-[#2563EB] transition-all"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-emerald-200">
                        {job.type}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-bold flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2563EB]" />
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-black text-[#111827]">{job.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                      {job.description}
                    </p>

                    <div className="pt-1.5 sm:pt-2 flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-slate-500">
                      <span className="bg-blue-50 text-[#2563EB] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-blue-100">
                        Exp: {job.experience}
                      </span>
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200">
                        {job.category}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 sm:pt-6 sm:mt-4 border-t border-slate-100">
                    <button
                      onClick={() => openModal(job.title)}
                      className="w-full py-2.5 sm:py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm sm:shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Apply For This Position</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. WHY WORK WITH US */}
      <section className="py-10 sm:py-28 bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF] border-b border-blue-100 relative overflow-hidden text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-5xl font-black text-[#0B1120] tracking-tight leading-tight"
            >
              Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">With Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-1.5 sm:mt-3 text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed"
            >
              At Tomtop Solutions, we foster a collaborative, growth-focused environment where technical talent thrives.
            </motion.p>
          </div>

          {/* 📱 MOBILE ONLY: ULTRA-PREMIUM HORIZONTAL DECK */}
          <div className="block sm:hidden space-y-2">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[11px] font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#2563EB]" />
                <span>Our Core Pillars</span>
              </span>
              <span className="text-[10px] text-[#2563EB] font-bold">Swipe →</span>
            </div>

            <div className="flex overflow-x-auto gap-3.5 snap-x snap-mandatory pb-4 px-1 scrollbar-none touch-pan-x">
              {[
                {
                  title: "Learning & Growth",
                  desc: "Continuous learning opportunities across modern tech stacks, enterprise architecture, and consulting methodologies.",
                  icon: GraduationCap,
                  gradient: "from-[#1D4ED8] to-[#3B82F6]",
                  highlights: ["Modern Tech Stacks", "Mentorship", "Skill Certification"]
                },
                {
                  title: "Real-World Project Exposure",
                  desc: "Work on business-critical software applications, ERP platforms, and billing engines for enterprise clients.",
                  icon: Layers,
                  gradient: "from-[#0284C7] to-[#38BDF8]",
                  highlights: ["Enterprise Clients", "ERP Platforms", "International Projects"]
                },
                {
                  title: "Collaborative Work Environment",
                  desc: "An open, supportive team culture focused on innovation, peer review, knowledge sharing, and mutual respect.",
                  icon: Users,
                  gradient: "from-[#4F46E5] to-[#818CF8]",
                  highlights: ["Open Culture", "Knowledge Sharing", "Team Synergy"]
                },
                {
                  title: "Technology Exposure",
                  desc: "Hands-on experience with cloud infrastructure, web portals, mobile frameworks, microservices, and database systems.",
                  icon: Code,
                  gradient: "from-[#0D9488] to-[#2DD4BF]",
                  highlights: ["Cloud Hosting", "Web Stack", "Full-Stack Dev"]
                },
                {
                  title: "Professional Development",
                  desc: "Structured career progression paths, performance recognition, leadership opportunities, and PMO guidance.",
                  icon: Award,
                  gradient: "from-[#2563EB] to-[#60A5FA]",
                  highlights: ["Career Progression", "Leadership Roles", "PMO Guidance"]
                }
              ].map((point, idx) => {
                const PointIcon = point.icon;
                return (
                  <div
                    key={`m-pillar-${idx}`}
                    className="w-[82vw] max-w-[300px] shrink-0 snap-center rounded-2xl border border-blue-200 bg-gradient-to-b from-white via-[#F0F7FF] to-white p-4.5 shadow-xl flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${point.gradient}`} />

                    <div>
                      <div className="flex items-center justify-between mb-3 pt-1">
                        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${point.gradient} text-white flex items-center justify-center shadow-md`}>
                          <PointIcon className="w-5.5 h-5.5 text-white" />
                        </div>
                        <span className="text-[9px] font-black tracking-widest text-[#2563EB] bg-blue-100/80 px-2.5 py-1 rounded-full border border-blue-200 uppercase">
                          PILLAR 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-[#0B1120] leading-snug">
                        {point.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed font-medium mt-1.5 line-clamp-3">
                        {point.desc}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {point.highlights.map((item, hIdx) => (
                          <span key={hIdx} className="text-[9px] font-bold text-[#1E3A8A] bg-white px-2 py-0.5 rounded-md border border-blue-200/80 shadow-2xs">
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-blue-100/80">
                      <button
                        onClick={() => openModal(point.title)}
                        className="w-full py-2.5 px-3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-extrabold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Join Our Team</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 💻 DESKTOP ONLY: 3-COLUMN HOVER GRID */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Learning & Growth",
                desc: "Continuous learning opportunities across modern tech stacks, enterprise architecture, and consulting methodologies.",
                icon: GraduationCap,
                gradient: "from-[#1D4ED8] to-[#3B82F6]",
                highlights: ["Modern Tech Stacks", "Mentorship", "Skill Certification"]
              },
              {
                title: "Real-World Project Exposure",
                desc: "Work on business-critical software applications, ERP platforms, and billing engines for enterprise clients.",
                icon: Layers,
                gradient: "from-[#0284C7] to-[#38BDF8]",
                highlights: ["Enterprise Clients", "ERP Platforms", "International Projects"]
              },
              {
                title: "Collaborative Work Environment",
                desc: "An open, supportive team culture focused on innovation, peer review, knowledge sharing, and mutual respect.",
                icon: Users,
                gradient: "from-[#4F46E5] to-[#818CF8]",
                highlights: ["Open Culture", "Knowledge Sharing", "Team Synergy"]
              },
              {
                title: "Technology Exposure",
                desc: "Hands-on experience with cloud infrastructure, web portals, mobile frameworks, microservices, and database systems.",
                icon: Code,
                gradient: "from-[#0D9488] to-[#2DD4BF]",
                highlights: ["Cloud Hosting", "Web & Mobile Stack", "Full-Stack Dev"]
              },
              {
                title: "Professional Development",
                desc: "Structured career progression paths, performance recognition, leadership opportunities, and PMO guidance.",
                icon: Award,
                gradient: "from-[#2563EB] to-[#60A5FA]",
                highlights: ["Career Progression", "Leadership Roles", "PMO Guidance"]
              }
            ].map((point, idx) => {
              const PointIcon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${point.gradient}`} />

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${point.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <PointIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-[#2563EB] uppercase block mb-0.5">
                          PILLAR 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-black text-[#0B1120] group-hover:text-[#2563EB] transition-colors leading-tight">
                          {point.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Desktop Hover Expand */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-[320px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden pt-0 group-hover:pt-4 group-hover:mt-3 border-t border-transparent group-hover:border-blue-100">
                    <p className="text-slate-600 text-sm leading-relaxed font-medium mb-2.5">
                      {point.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {point.highlights.map((item, hIdx) => (
                        <span key={hIdx} className="text-[10px] font-bold text-slate-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                          ✓ {item}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(point.title);
                      }}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-extrabold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all duration-300 shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
                    >
                      <span>Join Our Team</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* JOB APPLICATION FORM MODAL */}
      <AnimatePresence>
        {showApplyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowApplyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl border border-blue-100 shadow-2xl max-w-lg w-full p-4 sm:p-7 relative overflow-hidden my-auto max-h-[92vh] overflow-y-auto scrollbar-none"
            >
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-10 border border-slate-200/80"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111827]">Application Submitted!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you! Your resume &amp; details have been saved to our database and sent to <strong className="text-[#2563EB]">hr@tomtopsolutions.com</strong>.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setShowApplyModal(false); }}
                    className="px-6 py-2.5 bg-[#2563EB] text-white font-bold rounded-xl text-xs shadow-md cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-[#2563EB] uppercase block mb-0.5">Tomtop Careers Desk</span>
                    <h3 className="text-lg sm:text-2xl font-black text-[#111827] leading-tight">Submit Your Resume / CV</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Direct application for software, consulting &amp; internship roles.</p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Full Name *</label>
                      <input
                        type="text" required value={applicantForm.name}
                        onChange={e => setApplicantForm({...applicantForm, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Email Address *</label>
                        <input
                          type="email" required value={applicantForm.email}
                          onChange={e => setApplicantForm({...applicantForm, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Phone Number *</label>
                        <input
                          type="tel" required value={applicantForm.phone}
                          onChange={e => setApplicantForm({...applicantForm, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Role / Position *</label>
                      <input
                        type="text" required value={applicantForm.role}
                        onChange={e => setApplicantForm({...applicantForm, role: e.target.value})}
                        placeholder="e.g. Full-Stack Developer"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Resume / CV File or Link *</label>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <input
                            type="file"
                            id="careerResumeInput"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeFileSelect}
                            className="hidden"
                          />
                          <label
                            htmlFor="careerResumeInput"
                            className="flex-1 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-bold text-[#2563EB] flex items-center justify-center gap-2 cursor-pointer transition-all"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>{uploadingResume ? 'Reading file...' : resumeFileName ? `Attached: ${resumeFileName}` : 'Upload Resume File (PDF / DOC)'}</span>
                          </label>
                        </div>
                        <input
                          type="text" required value={applicantForm.resumeUrl}
                          onChange={e => setApplicantForm({...applicantForm, resumeUrl: e.target.value})}
                          placeholder="Or paste Drive / LinkedIn / Cloud file URL"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-700 block mb-1">Cover Note / Primary Skills</label>
                      <textarea
                        rows="2.5" value={applicantForm.message}
                        onChange={e => setApplicantForm({...applicantForm, message: e.target.value})}
                        placeholder="Brief summary of your skills, graduation, or technical experience..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/50 border border-blue-200 outline-none text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-70 mt-1 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
