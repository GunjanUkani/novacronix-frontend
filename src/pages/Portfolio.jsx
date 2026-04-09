import React, { useState, useEffect, useMemo } from 'react';
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
import { APP_NAME, EMAIL, LOCATION, WEB_PROJECTS, INSTAGRAM_PROJECTS, SOCIAL_PACKAGES } from '../lib/constants.js';
import { NeonButton, SectionHeading } from '../components/Shared.jsx';

const PortfolioView = ({ setPage }) => {
  const [filter, setFilter] = useState('All');

  const allProjects = useMemo(() => [
    ...WEB_PROJECTS.map(p => ({ ...p, type: 'Web' })),
    ...INSTAGRAM_PROJECTS.map(p => ({ ...p, type: 'Social Media' })),
    { title: "Finance Engine", category: "Internal", type: "Internal", desc: "AI-Powered Finance Tool" },
    { title: "Interior CRM", category: "Internal", type: "Internal", desc: "Private CRM Solution" }
  ], []);

  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.type === filter);

  return (
    <div className="pt-20">
      {/* 1. PORTFOLIO INTRO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6 lg:gap-8">
            <div className="flex-1">
              <SectionHeading
                subtitle="Showcase"
                title="Our Digital Portfolio"
                description="Explore our recent deployments across mobile, web, and AI. Filter to see our work in action."
              />
            </div>
            <div className="flex bg-slate-900 p-2 rounded-2xl lg:rounded-2.5xl border border-white/5 self-start shadow-2xl overflow-x-auto">
              {['All', 'Web', 'Social Media', 'Internal'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl lg:rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === f ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-white'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title + i}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden bg-slate-900 border border-white/5 rounded-[2rem] lg:rounded-[3rem] h-full flex flex-col shadow-xl"
                >
                  <div className="aspect-[4/3] bg-slate-950 p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-blue-600/5 blur-2xl lg:blur-3xl rounded-full"></div>
                    <div className="flex justify-between items-start relative z-10">
                      <div className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                        {p.type === 'Web' ? <Globe size={16} className="lg:size-[20px]" /> : p.type === 'Internal' ? <BrainCircuit size={16} className="lg:size-[20px]" /> : <Instagram size={16} className="lg:size-[20px]" />}
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 group-hover:text-blue-500 transition-colors">{p.type}</span>
                    </div>
                    <div className="space-y-2 relative z-10">
                      <h4 className="text-lg lg:text-2xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tighter leading-tight uppercase">{p.title}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{p.desc || 'AI & Mobile Excellence'}</p>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 bg-slate-900 border-t border-white/5 flex justify-between items-center group-hover:bg-slate-800 transition-colors">
                    {p.type === 'Internal' ? (
                      <span className="text-[10px] text-slate-500 uppercase font-black italic tracking-widest">Secure AI Access</span>
                    ) : (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 lg:gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-all">
                        Launch <ArrowUpRight size={12} className="lg:size-[14px]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERNAL PROJECTS HIGHLIGHT */}
      <section className="py-20 lg:py-32 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] lg:rounded-[4rem] border border-white/5 p-12 lg:p-16 md:p-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-600/10 blur-[100px] lg:blur-[120px] rounded-full"></div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading subtitle="Intelligence" title="Private AI Systems" />
              <p className="text-slate-400 text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed">
                We maintain a high-security internal ecosystem for proprietary AI tools. These include our Finance Intelligence Engine & Python-driven Interior CRM solutions.
              </p>
              <NeonButton onClick={() => setFilter('Internal')}>View Restrictions</NeonButton>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <BrainCircuit size={150} className="lg:size-[200px] text-blue-600/20" />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Zap size={48} className="lg:size-[64px] text-blue-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY VERTICALS */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Breadth" title="Industries Mastered" centered />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {["Finance", "Retail", "Bakery", "Logistics", "AI Tech", "Interior"].map((ind, i) => (
              <div key={i} className="p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900 border border-white/5 flex flex-col items-center justify-center text-center group hover:border-blue-500/50">
                <Briefcase size={24} className="lg:size-[32px] text-slate-600 mb-4 lg:mb-6 group-hover:text-blue-500" />
                <span className="text-white font-black uppercase text-[10px] tracking-widest">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEXT STEP CTA */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] lg:rounded-[4rem] p-12 lg:p-24 shadow-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 lg:mb-8 tracking-tighter uppercase italic">Your App is next.</h2>
          <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-8 lg:mb-12">
            Join the brands transforming their digital landscape with Python-powered AI and native mobile apps.
          </p>
          <NeonButton className="!bg-white !text-blue-700 !border-none" onClick={() => setPage('contact')}>Start Your Journey</NeonButton>
        </div>
      </section>
    </div>
  );
};


export default PortfolioView;
