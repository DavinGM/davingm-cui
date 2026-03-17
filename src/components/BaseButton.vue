<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    :rel="href && rel ? rel : undefined"
    :target="href && target ? target : undefined"
    :type="href ? undefined : type"
    :class="buttonClass"
    :disabled="disabled || loading"
    :aria-busy="loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <slot>
      <span>{{ defaultLabel }}</span>
    </slot>
  </component>
</template>

<script setup lang="ts">
import '../styles/base-button.css'
import { computed, toRefs } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    href?: string
    rel?: string
    target?: string
    type?: 'button' | 'submit' | 'reset'
    defaultLabel?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    href: '',
    rel: '',
    target: '',
    type: 'button',
    defaultLabel: 'Button'
  }
)

const { href, rel, target, type, disabled, loading, fullWidth, defaultLabel } = toRefs(props)

const emit = defineEmits<{ click: (event: MouseEvent) => void }>()

const buttonClass = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  { 'base-button--full': props.fullWidth }
])

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>
