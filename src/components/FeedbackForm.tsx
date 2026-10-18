"use client";

import { FormEvent, useState } from "react";

export default function FeedbackForm() {
 const [topic, setTopic] = useState("");
 const [message, setMessage] = useState("");

 const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const title = topic.trim() || "Feedback for UK Grade Calculator";
  const body = `${message.trim()}\n\n---\nPage: ${window.location.href}`;
  const url = new URL("https://github.com/Zreeshah/uk-grade-calculator/issues/new");
  url.searchParams.set("title", title);
  url.searchParams.set("body", body);
  window.location.assign(url.toString());
 };

 return (
  <form onSubmit={submit} className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Topic</span>
    <input className="input-field" required value={topic} onChange={(event) => setTopic(event.target.value)} placeholder="For example: calculation issue on the weighted calculator" />
   </label>
   <label className="block">
    <span className="mb-1.5 block text-sm font-medium text-slate-700">Message</span>
    <textarea className="input-field min-h-32" required value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Describe the issue, suggestion or university guidance that needs reviewing." />
   </label>
   <p className="text-sm text-slate-600">This opens a public GitHub issue. Do not include your name, student number, marks, or other personal information.</p>
   <button type="submit" className="btn-primary">Continue to public feedback</button>
  </form>
 );
}
