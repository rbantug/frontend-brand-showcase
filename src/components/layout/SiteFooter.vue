<script setup lang="ts">
import { navigationItems } from '@/components/navigation/navigationItems'

const secondaryItems = navigationItems.filter((item) => item.section === 'secondary')
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__identity">
        <p class="site-footer__brand">Cacao Atelier</p>
        <p class="site-footer__motto">The unexpected is worth tasting.</p>
      </div>
      <nav class="site-footer__nav" aria-label="Footer navigation">
        <ul class="site-footer__list">
          <li v-for="item in secondaryItems" :key="item.to" class="site-footer__item">
            <RouterLink class="site-footer__link" :to="item.to">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid #e7dac8;
  background: #f3e8d6;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem 3rem;
  width: 100%;
  max-width: 75rem;
  margin-inline: auto;
  padding: 2rem clamp(1rem, 5vw, 3rem);
}

.site-footer__identity {
  min-width: 0;
}

.site-footer__brand {
  color: #2b1a12;
  font-weight: 700;
}

.site-footer__motto {
  margin-top: 0.25rem;
  color: #4a3124;
  font-style: italic;
}

.site-footer__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  list-style: none;
}

.site-footer__link {
  display: inline-block;
  padding: 0.5rem 0.25rem;
  color: #4a3124;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: #8c3b2e;
    text-decoration: underline;
  }
}

@media (min-width: 48em) {
  .site-footer__inner {
    padding: 2.5rem clamp(1.5rem, 5vw, 3rem);
  }

  .site-footer__list {
    gap: 0.5rem 1.5rem;
  }

  .site-footer__link {
    padding-inline: 0.5rem;
  }
}

@media (min-width: 64em) {
  .site-footer__inner {
    align-items: center;
    padding-block: 3rem;
  }

  .site-footer__motto {
    margin-top: 0.5rem;
  }
}
</style>
