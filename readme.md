# @davingm/ui

Komponen UI ringan untuk proyek Nuxt / Vue 3. Isi paket ini tombol, navigasi, footer, dan card yang bisa langsung dipakai dan disesuaikan lewat props serta slot.

## Instalasi

```bash
npm install @davingm/ui
```

> Paket ini _peer dependency_ pada `vue@^3` jadi pastikan Nuxt 3 Anda sudah menggunakan Vue 3.x.

## Pemakaian dasar di Nuxt

```vue
<script setup>
import { BaseButton, BaseNavigation, BaseFooter, BaseCard } from '@davingm/ui'

const navItems = [
  { label: 'Beranda', href: '/', icon: '🏠', badge: 'Baru' },
  { label: 'Produk', href: '/products', description: 'Solusi UI' },
  { label: 'Bantuan', href: '/docs', external: true }
]

const footerSections = [
  {
    title: 'Produk',
    links: [
      { label: 'Dokumentasi', href: '/docs' },
      { label: 'Komunitas', href: 'https://discord.com', external: true }
    ]
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Karier', href: '/careers' }
    ]
  }
]
</script>

<template>
  <BaseNavigation :items="navItems" active="/" sticky>
    <template #brand>
      <span class="text-lg font-bold">Nuxt Theme</span>
    </template>
    <template #actions>
      <BaseButton variant="ghost" size="sm">Masuk</BaseButton>
      <BaseButton variant="primary" size="sm" href="/register">Daftar</BaseButton>
    </template>
  </BaseNavigation>

  <section class="p-6">
    <BaseCard
      title="Produk unggulan"
      subtitle="Solusi siap pakai"
      description="Gunakan komponen ini untuk mempercepat pembuatan halaman marketing Nuxt Anda."
      image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60"
      eyebrow="Highlight"
      variant="highlighted"
    >
      <template #actions>
        <BaseButton variant="primary">Pelajari lebih lanjut</BaseButton>
        <BaseButton variant="secondary">Demo</BaseButton>
      </template>
    </BaseCard>
  </section>

  <footer class="mt-auto">
    <BaseFooter :sections="footerSections" :copyright="`© ${new Date().getFullYear()} Nuxt Theme`">
      <template #brand>
        <div>
          <h4 class="text-white font-semibold">Nuxt Theme</h4>
          <p class="text-sm text-gray-300">Siap tinggal pakai dan di-custom.</p>
        </div>
      </template>
      <template #actions>
        <BaseButton variant="ghost" size="sm" href="mailto:hello@example.com">Kontak</BaseButton>
      </template>
    </BaseFooter>
  </footer>
</template>
```

## Keterangan komponen

### `BaseButton`
- `variant`: `primary` | `secondary` | `ghost` (default `primary`)
- `size`: `sm` | `md` | `lg` (default `md`)
- `href`, `target`, `rel`: membuat tombol berperan sebagai link
- `loading`, `disabled`, `fullWidth`

### `BaseNavigation`
- `items`: array objek `{ label, href, description?, icon?, badge?, external?, disabled? }`
- `orientation`: `horizontal` | `vertical`
- `active`: href aktif
- `sticky`: buat nav menempel di atas
- slot bernama `brand` (logo/brand) dan `actions` (CTA)

### `BaseCard`
- judul/subjudul/desc/media optional
- `variant`: `flat` | `highlighted`
- slot `actions` & `footer` untuk tombol CTA atau konten tambahan

### `BaseFooter`
- `sections`: array `{ title, links: [{ label, href, external? }] }`
- slot `brand`, `extras`, `actions`

## Catatan
- Komponen memuat CSS scoped sendiri, jadi Anda tidak perlu setup ulang styles.
- Jika butuh menambahkan global themes atau token, bungkus komponen dengan wrapper `<div class="...">` dan gunakan kelas utilitas Nuxt/Tailwind Anda.
