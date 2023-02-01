<template>
  <section class="hero header" :style="mainBg">
    <div class="my-auto px-6">
      <div class="container">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
        <div v-if="link">
          <nuxt-link :to="link">
            <b-button type="is-success" class="my-1">{{ btnTitle }}<b-icon class="ml-1" icon="arrow-right-bold" size="is-small"></b-icon></b-button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionContent',
  props: {
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    bg: { type: String, default: null },
    bgColor: { type: String, default: null },
    link: { type: String, default: null },
    btnTitle: { type: String, default: null },
  },
  data() {
    return {}
  },
  computed: {
    mainBg() {
      return {
        background: 'url(' + this.bg + ') no-repeat, ' + this.bgColor,
        backgroundSize: '70%',
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
      }
    },
  },
}
</script>
<style scoped>
.header {
  min-height: 100vh;
}

.title,
.subtitle {
  color: white;
}

.title {
  font-size: 30pt;
  font-weight: 500;
}

.subtitle {
  font-weight: 400;
}
</style>
