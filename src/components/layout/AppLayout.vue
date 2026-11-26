<script setup lang="ts">
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
</script>

<template>
  <div class="app-layout">
    <a class="app-layout__skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content" class="app-layout__main" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.app-layout__skip-link {
  position: absolute;
  top: 0;
  left: 0.5rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  border-radius: 0 0 0.25rem 0.25rem;
  background: #fffaf3;
  color: #2b1a12;
  font-weight: 700;
  text-decoration: none;
  transform: translateY(-150%);

  &:focus {
    transform: translateY(0);
  }
}

.app-layout__main {
  flex: 1;
  width: 100%;
  max-width: 75rem;
  margin-inline: auto;
  padding: 2rem clamp(1rem, 5vw, 3rem) 4rem;
}

@media (min-width: 48em) {
  .app-layout__main {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
}

@media (min-width: 64em) {
  .app-layout__main {
    padding-top: 4rem;
  }
}
</style>
