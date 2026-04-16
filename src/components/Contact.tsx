import React from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock, CalendarDays, CheckCircle2 } from "lucide-react";
import GradientButton from "@/components/ui/button-1";

const contactInfo = [
  {
    icon: MapPin,
    label: "Clinic Address",
    value: "1200 Medical Plaza, Suite 450\nCentral District, Metro City",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-1234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@drmontgomery.clinic",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
  },
];

const consultationTypes = [
  "Annual Check-up",
  "New Patient Evaluation",
  "Chronic Fatigue",
  "Digestive Issues",
  "Weight Management",
  "Preventative Wellness",
  "Other",
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const inputClass =
  "w-full bg-white border border-outline-variant/30 focus:border-primary focus:ring-0 focus:outline-none rounded-lg px-4 py-3 text-sm transition-colors duration-200";

const labelClass =
  "block text-[10px] font-bold uppercase tracking-widest text-secondary mb-2.5";

export const Contact = () => {
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-20">

        {/* Left — info */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block"
          >
            Book a Visit
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
          >
            Schedule Your<br />Consultation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-lg text-on-surface-variant mb-12 font-light leading-relaxed max-w-md"
          >
            Choose a date and time that works for you. Our team will confirm your appointment within a few hours.
          </motion.p>

          <div className="grid grid-cols-1 gap-5">
            {contactInfo.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-5"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,6,102,0.07)" }}
                >
                  <Icon className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm mb-0.5">{label}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — scheduling form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
          className="rounded-3xl p-10"
          style={{ background: "#f7f9fc", border: "1px solid rgba(0,6,102,0.07)" }}
        >
          {submitted ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-16 gap-6"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,6,102,0.08)" }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-primary mb-2">Appointment Requested!</h3>
                <p className="text-on-surface-variant font-light leading-relaxed max-w-xs mx-auto">
                  We'll confirm your slot within a few hours. Check your email for details.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-bold text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Book another appointment
              </button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,6,102,0.08)" }}
                >
                  <CalendarDays className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary tracking-tight">Schedule an Appointment</h3>
              </div>

              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input className={inputClass} placeholder="John" type="text" required />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input className={inputClass} placeholder="Doe" type="text" required />
                  </div>
                </div>

                {/* Contact row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input className={inputClass} placeholder="+1 (555) 000-0000" type="tel" required />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input className={inputClass} placeholder="john@example.com" type="email" required />
                  </div>
                </div>

                {/* Consultation type */}
                <div>
                  <label className={labelClass}>Type of Consultation</label>
                  <select className={inputClass + " appearance-none cursor-pointer"} required>
                    <option value="">Select a reason for visit</option>
                    {consultationTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input
                    className={inputClass + " cursor-pointer"}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                {/* Time slots */}
                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className="py-2.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 border"
                        style={
                          selectedTime === slot
                            ? {
                                background: "#000666",
                                color: "#ffffff",
                                borderColor: "#000666",
                              }
                            : {
                                background: "#ffffff",
                                color: "#454652",
                                borderColor: "rgba(0,6,102,0.15)",
                              }
                        }
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>Notes <span className="normal-case font-normal tracking-normal">(optional)</span></label>
                  <textarea
                    className={inputClass + " resize-none"}
                    placeholder="Briefly describe your main concern or any relevant medical history..."
                    rows={3}
                  />
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <GradientButton
                    dark
                    height="56px"
                    className="w-full"
                    onClick={() => formRef.current?.requestSubmit()}
                  >
                    <span className="text-[1rem]">Confirm Appointment</span>
                  </GradientButton>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
