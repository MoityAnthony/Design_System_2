<template>
  <div>
    <Title :title="$route.name" text="Please enter your new password" />
    <Form :value="$route.name"/>
  </div>
</template>

<script>
import Form from '../components/Form/index.vue';
import Title from '../components/Title/index.vue';

export default {
  name: 'ForgetPassword',
  components: {
    Form,
    Title,
  }
}
</script>

<style>

</style>