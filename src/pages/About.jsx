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

const AboutView = ({ setPage }) => (
  <div className="pt-20">
    {/* 1. AGENCY INTRO */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeading subtitle="The Agency" title="Who is Novacronix?" />
            <p className="text-slate-400 text-base lg:text-xl mb-8 lg:mb-10 leading-relaxed font-medium">
              Novacronix Technologies is a modern software development and digital media company.
              We build high-performance web applications, native Android/iOS apps via Flutter,
              AI-driven automation, and branding-focused social media management.
            </p>
            <div className="grid grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900/50 border border-white/5">
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2">40+</h4>
                <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Projects Completed</p>
              </div>
              <div className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900/50 border border-white/5">
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-2">99%</h4>
                <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Client Success</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
              <div className="aspect-[4/5] bg-blue-600/10 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/5 flex items-center justify-center p-6 lg:p-8 text-center">
                <div><Award size={36} className="lg:size-[48px] text-blue-500 mx-auto mb-4 lg:mb-6" /><p className="text-white font-black uppercase text-sm tracking-widest">Premium Quality</p></div>
              </div>
              <div className="aspect-square bg-purple-600/10 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/5 flex items-center justify-center p-6 lg:p-8 text-center">
                <div><Target size={36} className="lg:size-[48px] text-purple-500 mx-auto mb-4 lg:mb-6" /><p className="text-white font-black uppercase text-sm tracking-widest">Result Driven</p></div>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="aspect-square bg-slate-900 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/5 flex items-center justify-center p-6 lg:p-8 text-center">
                <div><Layers size={36} className="lg:size-[48px] text-slate-500 mx-auto mb-4 lg:mb-6" /><p className="text-white font-black uppercase text-sm tracking-widest">Scalable Tech</p></div>
              </div>
              <div className="aspect-[4/5] bg-pink-600/10 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/5 flex items-center justify-center p-6 lg:p-8 text-center">
                <div><Zap size={36} className="lg:size-[48px] text-pink-500 mx-auto mb-4 lg:mb-6" /><p className="text-white font-black uppercase text-sm tracking-widest">Ultra Fast</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 2. MISSION & VISION */}
    <section className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="p-16 rounded-[3rem] bg-blue-600/5 border border-blue-500/10">
          <Lightbulb size={48} className="text-blue-500 mb-8" />
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Mission</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            To empower modern businesses with cutting-edge mobile apps, AI-driven automation, and creative digital strategies that drive sustainable growth.
          </p>
        </div>
        <div className="p-16 rounded-[3rem] bg-purple-600/5 border border-purple-500/10">
          <Target size={48} className="text-purple-500 mb-8" />
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Vision</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            To be the global benchmark for digital transformation, where every mobile and AI solution is sculpted into high-performance excellence.
          </p>
        </div>
      </div>
    </section>

    {/* 3. CORE VALUES */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Principles" title="The Novacronix Values" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: ShieldCheck, t: "Trust & Transparency", d: "We build lasting relationships through open communication and ethical standards." },
            { icon: Activity, t: "Constant Innovation", d: "We never settle. We are always exploring the next frontier of mobile & AI engineering." },
            { icon: Heart, t: "Client Centricity", d: "Your goals are our goals. We align our success with your business milestones." },
          ].map((v, i) => (
            <div key={i} className="p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] bg-slate-900 border border-white/5 text-center">
              <v.icon size={36} className="lg:size-[48px] text-blue-500 mx-auto mb-6 lg:mb-8" />
              <h4 className="text-lg lg:text-xl font-black text-white mb-3 lg:mb-4 uppercase">{v.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. INDUSTRY EXPERTISE */}
    <section className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Reach" title="Industries We Serve" centered />
        <div className="flex flex-wrap justify-center gap-4">
          {["Fintech", "HealthTech", "E-Commerce", "SaaS", "Real Estate", "Education", "Logistics", "Personal Branding"].map((tag, i) => (
            <span key={i} className="px-8 py-4 rounded-2xl bg-slate-900 border border-white/5 text-sm font-bold text-slate-400 uppercase tracking-widest hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  </div>
);


export default AboutView;
