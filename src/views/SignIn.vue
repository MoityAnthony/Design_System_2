<template>
  <div class="container">
    <Title text="Not signed up ?" link_text="Register" />
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form/index.vue';
import Title from '../components/Title/index.vue';

export default {
  name: 'SignIn',
  components: {
    Form,
    Title,
  },
}
</script>

<style lang="scss">
</style>