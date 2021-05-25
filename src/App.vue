<template>
  <div class="main_container">
    <Title title="Sign In" text="Not signed up ?" link_text="Register" />
    <Form value="Sign In"/>
  </div>
</template>

<script>
import Form from './components/Form/index.vue';
import Title from './components/Title/index.vue';

export default {
  name: 'App',
  components: {
    Form,
    Title,
  },
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}
.main_container {
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  font-family: 'Montserrat', 'sans-serif';
  background: url('./assets/Ellipse_2.png'), url('./assets/Ellipse_3.png'), url('./assets/Ellipse_4.png'); 
  background-repeat: no-repeat; 
  background-position: 117px 228px, 263px 129px , 15px 20px;
}
</style>
