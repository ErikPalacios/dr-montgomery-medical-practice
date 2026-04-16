import { motion } from "motion/react";
import { CheckCircle2, GraduationCap, Award } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Johns Hopkins School of Medicine",
    sub: "M.D. with Honors",
  },
  {
    icon: Award,
    title: "Board Certified — Internal Medicine",
    sub: "American Board of Internal Medicine",
  },
];

const highlights = [
  "Holistic recovery & preventative longevity",
  "Evidence-based diagnostic protocols",
  "Patient education & lifestyle coaching",
  "Seamless specialist coordination",
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-2 md:order-1 relative"
        >
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-3/4 h-3/4 bg-primary/5 rounded-3xl -z-10" />
            <img
              className="relative z-10 rounded-2xl w-full h-[580px] object-cover editorial-shadow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBumfsAOP5In5fTLLDrwMUiHXLcouYz-3xJ-uGcYYnqAG3bO9CFASVQAKw5IBeKYp3yMd5ttruz248v-xaxyO6u2CKPGm32RrAhsV-kn62zg0zUHQ2PBaB8nodd5XL3y5R0Mata0UPBdGudtaNtix914RF7CLyOCa4kMZzcml4Jay04a4BGLdXhJtpuocrtMhqvQD_GBdkbMnL6qtN2_21RW0coGOZeFkLIRrgQi_-KHtMPSc5eoyhPuDEqS5_hSYfq7g0bRsZCKew"
              alt="Dr. Montgomery at work"
              referrerPolicy="no-referrer"
            />

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-primary text-white rounded-2xl px-6 py-5 text-center z-20"
              style={{ boxShadow: "0 20px 48px -8px rgba(0,6,102,0.45)" }}
            >
              <p className="text-5xl font-extrabold leading-none">15+</p>
              <p className="text-white/65 text-[10px] font-bold uppercase tracking-widest mt-1.5 leading-snug">
                Years of<br />Excellence
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text column */}
        <div className="order-1 md:order-2 md:pl-6">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block"
          >
            Meet the Practitioner
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight leading-tight"
          >
            Dr. Harper<br />Montgomery
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5 text-lg text-on-surface-variant leading-relaxed font-light mb-10"
          >
            <p>
              With over 15 years of clinical excellence, Dr. Montgomery has dedicated his career to bridging the gap between rigorous medical science and compassionate, patient-centered care.
            </p>
            <p>
              His practice is built on the philosophy that true health is not merely the absence of disease, but the optimization of every biological system — for a longer, better life.
            </p>
          </motion.div>

          {/* Credential cards — staggered */}
          <div className="space-y-3 mb-10">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl"
                style={{ border: "1px solid rgba(0,6,102,0.08)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cred.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{cred.title}</p>
                  <p className="text-secondary text-xs mt-0.5">{cred.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights — staggered */}
          <div className="grid grid-cols-1 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.45, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-on-surface-variant text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
