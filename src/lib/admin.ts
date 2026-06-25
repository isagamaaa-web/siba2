// Hidden admin entry — typed into the booking form to reveal the panel.
// These exact values must match for the admin panel to unlock.
export const ADMIN_TRIGGER = {
  name: "Siba Dental",
  phone: "0934509999",
  email: "Siba@admin.com",
  service: "Cosmetic Dentistry",
  date: "2002-09-22",
  notes: "I am here open",
} as const;

export const ADMIN_PASS_KEY = "siba-admin-pass-v1";

// The shared secret passed to the server fn to authorize admin reads.
// Server fn handler bodies are stripped from the client bundle, so this
// constant is not shipped to browsers.
export const ADMIN_PASS = "siba::cosmetic::0934509999::admin::2002-09-22";

export function matchesAdminTrigger(form: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  notes: string;
}) {
  const norm = (s: string) => s.trim().toLowerCase();
  return (
    norm(form.name) === norm(ADMIN_TRIGGER.name) &&
    norm(form.phone) === norm(ADMIN_TRIGGER.phone) &&
    norm(form.email) === norm(ADMIN_TRIGGER.email) &&
    norm(form.service) === norm(ADMIN_TRIGGER.service) &&
    form.date === ADMIN_TRIGGER.date &&
    norm(form.notes) === norm(ADMIN_TRIGGER.notes)
  );
}
