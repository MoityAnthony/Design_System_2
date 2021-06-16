<template>
  <div class="container">
    <router-link :to="link()">
      <button v-on:click="clicked()" id="button" class="t-lg button">{{ value() }} <img src="../../assets/circles-loader-1.png" alt="loader"></button>
    </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Button',
  methods:{
    value() {
      if( this.$route.name == 'SignIn'){
        return 'Sign in';
      }
      else if(this.$route.name == 'SignUp'){
        return 'Register';
      }
      else if(this.$route.name == 'Home'){
        return 'Sign in';
      }
      else if(this.$route.name == 'ForgetEmail'){
        return 'Send';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'Validate';
      }
    },
    link() {
      if( this.$route.name == 'ForgetEmail'){
        return 'ForgetPassword';
      }
      else{
        return '';
      }
    }, 
    clicked() {
      let button = document.getElementById('button');
      if( this.$route.name == 'ForgetPassword'){
        button.classList.add('active');
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../styles/styles.scss';

  .container{
    padding-top: 90px;
    text-align: center;
  }
  .hidden{
    display: none !important;
  }
  .visible{
    display: block !important;
  }
</style>