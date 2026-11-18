"use client";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

type TrackerWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
  dataLayer?: Array<Record<string, string>>;
};

const PLANNER_URL = "https://thisisabuzarnaqvi.gumroad.com/l/unigrade-degree-planner";
const DISMISS_KEY = "ugCtaDismissedAt";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

function trackPlannerClick(event: React.MouseEvent<HTMLAnchorElement>) {
  const link = event.currentTarget;
  const ctaLocation = link.dataset.cta;

  if (!ctaLocation) return;

  const trackerWindow = window as TrackerWindow;

  if (typeof trackerWindow.gtag === "function") {
    trackerWindow.gtag("event", "gumroad_buy_click", {
      cta_location: ctaLocation,
      link_url: link.href,
    });
    return;
  }

  if (Array.isArray(trackerWindow.dataLayer)) {
    trackerWindow.dataLayer.push({
      event: "gumroad_buy_click",
      cta_location: ctaLocation,
      link_url: link.href,
    });
  }
}

function PlannerButton({
  location,
  children,
  className = "",
}: {
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`ug-cta-btn ${className}`.trim()}
      href={PLANNER_URL}
      data-cta={location}
      onClick={trackPlannerClick}
    >
      {children}
    </a>
  );
}

export function PlannerResultCta() {
  return (
    <section className="ug-cta-box" aria-label="UniGrade Degree Planner">
      <p className="ug-cta-title">Your whole degree, planned — for $4.99</p>
      <p className="ug-cta-text">
        The complete UniGrade Degree Planner: live classification forecast, target calculator and study planner in one spreadsheet. Full planner, student price — nothing cut.
      </p>
      <ul className="ug-cta-list">
        <li>Live forecast — your year-weighted overall, forecast class and GPA estimate</li>
        <li>Target Calculator — the exact average you need on your remaining credits for a 40, 50, 60 or 70 overall</li>
        <li>Module Tracker for 30 modules, a 12-week Study Planner, and three scenarios side by side</li>
        <li>Excel + Google Sheets versions, one payment, yours to keep</li>
      </ul>
      <PlannerButton location="unigrade-result-box">Get the planner — $4.99</PlannerButton>
      <p className="ug-cta-launch">Launch offer: $3.99 with code LAUNCH for the first 2 weeks.</p>
      <p className="ug-cta-note">
        The planner uses the standard UK boundaries the UniGrade calculators use. Your university&apos;s own regulations — weighting, borderline and best-credit rules — decide your final classification.
      </p>
    </section>
  );
}

export function PlannerHomepageBanner() {
  return (
    <section className="ug-cta-banner" aria-label="UniGrade Degree Planner">
      <div className="ug-cta-banner-text">
        <p className="ug-cta-banner-title">Your whole degree, planned — for $4.99</p>
        <p className="ug-cta-banner-sub">
          The complete UniGrade Degree Planner: live classification forecast, target calculator and study planner in one spreadsheet. Full planner, student price — nothing cut.
        </p>
      </div>
      <PlannerButton className="ug-cta-banner-btn" location="unigrade-home-banner">
        Get the planner — $4.99
      </PlannerButton>
    </section>
  );
}

function isCalculatorPage(pathname: string) {
  return pathname === "/" || pathname.endsWith("-calculator");
}

function subscribeToDismissal() {
  return () => {};
}

function readStoredVisibility() {
  try {
    const dismissedAt = Number.parseInt(localStorage.getItem(DISMISS_KEY) ?? "0", 10);
    return !dismissedAt || Date.now() - dismissedAt >= DISMISS_DURATION_MS;
  } catch {
    return true;
  }
}

export function PlannerStickyBar() {
  const pathname = usePathname();
  const [dismissedThisVisit, setDismissedThisVisit] = useState(false);
  const storedVisibility = useSyncExternalStore(
    subscribeToDismissal,
    readStoredVisibility,
    () => false,
  );
  const visible = isCalculatorPage(pathname) && storedVisibility && !dismissedThisVisit;

  function dismiss() {
    setDismissedThisVisit(true);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // The bar should still dismiss if storage is unavailable.
    }
  }

  if (!visible) return null;

  return (
    <aside className="ug-cta-bar" aria-label="UniGrade Degree Planner offer">
      <span className="ug-cta-bar-text">
        <strong>UniGrade Degree Planner</strong> — know your forecast class and what you need on what&apos;s left.
      </span>
      <PlannerButton className="ug-cta-bar-btn" location="unigrade-sticky-bar">
        Get it — $4.99
      </PlannerButton>
      <button className="ug-cta-bar-close" type="button" aria-label="Dismiss" onClick={dismiss}>
        &times;
      </button>
    </aside>
  );
}
