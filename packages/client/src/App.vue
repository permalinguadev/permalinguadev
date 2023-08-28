<template>
  <Header msg="Hello Team!" />
  <UIButton message="Hello, this is your button from the UI lib" />
</template>

<script lang="ts">
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
