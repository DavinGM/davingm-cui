<template>
  <nav :class="['base-nav', navClass]" role="navigation">
    <div class="base-nav__brand">
      <slot name="brand">
        <span class="base-nav__logo">Brand</span>
      </slot>
    </div>
    <ul class="base-nav__list">
      <li
        v-for="item in items"
        :key="item.href || item.label"
        :class="['base-nav__item', { 'base-nav__item--active': item.href === active, 'base-nav__item--disabled': item.disabled }]"
      >
        <component
          :is="item.disabled ? 'span' : 'a'"
          :href="item.disabled ? undefined : item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="base-nav__link"
        >
          <span v-if="item.icon" class="base-nav__icon" aria-hidden="true">{{ item.icon }}</span>
          <span>
            {{ item.label }}
            <small v-if="item.description" class="base-nav__description">{{ item.description }}</small>
          </span>
          <span v-if="item.badge" class="base-nav__badge">{{ item.badge }}</span>
        </component>
      </li>
    </ul>
    <div class="base-nav__extra">
      <slot name="actions" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import '../styles/base-navigation.css'
import { computed, toRefs } from 'vue'

type NavItem = {
  label: string
  href: string
  description?: string
  icon?: string
  badge?: string
  external?: boolean
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    items?: NavItem[]
    active?: string
    orientation?: 'horizontal' | 'vertical'
    sticky?: boolean
  }>(),
  {
    items: [],
    active: '',
    orientation: 'horizontal',
    sticky: false
  }
)

const { items, active } = toRefs(props)

const navClass = computed(() => [
  `base-nav--${props.orientation}`,
  { 'base-nav--sticky': props.sticky }
])
</script>
