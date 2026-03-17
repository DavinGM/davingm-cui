<template>
  <article :class="['base-card', `base-card--${variant}`]">
    <div v-if="image" class="base-card__media">
      <img :src="image" :alt="imageAlt" loading="lazy" />
    </div>
    <div class="base-card__body">
      <header>
        <p v-if="eyebrow" class="base-card__eyebrow">{{ eyebrow }}</p>
        <h3 class="base-card__title">{{ title }}</h3>
        <p v-if="subtitle" class="base-card__subtitle">{{ subtitle }}</p>
      </header>
      <p v-if="description" class="base-card__description">{{ description }}</p>
      <div class="base-card__footer">
        <slot name="footer">
          <span v-if="ctaLabel" class="base-card__cta">{{ ctaLabel }}</span>
        </slot>
        <div class="base-card__actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import '../styles/base-card.css'
import { toRefs } from 'vue'

type CardVariant = 'flat' | 'highlighted'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    description?: string
    image?: string
    imageAlt?: string
    eyebrow?: string
    variant?: CardVariant
    ctaLabel?: string
  }>(),
  {
    subtitle: '',
    description: '',
    image: '',
    imageAlt: '',
    eyebrow: '',
    variant: 'flat',
    ctaLabel: ''
  }
)

const { title, subtitle, description, image, imageAlt, eyebrow, variant, ctaLabel } = toRefs(props)
</script>
