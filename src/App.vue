<template>
  <div id="app">
    <FormRegister/>
      <b-alert show class="text-center w-100 mb-0 footer">
        <a target="_blank" href="https://gericyber.github.io/Portafolio/">[&nbsp;&nbsp;gericyber;&nbsp;&nbsp;]</a>
      </b-alert>
  </div>
</template>

<script>
import FormRegister from './components/FormRegister.vue'

export default {
  name: 'app',
  components: {
    FormRegister
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
#app {
  font-family: 'Catamaran', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
}
a {
  text-decoration: none !important;
}
.footer {
  position: absolute !important;
  bottom: 0 !important;
}
</style>
