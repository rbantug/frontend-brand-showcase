<script setup lang="ts">
import { navigationItems } from '@/components/navigation/navigationItems'

const primaryItems = navigationItems.filter((item) => item.section === 'primary')
</script>

<template>
  <nav class="main-navigation" aria-label="Main navigation">
    <ul class="main-navigation__list">
      <li v-for="item in primaryItems" :key="item.to" class="main-navigation__item">
        <RouterLink class="main-navigation__link" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.main-navigation {
  min-width: 0;
}

.main-navigation__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 1rem;
  list-style: none;
}

.main-navigation__link {
  display: inline-block;
  padding: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  color: #4a3124;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: #8c3b2e;
    text-decoration: underline;
  }
}

@media (min-width: 48em) {
  .main-navigation__list {
    gap: 0.5rem 1.5rem;
  }

  .main-navigation__link {
    padding-inline: 0.5rem;
  }
}

@media (min-width: 64em) {
  .main-navigation__list {
    gap: 0.5rem 2rem;
  }
}
</style>
