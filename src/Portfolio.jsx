import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
  Server,
  Boxes,
  ShieldCheck,
  Cloud,
  Terminal,
  Cpu,
  LineChart,
  Download,
} from "lucide-react";

/**
 * DevOps + Cloud Engineer Portfolio
 * - Single-file React component
 * - TailwindCSS classes
 * - Modern, clean, recruiter-friendly
 */

const PROFILE = {
  name: "Abdul Wasay",
  role: "DevOps Engineer",
  location: "Karachi, Pakistan",
  summary:
    "DevOps & Cloud Engineer with expertise in designing scalable, secure, and cost-efficient infrastructures. Experienced in Kubernetes, GitOps, CI/CD automation, and cloud-native observability. Passionate about building resilient multi-region architectures and driving DevSecOps best practices for global teams.",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-handle/",
    email: "mailto:you@example.com",
    website: "https://your-domain.com",
  },
  resumeUrl: "https://your-domain.com/resume.pdf",
};

const SKILLS = [
  { icon: <Cloud className="w-5 h-5" />, label: "AWS (EKS, RDS, S3, Route53)" },
  { icon: <Boxes className="w-5 h-5" />, label: "Kubernetes, Karpenter, Helm, ArgoCD" },
  { icon: <Server className="w-5 h-5" />, label: "Linux, Docker, Nginx, HAProxy" },
  { icon: <Terminal className="w-5 h-5" />, label: "Terraform, Ansible, GitHub Actions" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "DevSecOps: Trivy, SonarQube, Vault" },
  { icon: <Cpu className="w-5 h-5" />, label: "MongoDB, PostgreSQL, Redis, ClickHouse" },
  { icon: <LineChart className="w-5 h-5" />, label: "Observability: Prometheus, Grafana, Loki" },
];

const PROJECTS = [
  {
    title: "Multi-Region AWS DR with Terraform",
    description:
      "Automated active-passive DR across two AWS regions using Route53 Failover, RDS cross-region replicas, S3 replication, and health-check Lambdas. Includes chaos testing and RTO/RPO runbooks.",
    tags: ["Terraform", "Route53", "RDS", "S3", "Lambda"],
    github: "https://github.com/your-username/aws-dr-terraform",
    demo: "https://your-demo-link.example.com",
  },
  {
    title: "Kubernetes GitOps Platform (EKS + ArgoCD)",
    description:
      "Production-grade EKS cluster with ArgoCD, HPA/Karpenter autoscaling, cert-manager, and an Istio ingress. Includes Prometheus/Grafana stack and blue/green deploy pipeline.",
    tags: ["EKS", "ArgoCD", "Karpenter", "Prometheus", "Grafana"],
    github: "https://github.com/your-username/gitops-eks-platform",
    demo: "https://your-demo-link.example.com",
  },
  {
    title: "Secure CI/CD with Trivy + SonarQube",
    description:
      "GitHub Actions pipeline building Docker images, scanning with Trivy, code quality via SonarQube, and deploying to EKS via Helm. Signed images with Cosign.",
    tags: ["GitHub Actions", "Trivy", "SonarQube", "Helm", "Cosign"],
    github: "https://github.com/your-username/secure-cicd-pipeline",
    demo: "https://your-demo-link.example.com",
  },
  {
    title: "FinOps Cost Insights",
    description:
      "Athena/Glue pipeline to analyze CUR, with QuickSight dashboards and automated idle resource remediation via Step Functions. 25% monthly cost reduction on test workloads.",
    tags: ["FinOps", "Athena", "QuickSight", "Step Functions"],
    github: "https://github.com/your-username/finops-insights",
    demo: "https://your-demo-link.example.com",
  },
];

const EXPERIENCE = [
  {
    company: "Eocean",
    role: "DevOps & Cloud Engineer",
    period: "2021 — Present",
    bullets: [
      "Designed DR for messaging platform: Route53 failover, RDS replicas, S3 replication.",
      "Built GitOps platform on EKS with ArgoCD managing 20+ microservices.",
      "Implemented observability (Prometheus/Grafana) and SLO-based alerts reducing MTTR by 40%.",
      "Drove security baselines: container scanning, secrets management, least-privilege IAM.",
    ],
  },
  {
    company: "Freelance",
    role: "Cloud / DevOps Consultant",
    period: "2019 — 2021",
    bullets: [
      "Containerized monoliths, introduced CI/CD, improved deployment lead time 10×.",
      "Cost audits and right-sizing across AWS/GCP environments.",
    ],
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full border border-white/20 bg-white/5">
      {children}
    </span>
  );
}

export default function Portfolio() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 backdrop-blur bg-slate-900/60 border-b border-white/10 z-20">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* (Name removed from navbar) */}
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">
              Services
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#experience" className="hover:opacity-80">
              Experience
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </div>

          <div className="flex gap-3">
            <a href={PROFILE.links.github} aria-label="GitHub" className="hover:opacity-80">
              <Github className="w-5 h-5" />
            </a>
            <a href={PROFILE.links.linkedin} aria-label="LinkedIn" className="hover:opacity-80">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={PROFILE.links.website} aria-label="Website" className="hover:opacity-80">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" title="">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-xl sm:text-2xl lg:text-3xl text-emerald-400 font-semibold">
              {PROFILE.role}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 font-medium shadow hover:shadow-lg transition"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/20 hover:bg-white/10"
              >
                View Projects
              </a>
            </div>

            <div className="mt-6 flex gap-4 text-sm text-slate-300">
              <span>{PROFILE.location}</span>
              <span className="opacity-50">•</span>
              <span>Open to Remote Roles (DevOps/Cloud)</span>
            </div>
          </motion.div>

          {/* Right column – What I Bring (animated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-cyan-400/30 to-blue-400/30">
              <div className="rounded-3xl p-6 bg-slate-900/80 shadow-xl">
                <h3 className="text-lg font-medium mb-4">What I Bring</h3>

                <ul className="space-y-3 text-slate-300">
                  {[
                    { icon: <ShieldCheck className="w-5 h-5 mt-0.5" />, text: "End-to-End Cloud Infrastructure on AWS, GCP & Azure" },
                    { icon: <Boxes className="w-5 h-5 mt-0.5" />, text: "Kubernetes Platforms with GitOps (ArgoCD, Helm, Karpenter)" },
                    { icon: <Terminal className="w-5 h-5 mt-0.5" />, text: "Automated CI/CD Pipelines (GitHub Actions, Terraform, Ansible)" },
                    { icon: <LineChart className="w-5 h-5 mt-0.5" />, text: "Observability with Prometheus, Grafana, Loki & SLO Dashboards" },
                    { icon: <Cloud className="w-5 h-5 mt-0.5" />, text: "Multi-Region Disaster Recovery & High Availability Architectures" },
                    { icon: <Cpu className="w-5 h-5 mt-0.5" />, text: "Security & Compliance (DevSecOps, Trivy, Vault, IAM Hardening)" },
                    { icon: <ExternalLink className="w-5 h-5 mt-0.5" />, text: "FinOps & Cost Optimization (AWS CUR, QuickSight, Step Functions)" },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20% 0px" }}
                      transition={{ duration: 0.35, delay: i * 0.12 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <span className="rounded-lg p-1.5 bg-white/10">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services I Offer */}
      <Section id="services" title="Services I Offer">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Cloud className="w-6 h-6" />,
              title: "Cloud Infrastructure",
              desc: "Design & manage scalable, secure, and cost-optimized infrastructures on AWS, GCP & Azure.",
            },
            {
              icon: <Boxes className="w-6 h-6" />,
              title: "Kubernetes Platforms",
              desc: "Production-ready Kubernetes clusters with GitOps, ArgoCD, Helm & Karpenter autoscaling.",
            },
            {
              icon: <Terminal className="w-6 h-6" />,
              title: "CI/CD Automation",
              desc: "End-to-end automation using GitHub Actions, Terraform & Ansible for faster deployments.",
            },
            {
              icon: <LineChart className="w-6 h-6" />,
              title: "Monitoring & Observability",
              desc: "Full-stack observability with Prometheus, Grafana, Loki & SLO-driven dashboards.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Security & Compliance",
              desc: "DevSecOps pipelines, vulnerability scanning (Trivy, SonarQube) & IAM hardening.",
            },
            {
              icon: <ExternalLink className="w-6 h-6" />,
              title: "FinOps & Cost Optimization",
              desc: "Cloud cost analysis with AWS CUR, QuickSight dashboards & automated optimizations.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">{service.icon}</div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
              </div>
              <p className="text-sm text-slate-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SKILLS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="shrink-0 rounded-xl p-2 bg-white/10">{s.icon}</div>
              <span className="text-sm">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <Chip key={j}>{t}</Chip>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={p.github}
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:no-underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:no-underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live/Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid gap-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {e.role} • {e.company}
                </h3>
                <span className="text-sm text-slate-300">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-slate-300">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium">Let’s work together</h3>
            <p className="mt-2 text-sm text-slate-300">
              I’m open to remote roles (DevOps/Cloud/SRE). Send me an email and I’ll reply within 24 hours.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={PROFILE.links.email}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 font-medium shadow hover:shadow-lg transition"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href={PROFILE.links.linkedin}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/20 hover:bg:white/10"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg:white/5 p-6">
            <h3 className="font-medium">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Timezone: PKT (UTC+5)</li>
              <li>Industries: CPaaS, FinTech, SaaS</li>
              <li>Focus: HA/DR, GitOps, Observability, FinOps</li>
            </ul>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-slate-400">
        © {year} {PROFILE.name}. Built with ♥️ using React & Tailwind.
      </footer>
    </div>
  );
}
