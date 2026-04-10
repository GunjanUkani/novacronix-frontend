import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Code2,
  Cpu,
  Globe,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronDown,
  LayoutGrid,
  ShoppingBag,
  Users,
  Briefcase,
  Rocket,
  Smartphone,
  Cloud,
  Server,
  Instagram,
  MessageCircle,
  BarChart3,
  Layers,
  Database,
  Search,
  ArrowUpRight,
  Sparkles,
  Target,
  Award,
  Terminal,
  Activity,
  Heart,
  Lightbulb,
  BrainCircuit,
  Binary,
  Layers3
} from 'lucide-react';
import { APP_NAME } from '../lib/constants.js';
// --- Sub-Components ---

export const NeonButton = ({ children, primary, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3.5 rounded-xl font-bold transition-all relative overflow-hidden group ${primary
        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        : "bg-slate-900 text-white border border-slate-700 hover:border-blue-500"
      } ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
  </button>
);

export const Navbar = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA - Fixed with explicit spacing */}
        <div className="flex items-center gap-3 cursor-pointer mr-12" onClick={() => setPage('home')}>
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 shrink-0">
            <img src="/logo123.png" alt={`${APP_NAME} logo`} className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic whitespace-nowrap">{APP_NAME}</span>
        </div>

        {/* MENU ITEMS - Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`cursor-pointer text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${currentPage === item.id ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              {item.name}
            </button>
          ))}
          <NeonButton primary onClick={() => setPage('contact')} className="!py-2 !px-4 sm:!px-5 !text-[10px] uppercase tracking-widest ml-2 sm:ml-4">Start Project</NeonButton>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white cursor-pointer" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/5 p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 lg:hidden overflow-hidden"
          >
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id); setMobileMenu(false); }}
                className={`cursor-pointer text-left text-base sm:text-lg font-black uppercase tracking-widest ${currentPage === item.id ? 'text-blue-400' : 'text-slate-300'}`}
              >
                {item.name}
              </button>
            ))}
            <NeonButton primary onClick={() => { setPage('contact'); setMobileMenu(false); }} className="w-full mt-2">Start Project</NeonButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const SectionHeading = ({ subtitle, title, centered, description }) => (
  <div className={`mb-12 lg:mb-16 ${centered ? 'text-center mx-auto max-w-4xl' : ''}`}>
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 lg:mb-6 tracking-tighter"
    >
      {title}
    </motion.h2>
    {description && (
      <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">{description}</p>
    )}
  </div>
);

