<template>
  <div>
    <Title :title="$route.name" text="An email will send to you for restat it" />
    <Form :value="$route.name"/>
  </div>
</template>

<script>
import Form from '../components/Form/index.vue';
import Title from '../components/Title/index.vue';

export default {
  name: 'ForgetEmail',
  components: {
    Form,
    Title,
  }
}
</script>

<style>

</style>