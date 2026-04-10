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

const PackagesView = ({ setPage }) => (
  <div className="pt-20">
    {/* 1. PRICING CARDS */}
    <section className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Pricing" title="Social Media Growth Plans" centered description="Choose a package that aligns with your scaling goals. We focus on consistent content and high engagement." />
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {SOCIAL_PACKAGES.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className={`p-6 sm:p-8 lg:p-12 rounded-[2rem] lg:rounded-[3.5rem] bg-slate-900 border ${pkg.popular ? 'border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-105' : 'border-white/5'} relative flex flex-col`}
            >
              {pkg.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 sm:px-6 py-2 rounded-full">Recommended</span>}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-6 lg:mb-10 border-b border-white/5 pb-6 lg:pb-8">
                <span className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</span>
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ Month</span>
              </div>
              <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-12 flex-grow">
                {pkg.features.map(f => (
                  <div key={f} className="flex items-start gap-3 sm:gap-4 text-slate-400 text-sm font-medium">
                    <CheckCircle2 size={16} className="sm:size-[18px] text-blue-500 mt-0.5 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <NeonButton primary={pkg.popular} className="w-full">Select Plan</NeonButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 2. PACKAGE COMPARISON */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Comparison" title="Feature Breakdown" />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-xs font-black uppercase text-slate-500 tracking-widest">Service Item</th>
                <th className="py-6 px-4 text-xs font-black uppercase text-slate-300 tracking-widest">Starter</th>
                <th className="py-6 px-4 text-xs font-black uppercase text-blue-500 tracking-widest">Growth</th>
                <th className="py-6 px-4 text-xs font-black uppercase text-slate-300 tracking-widest">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                { it: "Reels / Month", s: "8", g: "12", p: "20" },
                { it: "Posts / Month", s: "6", g: "8", p: "12" },
                { it: "Content Strategy", s: "Basic", g: "Advanced", p: "Full Ecosystem" },
                { it: "Priority Delivery", s: "Standard", g: "Standard", p: "Priority" },
                { it: "Editing Style", s: "Clean", g: "Hook-Based", p: "Advanced Hybrid" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 text-sm font-bold text-white uppercase">{row.it}</td>
                  <td className="py-6 px-4 text-sm text-slate-500">{row.s}</td>
                  <td className="py-6 px-4 text-sm text-slate-400">{row.g}</td>
                  <td className="py-6 px-4 text-sm text-slate-500">{row.p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* 3. FAQ SECTION */}
    <section className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading subtitle="Help" title="Common Questions" centered />
        <div className="space-y-6">
          {[
            { q: "Can I switch plans mid-month?", a: "Yes, you can upgrade your plan at any time. Downgrades take effect from the next billing cycle." },
            { q: "Is content shooting included?", a: "Packages focus on strategy and editing. On-site shooting can be added as a custom requirement." },
            { q: "Do you handle DM replies?", a: "DM management is available as an add-on for the Growth and Premium packages." }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-white/5">
              <h5 className="text-white font-black text-sm uppercase mb-3">{f.q}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. BRANDING WORKFLOW */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-slate-900 rounded-[2rem] lg:rounded-[3rem] border border-white/5 p-8 lg:p-12 overflow-hidden flex flex-col justify-end">
              <div className="absolute top-0 right-0 p-8 lg:p-12"><Sparkles className="text-blue-500" size={48} /></div>
              <h4 className="text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6 uppercase leading-tight italic">Content <br /> Mastery.</h4>
              <p className="text-slate-500 uppercase font-black text-[10px] tracking-widest">Our signature growth loop</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading subtitle="Approach" title="Our Viral Loop" />
            <div className="space-y-6 lg:space-y-8">
              {[
                { t: "Viral Hook Research", d: "We analyze current trends and hooks to ensure maximum initial retention." },
                { t: "Psychological Editing", d: "Dynamic transitions and captions designed to keep viewers scrolling." },
                { t: "Data Iteration", d: "We review analytics weekly to double down on what works." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 lg:gap-6">
                  <span className="text-3xl lg:text-4xl font-black text-blue-500/20">{i + 1}</span>
                  <div>
                    <h5 className="text-lg lg:text-xl font-bold text-white mb-2 uppercase">{item.t}</h5>
                    <p className="text-slate-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);


export default PackagesView;
