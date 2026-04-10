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
  Facebook,
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
import { APP_NAME, EMAIL } from './lib/constants.js';
import { Navbar } from './components/Shared.jsx';
import HomeView from './pages/Home.jsx';
import AboutView from './pages/About.jsx';
import ServicesView from './pages/Services.jsx';
import PortfolioView from './pages/Portfolio.jsx';
import PackagesView from './pages/Packages.jsx';
import ContactView from './pages/Contact.jsx';
// --- Main App ---

export default function App() {
  const [currentPage, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeView setPage={setPage} />;
      case 'about': return <AboutView />;
      case 'services': return <ServicesView />;
      case 'portfolio': return <PortfolioView />;
      case 'packages': return <PackagesView />;
      case 'contact': return <ContactView />;
      default: return <HomeView setPage={setPage} />;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-blue-600/40 overflow-x-hidden selection:text-white">
      <Navbar currentPage={currentPage} setPage={setPage} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {currentPage === 'home' && <HomeView setPage={setPage} />}
            {currentPage === 'about' && <AboutView setPage={setPage} />}
            {currentPage === 'services' && <ServicesView setPage={setPage} />}
            {currentPage === 'portfolio' && <PortfolioView setPage={setPage} />}
            {currentPage === 'packages' && <PackagesView setPage={setPage} />}
            {currentPage === 'contact' && <ContactView setPage={setPage} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 py-16 sm:py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center">
                  <Cpu className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-white uppercase">{APP_NAME}</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg leading-relaxed">
                Empowering modern brands through high-fidelity mobile apps, AI-driven software, and result-driven content strategies.
              </p>
              <div className="flex gap-3 sm:gap-4 lg:gap-5">
                {[
                  { Icon: Instagram, href: 'https://www.instagram.com/novacronix' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/novacronix' },
                  { Icon: Facebook, href: 'https://www.facebook.com/novacronix' },
                  { Icon: X, href: 'https://x.com/novacronix' }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noreferrer" className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group shadow-xl">
                    <item.Icon size={18} className="sm:size-[20px] group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-6 sm:mb-8 lg:mb-10">Navigation</h4>
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <li><button onClick={() => setPage('about')} className="hover:text-blue-500 transition-colors">The Agency</button></li>
                <li><button onClick={() => setPage('services')} className="hover:text-blue-500 transition-colors">Our Solutions</button></li>
                <li><button onClick={() => setPage('portfolio')} className="hover:text-blue-500 transition-colors">Case Studies</button></li>
                <li><button onClick={() => setPage('contact')} className="hover:text-blue-500 transition-colors">Get Started</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-6 sm:mb-8 lg:mb-10">Legal & Support</h4>
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Shield</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                <li className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-3 lg:pt-4"><Mail size={14} className="sm:size-[16px] text-blue-500" /> {EMAIL}</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 sm:pt-10 lg:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8 text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            <p className="text-center sm:text-left">© 2026 Novacronix Technologies. All Rights Reserved.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 text-center sm:text-left">
              <span className="flex items-center justify-center sm:justify-start gap-2"><Zap size={10} className="text-blue-500" /> Precision</span>
              <span className="flex items-center justify-center sm:justify-start gap-2"><Activity size={10} className="text-purple-500" /> Performance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}