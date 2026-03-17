<template>
  <footer class="base-footer">
    <div class="base-footer__grid">
      <div class="base-footer__brand">
        <slot name="brand">
          <h3>Nuxt Package</h3>
          <p class="base-footer__tagline">Navigasi, card, footer, dan tombol siap pakai.</p>
        </slot>
      </div>
      <div
        v-for="section in sections"
        :key="section.title"
        class="base-footer__section"
      >
        <h4>{{ section.title }}</h4>
        <ul>
          <li v-for="link in section.links" :key="link.label">
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
      <div class="base-footer__extras">
        <slot name="extras">
          <p>Stay connected for updates.</p>
        </slot>
      </div>
    </div>
    <div class="base-footer__bottom">
      <span>{{ copyright }}</span>
      <div class="base-footer__actions" aria-label="Footer actions">
        <slot name="actions" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import '../styles/base-footer.css'

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const props = withDefaults(
  defineProps<{
    sections?: FooterSection[]
    copyright?: string
  }>(),
  {
    sections: [
      {
        title: 'Produk',
        links: [
          { label: 'Nuxt UI', href: '/docs', external: false },
          { label: 'Komponen', href: '/components' }
        ]
      },
      {
        title: 'Bantuan',
        links: [
          { label: 'Dokumentasi', href: '/docs/getting-started' },
          { label: 'Komunitas', href: 'https://discord.com', external: true }
        ]
      }
    ],
    copyright: `© ${new Date().getFullYear()} Nuxt UI`
  }
)
</script>
