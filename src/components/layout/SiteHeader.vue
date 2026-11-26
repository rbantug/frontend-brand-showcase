<script setup lang="ts">
import MainNavigation from '@/components/navigation/MainNavigation.vue'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" to="/">Cacao Atelier</RouterLink>
      <MainNavigation />
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  border-bottom: 1px solid #e7dac8;
  background: #fffaf3;
}

.site-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  width: 100%;
  max-width: 75rem;
  margin-inline: auto;
  padding: 1rem clamp(1rem, 5vw, 3rem);
}

.site-header__brand {
  color: #2b1a12;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
}

@media (min-width: 48em) {
  .site-header__inner {
    gap: 1rem 2rem;
  }

  .site-header__brand {
    font-size: 1.25rem;
  }
}

@media (min-width: 64em) {
  .site-header__inner {
    padding-block: 1.25rem;
  }
}
</style>
