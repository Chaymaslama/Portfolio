import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2, Cpu, Database, Globe, Smartphone, Wrench,
  Mail, Phone, MapPin, ExternalLink, ArrowRight,
  ChevronDown, ChevronLeft, ChevronRight, Menu, X, User, GraduationCap,
  Calendar, BookOpen, Award, Send, Download,
  Brain, Image, Video, Search
} from "lucide-react";
import "./App.css";
import photo from './assets/photo.jpg';

// ── ARABIC SEARCH ENGINE ──────────────────────────────────────
import arabic1 from './assets/arabic_search1.png';
import arabic2 from './assets/arabic_search2.png';
import arabic3 from './assets/arabic_search3.png';
import arabic4 from './assets/arabic_search4.png';
import arabic5 from './assets/arabic_search5.png';
import arabic6 from './assets/arabic_search6.png';
import arabic7 from './assets/arabic_search7.png';
import arabic8 from './assets/arabic_search8.png';
import arabic9 from './assets/arabic_search9.png';

// ── FOCUS FLOW ────────────────────────────────────────────────
import focus1 from './assets/focus_flow1.png';
import focus2 from './assets/focus_flow2.png';
import focus3 from './assets/focus_flow3.png';

// ── GESTION FORMATION ─────────────────────────────────────────
import gestion1 from './assets/gestion-fpromation1.png';
import gestion2 from './assets/gestion-fpromation2.png';
import gestion3 from './assets/gestion-fpromation3.png';
import gestion4 from './assets/gestion-fpromation4.png';
import gestion5 from './assets/gestion-fpromation5.png';
import gestion6 from './assets/gestion-fpromation6.png';
import gestion7 from './assets/gestion-fpromation7.png';

// ── CUBESAT CRMN ──────────────────────────────────────────────
import crmn1  from './assets/crmn1.jpg';
import crmn2  from './assets/crmn2.png';
import crmn3  from './assets/crmn3.png';
import crmn4  from './assets/crmn4.png';
import crmn5  from './assets/crmn5.png';
import crmn6  from './assets/crmn6.jpg';
import crmn7  from './assets/crmn7.jpg';
import crmn8  from './assets/crmn8.jpg';
import crmn9  from './assets/crmn9.jpg';
import crmn10 from './assets/crmn10.png';
import crmn11 from './assets/crmn11.png';
import crmn12 from './assets/crmn12.png';
import crmn13 from './assets/crmn13.png';
import crmn14 from './assets/crmn14.png';
import crmn15 from './assets/crmn15.png';
import crmn16 from './assets/crmn16.png';
import crmn17 from './assets/crmn17.png';
import crmn18 from './assets/crmn18.jpg';

// ── VIE SOCIALE ───────────────────────────────────────────────
import leo1 from './assets/leo1.jpg';
import leo2 from './assets/leo2.jpg';
import leo3 from './assets/leo3.mp4';

// ── CERTIFICATIONS ────────────────────────────────────────────
import certif   from './assets/certif_ia.png';
import certifnv from './assets/certif_nevidia1.png';
import certi    from './assets/certif_nevidia2.jpg';

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    year:"Février 2026",
    bg:"linear-gradient(135deg,#2a1e00,#141000,#080808)",
    cat:"Moteur de Recherche",
    name:"Arabic Search Engine",
    desc:"Moteur de recherche intelligent pour textes arabes , indexation sémantique et classement des résultats. Supporte la racine arabe, la diacritisation et la recherche floue.",
    tech:["Spring Boot","Java"],
    github:"https://github.com/Chaymaslama/Morphological-search-engine-for-the-Arabic-language",
    live:null,
    filter:"",
    images:[arabic1,arabic2,arabic3,arabic4,arabic5,arabic6,arabic7,arabic8,arabic9],
  },
  {
    year:"Mars 2026",
    bg:"linear-gradient(135deg,#0a1a12,#080808)",
    cat:"IoT / Computer Vision",
    name:"FocusFlow — Smart IoT Monitor",
    desc:"Système IoT de surveillance de la concentration combinant vision par ordinateur et embarqué. Détection faciale temps réel, alertes et dashboard analytique.",
    tech:["React.js","TypeScript","Firebase","MQTT","ESP32","MediaPipe"],
    github:"#",
    live:null,
    filter:"IoT / Embarqué",
    images:[focus1,focus2,focus3],
  },
  {
    year:"Avril 2026",
    bg:"linear-gradient(135deg,#0c1824,#080808)",
    cat:"Full-Stack Web App",
    name:"Application Gestion de Formation",
    desc:"Application complète de gestion des formations avec authentification, tableaux de bord, gestion des inscriptions et des modules.",
    tech:["React.js","Spring Boot","MySQL"],
    github:"https://github.com/Chaymaslama/gestion-formation",
    live:null,
    filter:"Web App",
    images:[gestion1,gestion2,gestion3,gestion4,gestion5,gestion6,gestion7],
  },
  {
    year:"Juin 2025",
    bg:"linear-gradient(135deg,#140a22,#080808)",
    cat:"Systèmes Embarqués",
    name:"CubeSat Sun Tracking System",
    desc:"Système PCB de détermination d'orientation d'un CubeSat par rapport au soleil en temps réel via protocole I2C.",
    tech:["ESP32","STM32","Python","EasyEDA","C++"],
    github:null,
    live:null,
    filter:"IoT / Embarqué",
    images:[crmn1,crmn2,crmn3,crmn4,crmn5,crmn6,crmn7,crmn8,crmn9,crmn10,crmn11,crmn12,crmn13,crmn14,crmn15,crmn16,crmn17,crmn18],
  },
  {
    year:"Sep 2024",
    bg:"linear-gradient(135deg,#0c1424,#080808)",
    cat:"Full-Stack Web App",
    name:"Laravel Blog",
    desc:"Application Blog full-stack avec gestion avancée des transactions, système de commentaires et administration complète.",
    tech:["Laravel","PHP","Livewire","MySQL","MongoDB"],
    github:null,
    live:null,
    filter:"Web App",
    images:[],
  },
];

const FILTERS = ["Tous","Web App","IoT / Embarqué",];

const SKILLS = [
  { icon:<Globe size={15}/>, cat:"Backend Web", pills:["Laravel","Node.js","Spring Boot","PHP"] },
  { icon:<Code2 size={15}/>, cat:"Frontend Web", pills:["React.js","HTML","CSS","JavaScript","Angular 18","TypeScript"] },
  { icon:<Cpu size={15}/>, cat:"Systèmes Embarqués", pills:["ESP32","STM32","Arduino","EasyEDA","PCB Design"] },
  { icon:<Database size={15}/>, cat:"Bases de Données", pills:["MySQL","MongoDB","Firebase","Firestore"] },
  { icon:<Smartphone size={15}/>, cat:"Mobile & Langages", pills:["Flutter","Java","Python","C++"] },
  { icon:<Wrench size={15}/>, cat:"Outils & DevOps", pills:["Git","GitHub","MQTT","Vite","TailwindCSS"] },
];

const EXPERIENCES = [
  {
    company:"Centre de Recherche en Microélectronique et Nanotechnologie",
    date:"Fév 2025 – Juin 2025",
    role:"Stagiaire — Développement Systèmes Embarqués",
    desc:"Conception et réalisation d'un système PCB permettant de déterminer l'orientation d'un CubeSat par rapport au soleil, en temps réel.",
    tech:["ESP32","STM32","Arduino","Python","CustomTkinter","UDP","I2C","EasyEDA","C++"],
    github:null,
  },
  {
    company:"Sloth Lab — Sousse",
    date:"Août – Sep 2024",
    role:"Stagiaire — Développement Web Full-Stack",
    desc:"Développement d'une application web de type Blog avec gestion des transactions, commentaires et administration.",
    tech:["Laravel","PHP","Livewire","MySQL","MongoDB","Laragon"],
    github:null,
  },
  {
    company:"Pura Solution — Sousse",
    date:"Août 2024",
    role:"Stagiaire — Développement Frontend",
    desc:"Développement d'une application web moderne et responsive.",
    tech:["Angular 18"],
    github:null,
  },
];

const EDUCATION = [
  { icon:<GraduationCap size={20}/>, degree:"Cycle Ingénieur — Systèmes Embarqués & Objets Connectés", school:"ISI Ariana", detail:"1ère année — Cycle Ingénieur", year:"2025 – 2026" },
  { icon:<BookOpen size={20}/>, degree:"Licence en Ingénierie des Systèmes Informatiques", school:"ISITCOM — Hammam Sousse", detail:"Spécialisation Systèmes Informatiques", year:"2022 – 2025" },
  { icon:<Award size={20}/>, degree:"Baccalauréat Sciences Expérimentales", school:"Lycée Les Élites, Sousse", detail:"Section Sciences Expérimentales", year:"Promo 2022" },
];

const CERTS = [
  { icon:"", name:"Formation React.js, Node.js & Intelligence Artificielle", issuer:"GUST Training — Tunis", date:"Janvier 2025", featured:true, images:[certif] },
  { icon:"", name:"Formation Intelligence Artificielle ", issuer:"IEEE ISI", date:"Janvier 2023", featured:false, images:[certifnv, certi] },
];

const LANGS = [
  { name:"Arabe", level:"Maternelle", pct:100 },
  { name:"Français", level:"Courant", pct:90 },
  { name:"Anglais", level:"Courant", pct:85 },
  { name:"Allemand", level:"Débutant", pct:20 },
];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */
const FadeUp = ({ children, delay=0, style }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <motion.div ref={ref} style={style}
      initial={{ opacity:0, y:30 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.65, delay, ease:[0.22,1,0.36,1] }}>
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function Navbar({ open, setOpen }) {
  const links = ["About","Éducation","Expérience","Projets","Skills","Certifications","Vie Sociale","Contact"];
  const ids   = ["about","education","experience","projects","skills","certifications","social","contact"];
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">CBS.dev</div>
        <div className="nav-links">
          {links.map((l,i)=><a key={l} href={`#${ids[i]}`}>{l}</a>)}
        </div>
       
        <button className="mobile-btn" onClick={()=>setOpen(v=>!v)}>
          {open ? <X size={16}/> : <Menu size={16}/>}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            style={{position:"fixed",top:64,left:0,right:0,zIndex:99,background:"var(--bg2)",
              borderBottom:"1px solid var(--border)",padding:"1.5rem 2rem",
              display:"flex",flexDirection:"column",gap:"1.2rem"}}>
            {links.map((l,i)=>(
              <a key={l} href={`#${ids[i]}`} style={{fontSize:"0.9rem",color:"var(--text)"}} onClick={()=>setOpen(false)}>{l}</a>
            ))}
           
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{background:"var(--bg)"}}>
      <div className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
            <div className="hero-badge">INGÉNIEURE EN SYSTÈMES EMBARQUÉS & OBJETS CONNECTÉS</div>
          </motion.div>
          <motion.h1 className="hero-name" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}>
            CHAYMA<br/>
            <span className="gold-text">BEN</span><br/>
            <span className="dim">SLAMA</span>
          </motion.h1>
          <motion.p className="hero-role" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
            Étudiante cycle ingénieur à l'ISI Ariana — passionnée par l'électronique embarquée et le développement web full-stack. Je recherche activement une opportunité à une nouvelle expérience.
          </motion.p>
          <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
            <a href="#contact" className="btn-gold"><Send size={14}/> Me contacter</a>
          </motion.div>
          <motion.div className="hero-stats" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.65}}>
            {[["3","Stages"],["5+","Projets"],["4","Langues"],["2","Diplômes"]].map(([n,l])=>(
              <div key={l}>
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — PHOTO */}
        <motion.div className="hero-right" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}}>
          <div className="hero-bg-letter">C</div>
          <div className="hero-photo-ring float-anim">
            <div className="hero-photo-inner">
              <img src={photo} alt="Chayma Ben Slama" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}/>
            </div>
          </div>
          <div className="hero-float-badge fb-1"><Code2 size={13}/> Full Stack Dev</div>
          <div className="hero-float-badge fb-2"><Cpu size={13}/> IoT & Embarqué</div>
          <div className="hero-float-badge fb-open"><span className="fb-dot"/>&nbsp;Ouverte aux opportunités</div>
        </motion.div>
      </div>

      <motion.div style={{display:"flex",justifyContent:"center",paddingBottom:"2.5rem",color:"var(--muted)",cursor:"pointer"}}
        animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:2}}
        onClick={()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"})}>
        <ChevronDown size={22}/>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════════ */
function About() {
  return (
    <section id="about">
      <div className="about-wrap">
        <FadeUp><div className="sec-eyebrow">QUI SUIS-JE</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">À PROPOS <span className="gold">DE MOI</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        <div className="about-layout">
          <FadeUp delay={0.1}>
            <div className="about-text">
              <p className="about-highlight">
                Ingénieure passionnée par <span>l'embarqué & le web</span>
              </p>
              <p>Je suis <strong>Chayma Ben Slama</strong>, ingénieure en systèmes embarqués et objets connectés à l'ISI Ariana, diplômée d'une licence en ingénierie des systèmes informatiques.</p>
              <p>Je combine une double expertise en <strong>développement web full-stack</strong> et en <strong>systèmes embarqués</strong> — de la conception de cartes PCB aux applications React modernes.</p>
              <div style={{display:"flex",gap:"1rem",marginTop:"2rem",flexWrap:"wrap"}}>
                <a href="https://linkedin.com/in/chayma-benslama" target="_blank" rel="noreferrer" className="btn-outline-gold" style={{fontSize:"0.75rem",padding:"0.6rem 1.3rem"}}>LinkedIn →</a>
                <a href="https://github.com/Chaymaslama" target="_blank" rel="noreferrer" className="btn-outline-gold" style={{fontSize:"0.75rem",padding:"0.6rem 1.3rem"}}>GitHub →</a>
              </div>
              <div className="lang-list">
                <div className="lang-tit">LANGUES</div>
                {LANGS.map(l=>(
                  <div className="lang-row" key={l.name}>
                    <span className="lang-n">{l.name}</span>
                    <div className="lang-bar">
                      <motion.div className="lang-fill"
                        initial={{width:0}} whileInView={{width:`${l.pct}%`}}
                        viewport={{once:true}} transition={{duration:1,delay:0.2}}/>
                    </div>
                    <span className="lang-pct">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="info-grid">
              {[
                { icon:<MapPin size={13}/>, lbl:"Localisation", val:"Sousse, Tunisie" },
                { icon:<GraduationCap size={13}/>, lbl:"Formation", val:"Cycle Ingénieur" },
                { icon:<Brain size={13}/>, lbl:"Intérêts", val:"IoT · Embarqué · Web · Mobile" },
              ].map(c=>(
                <div key={c.lbl} className={`info-item${c.span?" span2":""}`}>
                  <div className="info-lbl">{c.icon}{c.lbl}</div>
                  <div className="info-val">{c.val}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EDUCATION
═══════════════════════════════════════════════════════════════ */
function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="edu-wrap">
        <FadeUp><div className="sec-eyebrow">PARCOURS ACADÉMIQUE</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">MA <span className="gold">FORMATION</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        {EDUCATION.map((e,i)=>(
          <FadeUp key={i} delay={i*0.1}>
            <div className="edu-card">
              <div className="edu-icon">{e.icon}</div>
              <div style={{flex:1}}>
                <div className="edu-deg">{e.degree}</div>
                <div className="edu-sch">{e.school}</div>
                <div className="edu-det">{e.detail}</div>
              </div>
              <div className="edu-year-pill"><Calendar size={11}/>{e.year}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════════════ */
function Experience() {
  return (
    <section id="experience">
      <div className="exp-wrap">
        <FadeUp><div className="sec-eyebrow">CAREER PATH</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">EXPÉRIENCE <span className="gold">PRO</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        <div className="timeline">
          {EXPERIENCES.map((e,i)=>(
            <FadeUp key={i} delay={i*0.1} style={{position:"relative"}}>
              <div className="t-item">
                <div className="t-dot"/>
                <div className="exp-card">
                  <div className="exp-top">
                    <div className="exp-co">{e.company}</div>
                    <div className="exp-date"><Calendar size={11}/>{e.date}</div>
                  </div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-desc">{e.desc}</div>
                  <div className="tags">{e.tech.map(t=><span className="tag" key={t}>{t}</span>)}</div>
                  <div className="exp-foot">
                    {e.github
                      ? <a href={e.github} className="exp-btn"><ExternalLink size={12}/>View Code</a>
                      : <span/>}
                    <span className="details-a">Détails <ArrowRight size={12}/></span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   IMAGE SLIDER
═══════════════════════════════════════════════════════════════ */
function ImageSlider({ images, bg, height = "420px" }) {
  const [idx, setIdx] = useState(0);
  const hasImages = images && images.length > 0;

  if (!hasImages) {
    return (
      <div className="proj-img-big" style={{background:bg,display:"flex",alignItems:"center",justifyContent:"center",height}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem",color:"rgba(212,175,55,0.3)"}}>
          <Image size={40}/>
          <span style={{fontSize:"0.72rem",letterSpacing:"0.1em"}}>APERÇU À VENIR</span>
        </div>
      </div>
    );
  }

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  return (
    <div
      className="proj-img-big"
      style={{
        position:"relative",
        overflow:"hidden",
        background:"#0a0a0a",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`screenshot ${idx+1}`}
          initial={{opacity:0, x:40}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-40}}
          transition={{duration:0.35}}
          style={{
            maxWidth:"100%",
            maxHeight:"100%",
            width:"auto",
            height:"auto",
            objectFit:"contain",
            display:"block",
          }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="slider-arrow left" aria-label="prev">
            <ChevronLeft size={18}/>
          </button>
          <button onClick={next} className="slider-arrow right" aria-label="next">
            <ChevronRight size={18}/>
          </button>
          <div className="slider-dots">
            {images.map((_,i)=>(
              <button key={i} className={`slider-dot ${i===idx?"active":""}`} onClick={()=>setIdx(i)}/>
            ))}
          </div>
          <div className="slider-counter">{idx+1} / {images.length}</div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════════ */
function Projects() {
  const [active, setActive] = useState("Tous");

  const list = active==="Tous" ? PROJECTS
    : PROJECTS.filter(p => p.filter === active);

  return (
    <section id="projects" className="proj-section">
      <div className="proj-wrap">
        <FadeUp><div className="sec-eyebrow">PORTFOLIO</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">MES <span className="gold">PROJETS</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="proj-filters">
            {FILTERS.map(f=>(
              <button key={f} className={`f-btn ${active===f?"active":""}`} onClick={()=>setActive(f)}>{f}</button>
            ))}
          </div>
        </FadeUp>

        <div className="proj-list">
          {list.map((p, i) => (
            <FadeUp key={p.name} delay={i*0.07}>
              <div className="proj-card-big">
                <ImageSlider images={p.images} bg={p.bg} height="480px"/>
                <div className="proj-card-big-body">
                  <div className="proj-card-big-left">
                    <div className="proj-cat">{p.cat}</div>
                    <h3 className="proj-name-big">{p.name}</h3>
                    <p className="proj-desc">{p.desc}</p>
                    <div className="tags" style={{marginBottom:"1.2rem"}}>
                      {p.tech.map(t=><span className="tag" key={t}>{t}</span>)}
                    </div>
                    <div style={{display:"flex",gap:"0.8rem",flexWrap:"wrap"}}>
                      {p.github
                        ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-gold" style={{fontSize:"0.75rem",padding:"0.6rem 1.3rem"}}><ExternalLink size={13}/> GitHub</a>
                        : <span style={{fontSize:"0.75rem",color:"var(--muted)",display:"flex",alignItems:"center",gap:"0.4rem"}}><ExternalLink size={13}/> Lien GitHub à venir</span>
                      }
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="btn-outline-gold" style={{fontSize:"0.75rem",padding:"0.6rem 1.3rem"}}><ExternalLink size={13}/> Demo live</a>
                      )}
                    </div>
                  </div>
                  <div className="proj-card-big-right">
                    <div className="proj-year-badge">{p.year}</div>
                    {p.images && p.images.length > 0 && (
                      <div className="proj-img-count"><Image size={14}/> {p.images.length} captures</div>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════════ */
function Skills() {
  return (
    <section id="skills">
      <div className="skills-wrap">
        <FadeUp><div className="sec-eyebrow">TECH STACK</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">COMPÉTENCES <span className="gold">TECHNIQUES</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        <div className="skills-grid">
          {SKILLS.map((s,i)=>(
            <FadeUp key={s.cat} delay={i*0.07}>
              <div className="sk-card">
                <div className="sk-cat">{s.icon}{s.cat.toUpperCase()}</div>
                <div className="pill-wrap">{s.pills.map(p=><span className="pill" key={p}>{p}</span>)}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CERT CARD with image slider
═══════════════════════════════════════════════════════════════ */
function CertCard({ c }) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const imgs = c.images || [];

  return (
    <>
      <div className={`cert-card ${c.featured ? "featured" : ""}`} style={{padding:0,overflow:"hidden",display:"flex",flexDirection:"column"}}>
        {/* Image zone */}
        {imgs.length > 0 && (
          <div style={{position:"relative",width:"100%",height:"180px",background:"#080808",cursor:"zoom-in",flexShrink:0}}
            onClick={()=>setLightbox(true)}>
            <img
              src={imgs[idx]}
              alt={`certif ${idx+1}`}
              style={{width:"100%",height:"100%",objectFit:"contain",display:"block"}}
            />
            {imgs.length > 1 && (
              <>
                <button
                  onClick={e=>{e.stopPropagation();setIdx(i=>(i-1+imgs.length)%imgs.length);}}
                  style={{position:"absolute",left:6,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}>
                  <ChevronLeft size={14}/>
                </button>
                <button
                  onClick={e=>{e.stopPropagation();setIdx(i=>(i+1)%imgs.length);}}
                  style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff"}}>
                  <ChevronRight size={14}/>
                </button>
                <div style={{position:"absolute",bottom:6,right:8,background:"rgba(0,0,0,0.6)",borderRadius:4,fontSize:"0.65rem",color:"#fff",padding:"2px 6px"}}>
                  {idx+1}/{imgs.length}
                </div>
              </>
            )}
            <div style={{position:"absolute",bottom:6,left:8,background:"rgba(0,0,0,0.5)",borderRadius:4,fontSize:"0.6rem",color:"var(--gold)",padding:"2px 6px",letterSpacing:"0.05em"}}>
              🔍 Cliquer pour agrandir
            </div>
          </div>
        )}
        {/* Text zone */}
        <div style={{padding:"1.1rem 1.2rem",flex:1,display:"flex",flexDirection:"column",gap:"0.35rem"}}>
          <div className="cert-icon">{c.icon}</div>
          <div className="cert-name">{c.name}</div>
          <div className="cert-iss">{c.issuer}</div>
          <div className="cert-date">{c.date}</div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={()=>setLightbox(false)}
            style={{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.92)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
            <motion.img
              initial={{scale:0.85}} animate={{scale:1}} exit={{scale:0.85}}
              src={imgs[idx]}
              alt="certificat"
              onClick={e=>e.stopPropagation()}
              style={{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:8,boxShadow:"0 0 60px rgba(212,175,55,0.2)"}}
            />
            {imgs.length > 1 && (
              <>
                <button onClick={e=>{e.stopPropagation();setIdx(i=>(i-1+imgs.length)%imgs.length);}}
                  style={{position:"fixed",left:16,top:"50%",transform:"translateY(-50%)",background:"rgba(212,175,55,0.15)",border:"1px solid var(--gold)",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--gold)"}}>
                  <ChevronLeft size={20}/>
                </button>
                <button onClick={e=>{e.stopPropagation();setIdx(i=>(i+1)%imgs.length);}}
                  style={{position:"fixed",right:16,top:"50%",transform:"translateY(-50%)",background:"rgba(212,175,55,0.15)",border:"1px solid var(--gold)",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--gold)"}}>
                  <ChevronRight size={20}/>
                </button>
              </>
            )}
            <button onClick={()=>setLightbox(false)}
              style={{position:"fixed",top:16,right:16,background:"rgba(212,175,55,0.15)",border:"1px solid var(--gold)",borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--gold)"}}>
              <X size={16}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════════════════════════════ */
function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <div className="cert-wrap">
        <FadeUp><div className="sec-eyebrow">CREDENTIALS</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">CERTIFICATIONS <span className="gold">&</span> ASSOCIATIONS</h2>
          <div className="sec-line"/>
        </FadeUp>
        <div className="cert-grid">
          {CERTS.map((c,i)=>(
            <FadeUp key={i} delay={i*0.1}>
              <CertCard c={c}/>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIE SOCIALE
═══════════════════════════════════════════════════════════════ */
function VieSociale() {
  const orgs = [
    {
      icon:"🦁", name:"Leo Club Sousse", year:"2025",
      role:"GROUPE MÉDIA & COLLECTE",
      desc:"Membre  du Leo Club Sousse, responsable du groupe média. Participation à la mission de collecte de fournitures scolaires pour les enfants dans le besoin. Une expérience enrichissante alliant communication et engagement social.",
      media: [
        { type:'image', src: leo2, label:'Événement collecte' },
        { type:'video', src: leo3, label:'Vidéo événement' },
      ]
    },
    {
      icon:"🤖", name:"FC Robot", year:"2023",
      role:"PROGRAMMATION MICROCONTRÔLEURS",
      desc:"Membre de FC Robot, club spécialisé dans la programmation de microcontrôleurs et la maîtrise des systèmes embarqués. Participation à des ateliers, compétitions et projets pratiques sur Arduino et ESP32.",
      media: [
        /*
        { type:'placeholder', label:'Atelier robotique', icon:<Image size={20}/> },
        { type:'placeholder', label:'Compétition', icon:<Image size={20}/> },
        { type:'placeholder', label:'Démo projet', icon:<Video size={20}/> },*/
      ]
    },
  ];

  return (
    <section id="social">
      <div className="social-wrap">
        <FadeUp><div className="sec-eyebrow">ENGAGEMENT</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big">VIE <span className="gold">SOCIALE</span></h2>
          <div className="sec-line"/>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="social-intro">
            Au-delà du code, je m'engage activement dans des associations qui ont un impact positif sur la communauté. Ces expériences m'ont permis de développer mes compétences en leadership, communication et travail d'équipe.
          </p>
        </FadeUp>
        <div className="social-orgs">
          {orgs.map((org,i)=>(
            <FadeUp key={org.name} delay={i*0.15}>
              <div className="org-block">
                <div className="org-header">
                  <span className="org-icon">{org.icon}</span>
                  <div style={{flex:1}}>
                    <div className="org-name">{org.name}</div>
                    <div className="org-role">{org.role}</div>
                  </div>
                  <span className="org-year">{org.year}</span>
                </div>
                <div className="org-body">
                  <p className="org-desc">{org.desc}</p>
                  <div className={`media-grid ${org.media.length===3?"cols3":"cols2"}`}>
                    {org.media.map((m,j)=>(
                      <div className="media-item" key={j}>
                        {m.type==='image' && m.src
                          ? <img src={m.src} alt={m.label} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                          : m.type==='video' && m.src
                          ? <video src={m.src} controls style={{width:"100%",height:"100%"}}/>
                          : (
                            <div className="media-placeholder">
                              {m.icon}
                              <span>{m.label}</span>
                              <span style={{fontSize:"0.62rem",color:"var(--gold)"}}>Ajouter média</span>
                            </div>
                          )
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({name:"",email:"",msg:""});
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrap">
        <FadeUp><div className="sec-eyebrow">GET IN TOUCH</div></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="sec-big" style={{textAlign:"center"}}>TRAVAILLONS <span className="gold">ENSEMBLE</span></h2>
          <div className="sec-line center"/>
        </FadeUp>
        <FadeUp delay={0.1}><p className="contact-sub">Une idée de projet ou une opportunité ? Je serai ravie d'en discuter avec vous.</p></FadeUp>
        <div className="contact-layout">
          <FadeUp delay={0.15}>
            <div className="c-infos">
              {[
                { icon:<Mail size={17}/>, lbl:"EMAIL", val:"chayma.bnslama@gmail.com", href:"mailto:chayma.bnslama@gmail.com" },
                { icon:<Phone size={17}/>, lbl:"TÉLÉPHONE", val:"+216 21 279 222", href:"tel:+21621279222" },
                { icon:<ExternalLink size={17}/>, lbl:"LINKEDIN", val:"https://www.linkedin.com/in/chayma-ben-slama/", href:"https://linkedin.com/in/chayma-benslama" },
                { icon:<ExternalLink size={17}/>, lbl:"GITHUB", val:"github.com/Chaymaslama", href:"https://github.com/Chaymaslama" },
              ].map(c=>(
                <a key={c.lbl} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} className="c-card">
                  <div className="c-ico">{c.icon}</div>
                  <div><div className="c-lbl">{c.lbl}</div><div className="c-val">{c.val}</div></div>
                </a>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="c-form">
              <div className="c-form-title">ENVOYER UN MESSAGE</div>
              <div className="fg">
                <label className="flbl">NOM</label>
                <input className="finput" placeholder="Votre nom" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
              </div>
              <div className="fg">
                <label className="flbl">EMAIL</label>
                <input className="finput" placeholder="votre@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
              </div>
              <div className="fg">
                <label className="flbl">MESSAGE</label>
                <textarea className="ftarea" placeholder="Parlez-moi de votre projet ou opportunité..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})}/>
              </div>
              <button className="btn-send">Envoyer le message</button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════════ */
export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen}/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Certifications/>
        <VieSociale/>
        <Contact/>
      </main>
      <footer className="footer">
        <div className="f-logo">Chayma Ben Slama</div>
        <div className="f-copy">© 2026 — Conçu avec React </div>
      </footer>
    </>
  );
}
