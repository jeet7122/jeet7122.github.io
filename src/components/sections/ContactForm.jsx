import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORKER_URL = "https://contact-form-worker.jeetdev.workers.dev";

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function clamp(str, max) {
    const s = (str ?? "").toString();
    return s.length > max ? s.slice(0, max) : s;
}

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "Portfolio Contact",
        message: "",
    });

    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const errors = useMemo(() => {
        const e = {};
        const name = form.name.trim();
        const email = form.email.trim();
        const subject = form.subject.trim();
        const message = form.message.trim();

        if (name.length < 2) e.name = "Please enter your name (at least 2 characters).";
        if (!isEmail(email)) e.email = "Please enter a valid email address.";
        if (subject.length < 3) e.subject = "Subject should be at least 3 characters.";
        if (message.length < 10) e.message = "Message should be at least 10 characters.";
        if (message.length > 2000) e.message = "Message must be under 2000 characters.";

        return e;
    }, [form]);

    const canSubmit = Object.keys(errors).length === 0 && status !== "sending";

    const onChange = (key) => (e) => {
        const value = e.target.value;
        setForm((p) => ({
            ...p,
            [key]:
                key === "message"
                    ? clamp(value, 2000)
                    : key === "subject"
                        ? clamp(value, 120)
                        : clamp(value, 80),
        }));
    };

    const onBlur = (key) => () => setTouched((p) => ({ ...p, [key]: true }));

    async function handleSubmit(e) {
        e.preventDefault();
        setTouched({ name: true, email: true, subject: true, message: true });

        if (!canSubmit) return;

        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch(WORKER_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    subject: form.subject.trim(),
                    message: form.message.trim(),
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data?.error || "Failed to submit. Please try again.");
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "Portfolio Contact", message: "" });

            // Auto-reset success state after a bit
            setTimeout(() => setStatus("idle"), 2500);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err?.message || "Something went wrong.");
        }
    }

    return (
        <motion.section
            className="w-full max-w-2xl mx-auto rounded-xl hover:shadow-xl transition duration-200 ease-in-out"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="bg-white text-gray-900 border border-gray-200 shadow-lg rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold">
                            Contact Me
                        </h2>
                        <p className="mt-1 text-sm">
                            Send a message - it will land directly in my Discord.
                        </p>
                    </div>

                    <motion.div
                        className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-white/10 bg-white/5 text-black/70"
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Replies within 24hr
                    </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-green-500/20 p-4 rounded-lg">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                            label="Name"
                            value={form.name}
                            onChange={onChange("name")}
                            onBlur={onBlur("name")}
                            placeholder="Your name"
                            error={touched.name ? errors.name : ""}
                            disabled={status === "sending"}
                        />

                        <Field
                            label="Email"
                            value={form.email}
                            onChange={onChange("email")}
                            onBlur={onBlur("email")}
                            placeholder="you@example.com"
                            error={touched.email ? errors.email : ""}
                            disabled={status === "sending"}
                            inputMode="email"
                        />
                    </div>

                    <Field
                        label="Subject"
                        value={form.subject}
                        onChange={onChange("subject")}
                        onBlur={onBlur("subject")}
                        placeholder="What’s this about?"
                        error={touched.subject ? errors.subject : ""}
                        disabled={status === "sending"}
                    />

                    {/* Message */}
                    <div>
                        <label className="text-sm">Message</label>
                        <motion.div
                            className={[
                                "mt-2 rounded-xl border bg-black/20",
                                touched.message && errors.message
                                    ? "border-red-400/60"
                                    : "border-white/10",
                            ].join(" ")}
                            whileFocusWithin={{ scale: 1.01 }}
                            transition={{ duration: 0.15 }}
                        >
              <textarea
                  className="w-full min-h-[140px] resize-y bg-transparent px-4 py-3 outline-none placeholder:text-gray-900 bg-white/5"
                  value={form.message}
                  onChange={onChange("message")}
                  onBlur={onBlur("message")}
                  placeholder="Write your message here…"
                  disabled={status === "sending"}
              />
                        </motion.div>

                        <div className="mt-2 flex items-center justify-between">
                            <AnimatePresence>
                                {touched.message && errors.message ? (
                                    <motion.p
                                        className="text-xs text-red-300"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                    >
                                        {errors.message}
                                    </motion.p>
                                ) : (
                                    <span />
                                )}
                            </AnimatePresence>

                            <p className="text-xs text-white/50">
                                {form.message.length}/2000
                            </p>
                        </div>
                    </div>

                    {/* Status Banner */}
                    <AnimatePresence>
                        {status === "success" && (
                            <Banner tone="success" text="✅ Message sent! I’ll get back to you soon." />
                        )}
                        {status === "error" && (
                            <Banner tone="error" text={`❌ ${errorMsg || "Something went wrong."}`} />
                        )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="pt-1 flex items-center justify-between gap-3">
                        <motion.button
                            type="submit"
                            disabled={!canSubmit}
                            className={[
                                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium",
                                "transition border",
                                canSubmit
                                    ? "bg-emerald-500 hover:bg-emerald-400 text-black border-white/10"
                                    : "bg-gray-700 text-white/60 border-white/10 cursor-not-allowed",
                            ].join(" ")}
                            whileHover={canSubmit ? { y: -1 } : {}}
                            whileTap={canSubmit ? { scale: 0.98 } : {}}
                        >
                            {status === "sending" ? (
                                <>
                                    <Spinner />
                                    Sending…
                                </>
                            ) : (
                                "Send message"
                            )}
                        </motion.button>

                        <p className="text-xs text-emerald-500">
                            Or email: <span className="text-emerald-700">jeetthakkar2612@gmail.com</span>
                        </p>
                    </div>
                </form>
            </div>
        </motion.section>
    );
}

function Field({
                   label,
                   value,
                   onChange,
                   onBlur,
                   placeholder,
                   error,
                   disabled,
                   inputMode,
               }) {
    return (
        <div>
            <label className="text-sm">{label}</label>
            <motion.div
                className={[
                    "mt-2 rounded-xl border bg-black/20",
                    error ? "border-red-400/60" : "border-white/10",
                ].join(" ")}
                whileFocusWithin={{ scale: 1.01 }}
                transition={{ duration: 0.15 }}
            >
                <input
                    className="w-full bg-transparent px-4 py-3 outline-none placeholder:text-gray-900 bg-white/5"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    inputMode={inputMode}
                />
            </motion.div>

            <AnimatePresence>
                {error ? (
                    <motion.p
                        className="mt-2 text-xs text-red-300"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                    >
                        {error}
                    </motion.p>
                ) : null}
            </AnimatePresence>
        </div>
    );
}

function Banner({ tone, text }) {
    const base =
        "rounded-xl px-4 py-3 text-sm border backdrop-blur";
    const styles =
        tone === "success"
            ? "bg-emerald-500/10 border-emerald-400/30 text-green-400"
            : "bg-red-500/10 border-red-400/30 text-red-200";

    return (
        <motion.div
            className={`${base} ${styles}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
        >
            {text}
        </motion.div>
    );
}

function Spinner() {
    return (
        <motion.span
            className="inline-block h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        />
    );
}