<template>
  <div class="container">
    <Title title="Sign In" text="Not signed up ?" link_text="Register" />
    <Form value="Sign In"/>
  </div>
</template>

<script>
import Form from '../Form/index.vue';
import Title from '../Title/index.vue';

export default {
  name: 'Connexion',
  components: {
    Form,
    Title,
  },
}
</script>

<style>

</style>