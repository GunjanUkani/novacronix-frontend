import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Code2,
  Globe,
  Zap,
  Smartphone,
  Cloud,
  Instagram,
  Terminal,
  BrainCircuit,
  Binary,
  Layers3
} from 'lucide-react';
import { APP_NAME, EMAIL, LOCATION, WEB_PROJECTS, INSTAGRAM_PROJECTS, SOCIAL_PACKAGES } from '../lib/constants.js';
import { NeonButton, SectionHeading } from '../components/Shared.jsx';

const ReactLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#61DAFB" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);

const FlutterLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#02569B" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
  </svg>
);

const AndroidLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#3DDC84" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" />
  </svg>
);

const AppleLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const NodeLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#5FA04E" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
);

const AWSLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} className={className} aria-hidden="true">
    <rect width="128" height="128" rx="28" fill="#FF9900" />
    <text x="50%" y="58%" fill="#ffffff" fontSize="44" fontWeight="700" fontFamily="system-ui, sans-serif" textAnchor="middle" dominantBaseline="middle">AWS</text>
    <path d="M32 92h64v10H32z" fill="rgba(255,255,255,0.15)" />
  </svg>
);

const JavaScriptLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#F7DF1E" />
    <text x="12" y="18" fontSize="16" fontWeight="900" textAnchor="middle" fill="#000000" fontFamily="Arial, sans-serif">JS</text>
  </svg>
);

const TypeScriptLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#3178C6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const NextLogo = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
  </svg>
);

const ServicesView = ({ setPage }) => (
  <div className="pt-20">
    {/* 1. SERVICES OVERVIEW */}
    <section className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Solutions"
          title="Services We Provide"
          description="Advanced mobile apps, AI-driven software, and strategic branding."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <div className="p-8 sm:p-10 lg:p-12 rounded-[2rem] lg:rounded-[3rem] bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600/10 rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 transition-transform">
              <Code2 className="text-blue-500" size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 lg:mb-8 uppercase tracking-tighter">Software & Mobile Development</h3>
            <div className="grid sm:grid-cols-2 gap-y-4 lg:gap-y-6 gap-x-8 lg:gap-x-12">
              {[
                "Android Development", "iOS Development", "Flutter Cross-Platform",
                "AI & ML Solutions", "JS Automation", "Custom CRM Systems",
                "Interior CRM Solutions", "Web Applications",
                "API Integrations", "Admin Dashboards", "Landing Pages"
              ].map(s => (
                <div key={s} className="flex items-center gap-2 sm:gap-3 text-slate-400 text-sm font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div> {s}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12 rounded-[2rem] lg:rounded-[3rem] bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/10 rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center mb-6 lg:mb-10 group-hover:scale-110 transition-transform">
              <Instagram className="text-purple-500" size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 lg:mb-8 uppercase tracking-tighter">Branding & Social Media</h3>
            <p className="text-slate-400 text-base lg:text-lg mb-6 lg:mb-10 leading-relaxed">
              We manage complete social media profiles for small businesses, creators, and brands focused on exponential growth.
            </p>
            <div className="space-y-4 lg:space-y-6">
              {[
                "Complete profile management",
                "Hook-based content strategy",
                "High-fidelity reel editing",
                "Advanced analytics & scaling"
              ].map(s => (
                <div key={s} className="flex items-center gap-3 sm:gap-4 text-white font-bold">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-purple-500" />
                  </div>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 2. TECHNOLOGY FOCUS */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Tech Stack" title="Our Modular Infrastructure" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {[
            { n: "REACT", i: ReactLogo },
            { n: "FLUTTER", i: FlutterLogo },
            { n: "JAVASCRIPT", i: JavaScriptLogo },
            { n: "ANDROID", i: AndroidLogo },
            { n: "IOS", i: AppleLogo },
            { n: "AI & ML", i: BrainCircuit },
            { n: "NODE.JS", i: NodeLogo },
            { n: "AWS", i: AWSLogo },
            { n: "TYPESCRIPT", i: TypeScriptLogo },
            { n: "NEXT.JS", i: NextLogo }
          ].map((t, i) => (
            <div key={i} className="p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900 border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-slate-800 transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-4">
                <t.i size={36} className="text-slate-200 transition-colors group-hover:text-blue-400" />
              </div>
              <span className="text-white font-bold text-xs tracking-widest">{t.n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. INDUSTRY FOCUS */}
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Industry Focus"
          title="Industries We Survey"
          description="From retail and real estate to healthcare, logistics, finance and government — we build software across every major sector."
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[
            'Real Estate', 'Healthcare', 'Finance', 'Retail', 'Logistics', 'Education',
            'Manufacturing', 'Hospitality', 'Telecom', 'Government', 'Sports', 'Automotive'
          ].map((industry) => (
            <div key={industry} className="rounded-[2rem] bg-slate-900 border border-white/5 p-6 hover:border-blue-500/30 transition-all">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.24em] mb-3">{industry}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Tailored apps, automation, and data workflows designed for modern industry demands.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. TECHNICAL WORKFLOW */}
    <section className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading subtitle="Methodology" title="Mobile & AI Engineering" />
            <div className="space-y-6 lg:space-y-10">
              {[
                { t: "Native Performance", d: "Optimized Android and iOS code for lightning-fast mobile responsiveness." },
                { t: "AI Integration", d: "Embedding intelligent models to automate decisions and analyze user behavior." },
                { t: "JS Automation", d: "Scalable JavaScript automation and backend flows for modern business systems." }
              ].map((m, i) => (
                <div key={i} className="flex gap-4 lg:gap-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="lg:size-[24px] text-blue-500" />
                  </div>
                  <div>
                    <h5 className="text-lg lg:text-xl font-bold text-white mb-2 uppercase">{m.t}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-slate-900 rounded-[2rem] lg:rounded-[3rem] border border-white/5 p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-blue-600/10 blur-[80px] lg:blur-[100px] rounded-full"></div>
            <Terminal className="text-blue-500/10 mb-6 lg:mb-8" size={100} />
            <div className="space-y-3 lg:space-y-4 font-mono text-[9px] lg:text-[10px] text-blue-500/40">
              <p>{`> Initializing Android/iOS build...`}</p>
              <p>{`> Loading JavaScript automation flow...`}</p>
              <p>{`> Compiling Flutter assets.`}</p>
              <p>{`> ML training epoch validated.`}</p>
              <p>{`> System ready. Mobile App online.`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 4. SERVICE FEATURES */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading subtitle="Quality" title="The Novacronix Standard" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { t: "Mobile Native", i: Smartphone },
            { t: "Intelligent AI", i: BrainCircuit },
            { t: "JS Power", i: Binary },
            { t: "Global Scale", i: Globe }
          ].map((f, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 border border-white/5 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                <f.i className="text-blue-500" size={28} />
              </div>
              <h5 className="text-white font-black uppercase text-xs tracking-widest text-center">{f.t}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);


export default ServicesView;