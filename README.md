# Kreasi Digital Hub

Landing page untuk multi tools platform Kreasi Digital Hub — online tools sekali bayar untuk profesional dan pemilik usaha. Dibangun dengan [Astro](https://astro.build), tersedia dalam Bahasa Indonesia (`/`) dan English (`/en/`).

Live: https://hi-kreasidigital.github.io/kreasi-digital-hub/

## Menjalankan di komputer

```bash
npm install
npm run dev      # http://localhost:4321/kreasi-digital-hub/
npm run build    # hasil di dist/
```

## Mengubah isi

| Yang mau diubah | File |
| --- | --- |
| Semua teks (ID dan EN), FAQ, testimoni, produk lainnya | `src/data/content.ts` |
| Daftar tools, kategori, tools per jenis usaha, best-sellers | `src/data/tools.ts` |
| Kontak, link login, tampil/sembunyikan strip promo dan testimoni | `src/data/site.ts` |
| Warna, font, jarak | `src/styles/global.css` |
| Header dan footer | `src/layouts/Base.astro` |
| Susunan section homepage | `src/components/Home.astro` |
| Logo dan favicon | `public/images/`, `public/favicon.png` |

Setiap push ke `main` otomatis membangun dan menerbitkan ulang website lewat GitHub Actions (`.github/workflows/deploy.yml`).

## Sebelum launch

- Testimoni di `content.ts` masih contoh fiktif dan disembunyikan (`flags.showTestimonials = false`). Ganti dengan cerita pelanggan asli, lalu nyalakan.
- Strip promo disembunyikan (`flags.showPromo = false`) sampai harga dan tanggal promo final.
- `flags.loginUrl` masih kosong, jadi tombol **Masuk** membuka WhatsApp. Isi dengan URL dashboard saat aplikasinya siap.
- Formulir Custom dan tombol "Kabari saya" / "Pelajari" mengirim pesan lewat WhatsApp (website statis, tanpa server).

## Domain sendiri

Saat domain sudah dibeli: tambahkan file `public/CNAME` berisi nama domain, atur DNS di penyedia domain, lalu di `astro.config.mjs` ganti `site` ke domain tersebut dan hapus `base`.
