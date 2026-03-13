import { motion as Motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Eye, Zap, Users, Lightbulb, Globe, FileText,
  TrendingUp, Target, Award, ArrowRight
} from 'lucide-react';

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-host_grotesk text-platinum-500">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

/* ── Data ── */
const VALUES = [
  {
    icon: Eye,
    title: 'Visibility',
    text: 'End-to-end visibility across the entire trade lifecycle — from shipment booking to customs clearance to final delivery. Every stakeholder sees real-time status, documents, and milestones in one unified dashboard.',
    color: 'text-blue-400',
  },
  {
    icon: Zap,
    title: 'Automation',
    text: 'Eliminate manual data entry and repetitive paperwork. Navero auto-generates invoices, bills of lading, customs declarations, and compliance checks from structured shipment data — reducing errors by up to 90%.',
    color: 'text-yellow-400',
  },
  {
    icon: Users,
    title: 'Collaboration',
    text: 'A shared digital workspace where exporters, importers, brokers, banks, and customs authorities collaborate in real time. Role-based access ensures every participant sees exactly what they need.',
    color: 'text-green-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'AI-powered trade intelligence, predictive logistics analytics, and automated compliance screening. Navero continuously evolves with machine learning to anticipate disruptions and optimize trade routes.',
    color: 'text-purple-400',
  },
];

const MILESTONES = [
  {
    year: '2024',
    title: 'Prototype Launch',
    text: 'Core shipment workflow engine, document automation templates, and initial compliance screening module built and tested with early adopters.',
    icon: Target,
  },
  {
    year: '2025',
    title: 'Pilot Program',
    text: 'Live pilot with customs brokers and freight forwarders. Simulated payment workflows, escrow integration, and multi-stakeholder collaboration features deployed.',
    icon: TrendingUp,
  },
  {
    year: '2026',
    title: 'Marketplace & Finance',
    text: 'Trade partner marketplace launch, bank API integrations for letters of credit, invoice financing tools, and AI Trade Copilot assistant rollout.',
    icon: Globe,
  },
];

const TEAM = [
  {
    name: 'Nirmaldas Patel',
    role: 'Founder & CEO',
    initials: 'NP',
    bio: 'With deep expertise in trade operations and product strategy, Nirmaldas observed firsthand how companies manage multi-million-dollar international transactions using spreadsheets, PDFs, and email chains. This insight drove the creation of Navero — a platform designed to replace fragmented tools with unified digital infrastructure for global trade.',
  },
  {
    name: 'Ravi Patel',
    role: 'CTO',
    initials: 'RP',
    bio: 'Ravi brings extensive experience in distributed systems architecture and cloud infrastructure. He leads the engineering team in building Navero\'s modular microservices platform, ensuring scalability, security, and seamless integration with customs portals, banking networks, and logistics providers.',
  },
  {
    name: 'Marta Lopez',
    role: 'Head of Product',
    initials: 'ML',
    bio: 'Marta specializes in UX design and workflow optimization for complex enterprise systems. She translates the intricate processes of international trade into intuitive digital experiences, ensuring that every user — from small exporters to large freight forwarders — can navigate the platform with ease.',
  },
];

const STATS = [
  { value: 25, suffix: 'T+', label: 'Annual Global Trade Volume', prefix: '$' },
  { value: 200, suffix: '+', label: 'Data Fields Per Shipment', prefix: '' },
  { value: 40, suffix: '+', label: 'Documents Per Transaction', prefix: '' },
  { value: 30, suffix: '+', label: 'Organizations Per Shipment', prefix: '' },
];

/* ── Fade-in variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-space_indigo-200 pt-24 pb-20">
      {/* ── Hero Section ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-space_indigo-500 text-punch_red-500 text-sm font-medium mb-6">
            About Navero
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-host_grotesk text-platinum-500 leading-tight">
            Building the Operating System
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to- from-punch_red-500 to-flag_red-500">
              for Global Trade
            </span>
          </h1>
          <p className="mt-6 text-lg text-platinum-400 max-w-3xl mx-auto leading-relaxed font-neue_montreal">
            International trade is one of the most operationally complex
            activities in the global economy. A single cross-border shipment can
            involve 20–30 organizations, 40+ documents, and 200+ data fields
            across multiple regulatory agencies and logistics providers. Despite
            facilitating over $25 trillion in annual commerce, the
            infrastructure remains fragmented and heavily manual.
          </p>
          <p className="mt-4 text-lg text-platinum-300 max-w-3xl mx-auto leading-relaxed font-neue_montreal">
            Navero was created to change this — providing a centralized digital
            platform that integrates documentation, compliance, logistics
            coordination, financial settlement, and trade analytics into one
            intelligent workflow.
          </p>
        </Motion.div>

        {/* ── Global Trade Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {STATS.map((s, i) => (
            <Motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-space_indigo-300/50 border border-space_indigo-500">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-platinum-400 text-2xl font-bold">
                  {s.prefix}
                </span>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-platinum-400">{s.label}</p>
            </Motion.div>
          ))}
        </div>

        {/* ── Founding Story ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-punch_red-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-punch_red-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-host_grotesk text-platinum-500">
                Our Founding Story
              </h2>
            </div>
            <div className="p-8 rounded-2xl bg-linear-to-br from-space_indigo-300/80 to-space_indigo-400/40 border border-space_indigo-500">
              <p className="text-platinum-400 leading-relaxed text-lg font-neue_montreal">
                The founding thesis behind Navero is that global trade
                infrastructure has not evolved at the same pace as other
                critical economic systems. While industries such as finance and
                e-commerce have undergone massive digital transformation, the
                operational backbone of international trade still relies heavily
                on manual processes and fragmented systems.
              </p>
              <p className="mt-4 text-platinum-400 leading-relaxed text-lg font-neue_montreal">
                The founders observed that companies were managing
                multi-million-dollar international transactions using
                spreadsheets, PDFs, and email chains. Documentation errors,
                compliance complexity, limited operational visibility, and
                disconnected stakeholders were slowing down global trade flows.
              </p>
              <p className="mt-4 text-platinum-300 leading-relaxed text-lg font-neue_montreal">
                Navero was created to address this gap — building a unified
                digital infrastructure capable of modernizing trade operations
                at scale. The platform represents an effort to rethink how
                international trade systems should function in the digital era.
              </p>
            </div>
          </div>
        </Motion.div>

        {/* ── Core Values ── */}
        <div className="mb-24">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-host_grotesk text-platinum-500">
              Core Values
            </h2>
            <p className="mt-3 text-platinum-400 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </Motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-space_indigo-600 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-space_indigo-400/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <v.icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-platinum-500 font-host_grotesk">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-platinum-400 leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* ── Milestones Timeline ── */}
        <div className="mb-24">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-host_grotesk text-platinum-500">
              Our Journey
            </h2>
            <p className="mt-3 text-platinum-400 max-w-2xl mx-auto">
              Key milestones in Navero's development
            </p>
          </Motion.div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-punch_red-500 via-space_indigo-600 to-space_indigo-500" />

            {MILESTONES.map((m, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-space_indigo-300 border-2 border-punch_red-500 flex items-center justify-center">
                  <m.icon className="w-4 h-4 text-punch_red-500" />
                </div>

                <div className="p-6 rounded-2xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-punch_red-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-punch_red-500/20 text-punch_red-500 text-sm font-bold">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold text-platinum-500 font-host_grotesk">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-platinum-400 leading-relaxed">{m.text}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* ── Leadership Team ── */}
        <div className="mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-host_grotesk text-platinum-500">
              Leadership Team
            </h2>
            <p className="mt-3 text-platinum-400 max-w-2xl mx-auto">
              The people driving Navero's mission forward
            </p>
          </Motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((p, i) => (
              <Motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-space_indigo-300/50 border border-space_indigo-500 hover:border-punch_red-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-punch_red-500 to-flag_red-500 flex items-center justify-center text-white text-xl font-bold">
                    {p.initials}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-platinum-500 font-host_grotesk">
                      {p.name}
                    </div>
                    <div className="text-sm text-punch_red-500 font-medium">
                      {p.role}
                    </div>
                  </div>
                </div>
                <p className="text-platinum-400 leading-relaxed text-sm">
                  {p.bio}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 rounded-3xl bg-linear-to-br from-space_indigo-300/80 to-space_indigo-400/40 border border-space_indigo-500">
          <h2 className="text-3xl font-bold text-platinum-500 font-host_grotesk mb-4">
            Ready to Transform Your Trade Operations?
          </h2>
          <p className="text-platinum-400 mb-8 max-w-xl mx-auto">
            Join the growing network of exporters, importers, and logistics
            providers using Navero.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-punch_red-500 text-white font-medium hover:bg-punch_red-600 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
}