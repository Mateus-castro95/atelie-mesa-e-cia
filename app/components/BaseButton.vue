<script setup lang="ts">
/**
 * BaseButton — Botão reutilizável com design premium
 */
defineProps<{
  variant?: 'primary' | 'outline' | 'ghost'
}>()
</script>

<template>
  <button 
    class="base-button" 
    :class="[`base-button--${variant || 'primary'}`]"
  >
    <span class="base-button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 9999px; /* Bordas arredondadas pílula */
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
}

/* Variante Primária: Marrom Profundo */
.base-button--primary {
  background-color: #2D1E17;
  color: #EDE7DE;
  box-shadow: 0 4px 15px rgba(45, 30, 23, 0.2);
}

.base-button--primary:hover {
  background-color: #432E24;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(45, 30, 23, 0.3);
}

.base-button--primary:active {
  transform: translateY(0);
}

/* Variante Outline */
.base-button--outline {
  background-color: transparent;
  color: #2D1E17;
  border: 1px solid #2D1E17;
}

.base-button--outline:hover {
  background-color: #2D1E17;
  color: #EDE7DE;
}

.base-button__content {
  position: relative;
  z-index: 2;
}
@media (max-width: 768px) {
  .base-button {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
}
</style>
