import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  Mail,
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

const WhatsAppIcon = ({ size = 20, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M20.52 3.48A11.77 11.77 0 0 0 12.01.25C6.14.25 1.26 5.18 1.26 11.01c0 1.95.51 3.87 1.47 5.58L.26 23.75l7.45-1.95a11.72 11.72 0 0 0 4.29.82h.01c5.87 0 10.75-4.93 10.75-10.75 0-2.87-1.12-5.57-3.24-7.14Zm-8.5 16.28h-.01a9.07 9.07 0 0 1-3.97-.86l-.28-.15-4.43 1.16 1.18-4.32-.18-.28a8.86 8.86 0 0 1-.88-4.07c0-4.89 4-8.86 8.91-8.86 2.38 0 4.61.93 6.28 2.61 1.68 1.69 2.61 3.95 2.61 6.28 0 4.9-3.97 8.89-8.91 8.89Zm4.9-6.56c-.26-.13-1.54-.76-1.78-.85-.24-.1-.41-.14-.58.14-.17.28-.65.85-.8 1.03-.15.18-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.26-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.11-.11.24-.28.36-.41.12-.14.16-.24.24-.4.08-.15.04-.29-.02-.42-.07-.13-.58-1.39-.8-1.91-.21-.5-.42-.43-.58-.43h-.49c-.17 0-.45.06-.69.29-.24.24-.92.9-.92 2.19 0 1.28.94 2.52 1.07 2.69.13.17 1.86 2.84 4.53 3.98 2.67 1.14 2.67.76 3.15.71.48-.06 1.54-.63 1.76-1.24.23-.61.23-1.14.16-1.25-.06-.1-.24-.16-.5-.29Z" />
  </svg>
);

const ContactView = ({ setPage }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      {/* 1. CONTACT INTRO & FORM */}
      <section className="py-20 lg:py-32 px-6 min-h-[80vh]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionHeading subtitle="Connect" title="Start Your Project" />
            <p className="text-slate-400 text-base lg:text-xl mb-8 lg:mb-12 leading-relaxed">
              Ready to scale your digital presence? Send us a message or jump on a quick WhatsApp chat. We typically respond within 24 hours.
            </p>

            <div className="space-y-6 lg:space-y-10 mb-12 lg:mb-16">
              <div className="flex items-center gap-6 lg:gap-8 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-600/10 rounded-2xl lg:rounded-2.5xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} className="lg:size-[24px]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-black text-base lg:text-lg tracking-tight">{EMAIL}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-8 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-600/10 rounded-2xl lg:rounded-2.5xl flex items-center justify-center border border-green-500/20 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <WhatsAppIcon size={20} className="lg:size-[24px]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white font-black text-base lg:text-lg tracking-tight">Direct Instant Chat</p>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-8 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 rounded-2xl lg:rounded-2.5xl flex items-center justify-center border border-white/10 group-hover:border-white transition-all">
                  <MapPin size={20} className="lg:size-[24px]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-black text-base lg:text-lg tracking-tight">{LOCATION}</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/+916352450648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 lg:gap-4 bg-green-600 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-green-600/30 hover:scale-105 active:scale-95 transition-all text-sm">
              <WhatsAppIcon size={18} className="text-white" /> WhatsApp Inquiry
            </a>
          </div>

          <div className="bg-slate-900 border border-white/5 p-8 sm:p-10 lg:p-12 md:p-16 rounded-[2rem] lg:rounded-[4rem] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none"></div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Message Sent!</h3>
                <p className="text-slate-500 text-lg mb-10">Our specialists will be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-500 font-black uppercase text-xs tracking-[0.3em] hover:text-white transition-colors">Send Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                    <input required placeholder="E.g. John Doe" className="w-full bg-slate-950 border border-white/5 rounded-[1.25rem] p-5 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-slate-950 border border-white/5 rounded-[1.25rem] p-5 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                    <input placeholder="+1 (555) 000-0000" className="w-full bg-slate-950 border border-white/5 rounded-[1.25rem] p-5 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Type</label>
                    <select className="w-full bg-slate-950 border border-white/5 rounded-[1.25rem] p-5 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                      <option>Web Development</option>
                      <option>Social Media</option>
                      <option>Software Solution</option>
                      <option>Branding Only</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">How can we help?</label>
                  <textarea required placeholder="Tell us about your project goals..." rows={5} className="w-full bg-slate-950 border border-white/5 rounded-[1.5rem] p-6 text-white focus:border-blue-500 outline-none transition-all resize-none placeholder:text-slate-700"></textarea>
                </div>
                <a href="https://wa.me/+916352450648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full !py-5 uppercase tracking-[0.3em] rounded-[1.25rem] bg-slate-800 text-white font-black hover:bg-slate-700 transition-all">
                  Launch Inquiry
                </a>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS / MAP PLACEHOLDER */}
      <section className="py-20 px-6 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-widest mb-2">Operational Hours</h4>
            <p className="text-slate-500 text-xs">Mon - Sat: 10:00 AM - 07:00 PM IST</p>
          </div>
          <div className="h-px w-24 bg-slate-800 hidden md:block"></div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-widest mb-2">Response Time</h4>
            <p className="text-slate-500 text-xs">Averages under 24 hours for all inquiries</p>
          </div>
          <div className="h-px w-24 bg-slate-800 hidden md:block"></div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-widest mb-2">Direct Line</h4>
            <p className="text-slate-500 text-xs">+91 (Inquiry Line Active)</p>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ContactView;
