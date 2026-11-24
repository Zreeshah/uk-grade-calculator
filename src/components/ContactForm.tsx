"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sent";

export default function ContactForm() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("Calculator feedback");
 const [message, setMessage] = useState("");
 const [status, setStatus] = useState<Status>("idle");

 const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const mailtoSubject = encodeURIComponent(`[UK Grade Calculator] ${subject}`);
  const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:contact@unigradecalculator.co.uk?subject=${mailtoSubject}&body=${mailtoBody}`;
  setStatus("sent");
 };

 if (status === "sent") {
  return (
   <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
    <h2 className="text-lg font-bold text-emerald-900">Your email app should now be open.</h2>
    <p className="mt-2 text-slate-600">
     We opened your email app with a pre-filled message to{" "}
     <a className="font-medium text-indigo-600 hover:underline" href="mailto:contact@unigradecalculator.co.uk">
      contact@unigradecalculator.co.uk
     </a>
     . Just press send in your email app — the site does not send the message itself. We aim to reply within 48 hours on working days.
    </p>
   </div>
  );
 }

 return (
  <form onSubmit={submit} className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Your name</span>
    <input className="input-field" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" autoComplete="name" />
   </label>
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Your email</span>
    <input className="input-field" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" />
   </label>
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Subject</span>
    <select className="input-field" value={subject} onChange={(event) => setSubject(event.target.value)}>
     <option>Calculator feedback</option>
     <option>Calculation issue</option>
     <option>University grading guidance</option>
     <option>Correction request</option>
     <option>Other</option>
    </select>
   </label>
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Message</span>
    <textarea className="input-field min-h-32" required value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Describe the issue, suggestion or university guidance that needs reviewing." />
   </label>
   <p className="text-sm text-slate-600">
    This form opens your own email app with a pre-filled message to contact@unigradecalculator.co.uk — the site does not send the message itself. We aim to reply within 48 hours on working days. Please do not include your student number, marks for other people, or other sensitive information.
   </p>
   <button type="submit" className="btn-primary">
    Open your email app
   </button>
  </form>
 );
}
