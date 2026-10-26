// Site-wide settings that are the same in every language.

export const contact = {
  whatsappNumber: '6285117732474',
  whatsappDisplay: '0851-1773-2474',
  email: 'hi.kreasi.digital@gmail.com',
  instagram: null as string | null, // e.g. 'https://instagram.com/kreasidigitalhub' once the account exists
};

export const flags = {
  // Promo strip: set `promo` in content.ts (per language) and turn this on once the price and end date are final.
  showPromo: false,
  // Testimonials: the current entries are placeholders. Replace them with real customer stories
  // (collected with consent) before turning this on — fictional reviews must not go live.
  showTestimonials: false,
  // URL of the login/dashboard app. Leave null until the app exists; the "Masuk" button stays inactive until then.
  loginUrl: null as string | null,
};

// Until the Supabase backend is ready, the Custom form opens the visitor's email app
// with a pre-filled message to contact.email.
export interface Mail { subject: string; body: string }
export function mailLink(m: Mail): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(m.body)}`;
}

export function waLink(text: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Icon paths (24x24, stroke). Lucide-style line icons.
export const icons: Record<string, string> = {
  check: 'M5 12l5 5 9-10',
  flag: 'M5 21V4 M5 4h12l-2 4 2 4H5',
  search: 'M11 18a7 7 0 1 0 0-14a7 7 0 1 0 0 14Z M21 21l-5-5',
  calendar: 'M4 5h16v15H4z M4 10h16 M8 3v4 M16 3v4',
  users: 'M9 11a4 4 0 1 0 0-8a4 4 0 1 0 0 8Z M2 21c0-4 3-6 7-6s7 2 7 6 M17 11a3 3 0 1 0 0-6 M22 21c0-3-2-5-5-5',
  chat: 'M4 4h16v12H8l-4 4z M8 9h8 M8 12h5',
  ticket: 'M3 5h18v4a3 3 0 0 0 0 6v4H3v-4a3 3 0 0 0 0-6z M14 5v14',
  receipt: 'M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z M9 8h6 M9 12h6',
  box: 'M3 7l9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10',
  wrench: 'M14 6a4 4 0 0 0 5 5l-8 8a2 2 0 0 1-3-3l8-8a4 4 0 0 1-2-2Z',
  brief: 'M3 7h18v13H3z M8 7V4h8v3 M3 12h18',
  cap: 'M2 9l10-5 10 5-10 5z M6 11v5c3 2 9 2 12 0v-5',
  grid: 'M3 3h8v8H3z M13 3h8v5h-8z M13 10h8v11h-8z M3 13h8v8H3z',
  cart: 'M3 4h2l2 11h11l2-8H6 M9 20h.01 M17 20h.01',
  star: 'M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8l5.5-.8z',
  quote: 'M4 5h16v11H9l-5 4z M8 9h8',
  chart: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
  book: 'M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6 M20 4v14h-6',
  donate: 'M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11Z M12 8v6 M9 11h6',
  bank: 'M3 10l9-6 9 6 M5 10v8 M10 10v8 M14 10v8 M19 10v8 M3 21h18',
  globe: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z M2 12h20 M12 2c3 3 3 17 0 20 M12 2c-3 3-3 17 0 20',
  video: 'M3 6h12v12H3z M15 10l6-3v10l-6-3',
  mail: 'M3 5h18v14H3z M3 6l9 7 9-7',
  whatsapp: 'M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6z M9 9c0 3 3 6 6 6l1.5-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z',
};
