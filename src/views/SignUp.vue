<template>
  <div>
    <Title text="Already got an account ?" link_text="Sign in now" />
    <Form />
  </div>
</template>

<script>
import Form from '../components/Form/index.vue';
import Title from '../components/Title/index.vue';

export default {
  name: 'SignUp',
  components: {
    Form,
    Title,
  },
}
</script>

<style>

</style>