<template>
  <h1 class="text-green-600 text-3xl mb-3">{{ msg }}</h1>
  <p>Header Component 😍</p>
</template>

<script type="ts">

export default {


  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>
