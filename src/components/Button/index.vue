<template>
  <div class="container">
    <button class="t-lg button">{{ value() }}</button>
  </div>
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
        return 'Sign up';
      }
      else if(this.$route.name == 'Home'){
        return 'Sign in';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'Forget password';
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
</style>