import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Terminal, 
  Target, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Zap, 
  Bug, 
  Search, 
  Lock,
  Cpu,
  Mail,
  Copy,
  CheckCircle2,
  Globe,
  Volume2,
  VolumeX
} from 'lucide-react';

const PORTFOLIO_DATA = {
  name: "Ramdhani",
  title: "Cybersecurity Enthusiast",
  roles: ["Bug Hunter", "Pentester", "Red Teaming & Malware Analysis Learner"],
  location: "Darunnajah | Lulusan MA Darunnajah (2025)",
  profile: "Saya adalah lulusan MA Darunnajah tahun 2025 yang memiliki minat kuat di bidang cybersecurity, khususnya dalam pengujian keamanan aplikasi web. Sejak tahun 2025, saya aktif melakukan eksplorasi, analisis, serta pelaporan kerentanan keamanan melalui platform bug bounty seperti HackerOne, serta pengujian langsung terhadap sistem yang dapat diakses secara legal.",
  links: {
    github: "https://github.com/acongkuy",
    hackerone: "https://hackerone.com/chunsky",
    linkedin: "https://www.linkedin.com/in/acong-walnut-a88207363"
  },
  focus: [
    "Web Application Security", "Vulnerability Assessment", "Penetration Testing", 
    "Bug Bounty Research", "Red Teaming Basics", "Malware Analysis Fundamentals", 
    "Threat Intelligence & Reconnaissance"
  ],
  capabilities: [
    "Penetration Testing (Pentest)", "Red Teaming Simulation", 
    "Malware Analysis (analisis perilaku dasar malware)", 
    "Security Reconnaissance & Threat Investigation", 
    "Social Engineering Simulation & Awareness"
  ],
  skills: {
    web: ["Burp Suite", "XSStrike", "Sqlmap"],
    recon: ["Nmap", "Nikto", "Rapidscan"],
    osint: ["Subfinder", "Amass", "OSINT Tools"],
    network: ["Ping", "Traceroute", "Curl", "Sslyze", "Wireshark"],
    social: ["Slowloris", "URL Masker", "Social Engineering Tools", "Geovault"]
  },
  bugBounty: {
    total: 8,
    stats: { valid: 1, duplicate: 2, na: 3, review: 2 },
    types: [
      "Resource Allocation Issues", "Clickjacking", "Cleartext Transmission", 
      "Cross-Site Scripting (XSS)", "Improper Authorization"
    ]
  },
  research: {
    target: "simak.darunnajah.ac.id",
    vulnerabilities: ["Session Mismanagement", "Unvalidated Input", "Outdated jQuery", "Insecure Error Handling"],
    recommendations: ["Input validation yang ketat", "Secure session handling", "Update library ke versi terbaru", "Implementasi CSP & SRI"]
  }
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 text-emerald-400 font-mono text-sm mb-2"
    >
      <span className="w-8 h-[1px] bg-emerald-400/50"></span>
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white tracking-tight"
    >
      {title}<span className="text-emerald-500">.</span>
    </motion.h2>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 flex items-center justify-center rounded-lg">
            <Shield size={18} className="text-zinc-950" />
          </div>
          <span className="tracking-tighter uppercase font-mono">Ramdhani<span className="text-emerald-500">_</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm font-mono tracking-widest uppercase">
              {link.name}
            </a>
          ))}
          <a href={PORTFOLIO_DATA.links.hackerone} target="_blank" rel="noreferrer" className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-zinc-950 px-4 py-2 rounded-full border border-emerald-500/20 text-sm transition-all">
            Bug Reports
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 px-6 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM STATUS: ONLINE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white leading-tight mb-6"
          >
            {PORTFOLIO_DATA.name.toUpperCase()}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {PORTFOLIO_DATA.roles.map((role, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-400 font-mono">
                <ChevronRight size={16} className="text-emerald-500" />
                {role}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-all transform hover:-translate-y-1">
              Hubungi Saya
            </a>
            <a href="#research" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 backdrop-blur-sm transition-all">
              Hasil Riset
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-emerald-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-emerald-500/20 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img 
                src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${PORTFOLIO_DATA.name}`} 
                alt="Profile" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 border-[20px] border-zinc-950 pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-6 rounded-xl shadow-2xl backdrop-blur-xl">
              <div className="text-3xl font-black text-emerald-500">8</div>
              <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Bug Reports</div>
            </div>
          </motion.div>

          <div>
            <SectionHeading title="About Me" subtitle="IDENTIFICATION" />
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {PORTFOLIO_DATA.profile}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg">
                  <Target size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fokus Utama</h4>
                  <p className="text-zinc-500 text-sm">{PORTFOLIO_DATA.focus.join(", ")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg">
                  <Globe size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Institusi</h4>
                  <p className="text-zinc-500 text-sm">{PORTFOLIO_DATA.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    { title: "Web Security", items: PORTFOLIO_DATA.skills.web, icon: <Bug size={18} /> },
    { title: "Network Audit", items: PORTFOLIO_DATA.skills.network, icon: <Cpu size={18} /> },
    { title: "Recon & OSINT", items: [...PORTFOLIO_DATA.skills.recon, ...PORTFOLIO_DATA.skills.osint], icon: <Search size={18} /> },
    { title: "Social Engineering", items: PORTFOLIO_DATA.skills.social, icon: <Zap size={18} /> },
  ];

  return (
    <section id="skills" className="py-24 relative bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Stack" subtitle="CAPABILITIES" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, si) => (
                  <span key={si} className="text-xs font-mono px-2 py-1 bg-white/5 text-zinc-400 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TerminalSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="w-full max-w-4xl mx-auto bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-zinc-400 text-xs font-mono">zsh — ramdhani@root — 80x24</div>
          </div>
          <div className="p-6 font-mono text-sm space-y-2 text-emerald-500">
            <div className="flex gap-2">
              <span className="text-zinc-500">ramdhani@portfolio ~ %</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="text-zinc-400 mb-4">{PORTFOLIO_DATA.name} | {PORTFOLIO_DATA.roles[0]}</div>
            
            <div className="flex gap-2">
              <span className="text-zinc-500">ramdhani@portfolio ~ %</span>
              <span className="text-white">ls projects/bug-bounty</span>
            </div>
            <div className="flex flex-wrap gap-x-4 text-emerald-400 opacity-80">
              {PORTFOLIO_DATA.bugBounty.types.map(t => `${t.toLowerCase().replace(/ /g, '_')}.sh`).join("  ")}
            </div>
            
            <div className="flex gap-2 pt-4">
              <span className="text-zinc-500">ramdhani@portfolio ~ %</span>
              <span className="text-white animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeading title="Security Research" subtitle="AUDIT REPORTS" />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-900 border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield size={120} />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{PORTFOLIO_DATA.research.target}</h3>
                <span className="text-xs font-mono text-zinc-500">Internal Security Audit</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">Detected Vulnerabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.research.vulnerabilities.map((v, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-zinc-950/50 p-4 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors group">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:animate-ping" />
                      <span className="text-zinc-300 text-sm">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
                <h4 className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-4">Expert Recommendations</h4>
                <ul className="space-y-3">
                  {PORTFOLIO_DATA.research.recommendations.map((r, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 flex-1">
              <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">Bug Bounty Performance</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(PORTFOLIO_DATA.bugBounty.stats).map(([key, val], idx) => (
                  <div key={idx} className="text-center p-4 rounded-2xl bg-zinc-950 border border-white/5">
                    <div className="text-2xl font-black text-white">{val}</div>
                    <div className="text-[10px] uppercase tracking-tighter text-zinc-500">{key}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-sm text-zinc-400 mb-4 italic">"Semua aktivitas pengujian dilakukan secara etis dan legal."</div>
                <div className="flex gap-4">
                   <a href={PORTFOLIO_DATA.links.hackerone} target="_blank" rel="noreferrer" className="text-emerald-500 text-xs font-mono flex items-center gap-1 hover:underline">
                     HACKERONE PROFILE <ExternalLink size={12} />
                   </a>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Terminal size={24} className="text-blue-400" />
                <h4 className="text-blue-100 font-bold">Practice & Simulation</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Security Recon", "Threat Behavior", "Social Engineering"].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "acong.walnut@gmail.com";

  const copyEmail = () => {
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Let's Secure Something" subtitle="GET IN TOUCH" />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-zinc-900 border border-white/5 rounded-3xl text-left">
              <h3 className="text-white font-bold text-xl mb-4">Social Presence</h3>
              <div className="space-y-4">
                <a href={PORTFOLIO_DATA.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-zinc-950 rounded-2xl hover:bg-emerald-500/10 transition-all group border border-white/5">
                  <div className="flex items-center gap-3">
                    <Linkedin size={20} className="text-zinc-400 group-hover:text-emerald-500" />
                    <span className="text-zinc-300">LinkedIn</span>
                  </div>
                  <ExternalLink size={16} className="text-zinc-600" />
                </a>
                <a href={PORTFOLIO_DATA.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-zinc-950 rounded-2xl hover:bg-emerald-500/10 transition-all group border border-white/5">
                  <div className="flex items-center gap-3">
                    <Github size={20} className="text-zinc-400 group-hover:text-emerald-500" />
                    <span className="text-zinc-300">GitHub</span>
                  </div>
                  <ExternalLink size={16} className="text-zinc-600" />
                </a>
              </div>
            </div>

            <div className="p-8 bg-emerald-500 rounded-3xl text-left flex flex-col justify-between group cursor-pointer" onClick={copyEmail}>
              <div>
                <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 text-emerald-500">
                  <Mail size={24} />
                </div>
                <h3 className="text-zinc-950 font-black text-2xl leading-tight mb-2">Punya projek audit keamanan?</h3>
                <p className="text-zinc-900/70 font-medium">Klik untuk menyalin email dan mulai diskusi profesional.</p>
              </div>
              <div className="mt-8 flex items-center justify-between bg-zinc-950/20 p-4 rounded-2xl backdrop-blur-sm border border-black/5">
                <span className="text-zinc-950 font-mono font-bold truncate">acong.walnut@...</span>
                {copied ? <CheckCircle2 size={18} className="text-zinc-950" /> : <Copy size={18} className="text-zinc-950" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm font-mono">
          © {new Date().getFullYear()} RAMDHANI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    const playAudio = () => {
      audioRef.current.play().catch(() => {});
      window.removeEventListener('mousedown', playAudio);
    };

    window.addEventListener('mousedown', playAudio);

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.removeEventListener('mousedown', playAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-[9999]">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-4 text-emerald-500 mb-4"
        >
          <Shield size={48} className="animate-pulse" />
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          className="h-[2px] bg-emerald-500/20 relative overflow-hidden"
        >
          <motion.div 
            animate={{ left: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute top-0 bottom-0 w-1/2 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />
        </motion.div>
        <div className="mt-4 font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em]">INITIALIZING PROTOCOLS</div>
      </div>
    );
  }

  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
      <button 
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-emerald-500 hover:bg-zinc-800 transition-all shadow-2xl"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
      </button>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TerminalSection />
      <ResearchSection />
      <Contact />
      <Footer />
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] opacity-[0.15]">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20 animate-scanline" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #09090b;
        }
        ::-webkit-scrollbar-thumb {
          background: #18181b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #27272a;
        }
      `}} />
    </main>
  );
}

