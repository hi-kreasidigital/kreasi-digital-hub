// Catalog data shared by both languages. Text lives in content.ts.

export type Lang = 'id' | 'en';

export type CategoryId = 'konten' | 'pelanggan' | 'ops' | 'transaksi' | 'ulasan' | 'laporan';

export interface Tool {
  id: string;
  cat: CategoryId;
  icon: string;
  live: boolean; // already usable today
}

export const categoryOrder: CategoryId[] = ['konten', 'pelanggan', 'ops', 'transaksi', 'ulasan', 'laporan'];

export const tools: Tool[] = [
  { id: 'content-planner', cat: 'konten', icon: 'calendar', live: false },
  { id: 'prospek-hub', cat: 'pelanggan', icon: 'users', live: true },
  { id: 'membership', cat: 'pelanggan', icon: 'ticket', live: false },
  { id: 'order-chat', cat: 'pelanggan', icon: 'chat', live: false },
  { id: 'booking-hub', cat: 'ops', icon: 'calendar', live: false },
  { id: 'order-hub', cat: 'ops', icon: 'receipt', live: false },
  { id: 'stok', cat: 'ops', icon: 'box', live: false },
  { id: 'servis', cat: 'ops', icon: 'wrench', live: false },
  { id: 'proyek', cat: 'ops', icon: 'brief', live: false },
  { id: 'kelas', cat: 'ops', icon: 'cap', live: false },
  { id: 'event', cat: 'ops', icon: 'ticket', live: false },
  { id: 'dashboard-tim', cat: 'ops', icon: 'grid', live: false },
  { id: 'nota-pos', cat: 'transaksi', icon: 'cart', live: true },
  { id: 'invoice', cat: 'transaksi', icon: 'receipt', live: false },
  { id: 'ulasan', cat: 'ulasan', icon: 'star', live: false },
  { id: 'testimonial-wall', cat: 'ulasan', icon: 'quote', live: false },
  { id: 'dashboard-laporan', cat: 'laporan', icon: 'chart', live: false },
  { id: 'akunting-umkm', cat: 'laporan', icon: 'book', live: false },
  { id: 'akunting-nirlaba', cat: 'laporan', icon: 'book', live: false },
  { id: 'akunting-koperasi', cat: 'laporan', icon: 'bank', live: false },
  { id: 'donasi', cat: 'laporan', icon: 'donate', live: false },
];

// Tools shown per business type in "Cocok untuk usaha kamu".
// 'ai-video' is the AI Video Sosmed Generator (listed under Produk lainnya, not the catalog).
export const industryTools: Record<string, string[]> = {
  'jasa-profesional': ['content-planner', 'ai-video', 'prospek-hub', 'proyek', 'dashboard-tim', 'invoice', 'kelas'],
  kuliner: ['order-chat', 'order-hub', 'nota-pos', 'ulasan', 'testimonial-wall', 'dashboard-laporan', 'akunting-umkm'],
  retail: ['order-chat', 'stok', 'nota-pos', 'dashboard-laporan', 'akunting-umkm'],
  grosir: ['stok', 'nota-pos', 'dashboard-laporan', 'invoice', 'akunting-umkm'],
  kecantikan: ['membership', 'order-chat', 'booking-hub', 'nota-pos', 'invoice', 'ulasan', 'testimonial-wall'],
  kebugaran: ['membership', 'order-chat', 'booking-hub', 'nota-pos', 'invoice', 'ulasan', 'testimonial-wall'],
  kesehatan: ['booking-hub', 'invoice'],
  pendidikan: ['membership', 'booking-hub', 'invoice'],
  kreatif: ['order-chat', 'proyek', 'invoice', 'booking-hub'],
  otomotif: ['order-chat', 'booking-hub', 'order-hub', 'stok', 'servis', 'nota-pos', 'invoice'],
  properti: ['prospek-hub', 'booking-hub', 'proyek', 'invoice'],
  produksi: ['order-hub', 'stok', 'invoice'],
  organisasi: ['membership', 'event', 'dashboard-laporan', 'akunting-nirlaba', 'akunting-koperasi', 'donasi'],
};

export const industryOrder = Object.keys(industryTools);

export const journey: { cat: CategoryId; tools: string[] }[] = [
  { cat: 'konten', tools: ['content-planner'] },
  { cat: 'pelanggan', tools: ['prospek-hub', 'membership'] },
  { cat: 'ops', tools: ['booking-hub', 'order-hub', 'stok'] },
  { cat: 'transaksi', tools: ['nota-pos', 'invoice'] },
  { cat: 'ulasan', tools: ['ulasan', 'testimonial-wall'] },
  { cat: 'laporan', tools: ['dashboard-laporan', 'akunting-umkm'] },
];

export const featured = ['prospek-hub', 'nota-pos'];
