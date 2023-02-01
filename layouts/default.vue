<template>
  <div>
    <b-navbar
      style="background: rgba(0, 0, 0, 0)"
      class="m-0 p-3 has-text-white is-dark is-fixed-top"
      :transparent="true"
    >
      <template #brand>
        <b-navbar-item tag="NuxtLink" to="/">
          <img
            src="@/assets/logo.png"
            alt="Logo"
          />
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="main-content columns">
      <div class="column is-12">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
