"use client";

import { useEffect, useState } from "react";

type ConsentPreferences = {
 analytics: boolean;
 advertising: boolean;
};

const STORAGE_KEY = "uk-grade-calculator-consent-v1";
const EVENT_NAME = "uk-grade-calculator:open-consent";

declare global {
 interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
 }
}

function readPreferences(): ConsentPreferences | null {
 try {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  const parsed = JSON.parse(stored) as Partial<ConsentPreferences>;
  if (typeof parsed.analytics !== "boolean" || typeof parsed.advertising !== "boolean") return null;
  return { analytics: parsed.analytics, advertising: parsed.advertising };
 } catch {
  return null;
 }
}

function loadScript(id: string, src: string, onLoad?: () => void) {
 if (document.getElementById(id)) {
  onLoad?.();
  return;
 }
 const script = document.createElement("script");
 script.id = id;
 script.async = true;
 script.src = src;
 script.onload = onLoad ?? null;
 document.head.appendChild(script);
}

function applyPreferences(preferences: ConsentPreferences) {
 if (preferences.analytics) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("consent", "default", {
   analytics_storage: "granted",
   ad_storage: preferences.advertising ? "granted" : "denied",
  });
  loadScript("ga4-script", "https://www.googletagmanager.com/gtag/js?id=G-CQY69SX742", () => {
   window.gtag?.("js", new Date());
   window.gtag?.("config", "G-CQY69SX742");
  });
 }

 if (preferences.advertising) {
  loadScript("adsense-script", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6218065184548996");
 }
}

export default function ConsentManager() {
 const [preferences, setPreferences] = useState<ConsentPreferences>({ analytics: false, advertising: false });
 const [savedPreferences, setSavedPreferences] = useState<ConsentPreferences | null>(null);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const timer = window.setTimeout(() => {
   const saved = readPreferences();
   setSavedPreferences(saved);
   if (saved) {
    setPreferences(saved);
    applyPreferences(saved);
   } else {
    setIsOpen(true);
   }
  }, 0);

  return () => window.clearTimeout(timer);
 }, []);

 useEffect(() => {
  const openPreferences = () => setIsOpen(true);
  window.addEventListener(EVENT_NAME, openPreferences);
  return () => window.removeEventListener(EVENT_NAME, openPreferences);
 }, []);

 const savePreferences = (next: ConsentPreferences) => {
  const revoked = Boolean(
   savedPreferences &&
   ((savedPreferences.analytics && !next.analytics) || (savedPreferences.advertising && !next.advertising))
  );

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  setSavedPreferences(next);
  setPreferences(next);
  setIsOpen(false);

  if (revoked) {
   window.location.reload();
   return;
  }

  applyPreferences(next);
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-x-0 bottom-0 z-[100] p-4" role="dialog" aria-modal="true" aria-labelledby="consent-title">
   <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
    <h2 id="consent-title" className="text-lg font-bold text-slate-900">Your privacy choices</h2>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">
     Grade calculations stay in your browser. With your permission, we use analytics to understand site use and advertising technology to fund the free tools. You can accept, reject non-essential technologies, or choose each option.
    </p>

    <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4">
     <label className="flex items-start gap-3">
      <input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
      <span><strong className="text-sm text-slate-900">Analytics</strong><span className="mt-0.5 block text-sm text-slate-600">Helps us measure which tools and guides are useful.</span></span>
     </label>
     <label className="flex items-start gap-3">
      <input type="checkbox" checked={preferences.advertising} onChange={(event) => setPreferences((current) => ({ ...current, advertising: event.target.checked }))} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
      <span><strong className="text-sm text-slate-900">Advertising</strong><span className="mt-0.5 block text-sm text-slate-600">Allows advertising technology that supports the free calculators.</span></span>
     </label>
    </div>

    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
     <button type="button" onClick={() => savePreferences({ analytics: false, advertising: false })} className="btn-secondary text-sm">Reject non-essential</button>
     <button type="button" onClick={() => savePreferences(preferences)} className="btn-secondary text-sm">Save choices</button>
     <button type="button" onClick={() => savePreferences({ analytics: true, advertising: true })} className="btn-primary text-sm">Accept all</button>
    </div>
   </div>
  </div>
 );
}
