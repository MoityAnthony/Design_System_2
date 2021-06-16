<template>
  <div>
    <Title text="Not signed up yet ?" link_text="Sign up now" />
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