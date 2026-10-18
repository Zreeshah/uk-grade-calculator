"use client";

export default function PrivacySettingsButton() {
 return (
  <button
   type="button"
   onClick={() => window.dispatchEvent(new Event("uk-grade-calculator:open-consent"))}
   className="btn-secondary text-sm"
  >
   Manage privacy choices
  </button>
 );
}
