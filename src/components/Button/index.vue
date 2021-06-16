<template>
  <div class="container">
    <router-link :to="link()">
      <button class="t-lg button">{{ value() }}</button>
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