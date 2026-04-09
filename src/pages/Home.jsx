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
import homeHeroImage from '../assets/home-hero-section.jpg';

const HomeView = ({ setPage }) => (
  <div className="pt-20">
    {/* 1. HERO SECTION */}
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8"
          >
            <Sparkles size={12} className="text-blue-400" /> Shaping modern businesses
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] lg:leading-[0.85] mb-6 lg:mb-10"
          >
            Transforming <br /> Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Digital Excellence.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mb-8 lg:mb-12 leading-relaxed font-medium"
          >
            Web development, Android/iOS apps, AI solutions & social media growth for modern brands looking to dominate the digital landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <NeonButton primary onClick={() => setPage('contact')}>Get a Quote</NeonButton>
            <NeonButton onClick={() => setPage('portfolio')}>View Portfolio</NeonButton>
          </motion.div>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2rem] lg:rounded-[3rem] border border-white/10 p-1 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="h-full w-full bg-slate-950 rounded-[1.8rem] lg:rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 group-hover:opacity-100 opacity-50 transition-opacity"></div>
              <img src={homeHeroImage} alt="Construction and engineering site" className="h-full w-full object-cover object-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* 2. STATS SECTION */}
    {/* <section className="py-16 lg:py-20 px-6 border-y border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-8 lg:gap-12">
        {[
          { label: "Uptime Guarantee", val: "99.9%" },
          { label: "Projects Delivered", val: "250+" },
          { label: "Global Clients", val: "50+" },
          { label: "Expert Support", val: "24/7" },
        ].map((st, i) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">{st.val}</span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">{st.label}</span>
          </div>
        ))}
      </div>
    </section> */}

    {/* 3. CORE CAPABILITIES PREVIEW */}
    <section className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Expertise"
          title="Our Core Capabilities"
          description="We blend technical precision with creative flair to deliver high-impact digital products across web, mobile, and AI."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Globe, t: "Web Dev", d: "High-performance custom sites tailored for your specific business goals." },
            { icon: Smartphone, t: "App Solutions", d: "Native Android & iOS engineering alongside cross-platform Flutter development." },
            { icon: BrainCircuit, t: "AI & ML", d: "Python-powered machine learning models and intelligent automation systems." },
            { icon: Instagram, t: "Social Growth", d: "Branding & media management focused on hyper-growth and engagement." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 sm:p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 bg-blue-600/5 blur-2xl rounded-full"></div>
              <s.icon className="text-blue-500 mb-6 lg:mb-8 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 lg:mb-4 uppercase tracking-tighter">{s.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. DIGITAL PROCESS */}
    <section className="py-20 lg:py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Workflow" title="Our 4-Step Process" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-10"></div>
          {[
            { n: "01", t: "Discovery", d: "Deep dive into your brand, goals, and target audience." },
            { n: "02", t: "Strategy", d: "Architecting a unique digital roadmap for success." },
            { n: "03", t: "Execution", d: "Rapid development with rigorous quality standards." },
            { n: "04", t: "Optimization", d: "Continuous refinement and data-driven growth." },
          ].map((p, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:bg-blue-600 transition-all shadow-xl group-hover:shadow-blue-500/20">
                <span className="text-xl lg:text-2xl font-black text-white">{p.n}</span>
              </div>
              <h4 className="text-lg lg:text-xl font-black text-white mb-3 lg:mb-4 uppercase">{p.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);


export default HomeView;
