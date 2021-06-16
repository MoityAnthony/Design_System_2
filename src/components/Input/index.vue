<template>
  <div class="container">
    <div id="email" class="input_form">
      <label class="t-md" for="email">Email</label>
      <input class="t-md-light" type="mail" title="email">
    </div>
    <div id="password" class="input_form" :class="isHidden">
      <label class="t-md" for="password">Password</label>
      <input class="t-md-light" type="password" title="password">
    </div>
    <router-link :to="link()" id="link" name="link" :class="forgetPassword" class="t-ml-light">{{ text_link() }}</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Input',
  computed:{
    forgetPassword(){
      let className = 'visible';
      if(this.$route.name == 'SignUp'){
        className = 'hidden';
        return className;
      }
      else if(this.$route.name == 'Home' || this.$route.name == 'SignIn' || this.$route.name == 'ForgetPassword'){
        className = 'visible';
        return className;
      }
      return className;
    }
  },
  methods:{
    text_link() {
      if( this.$route.name == 'SignIn' || this.$route.name == 'Home'){
        return 'Forget password ?';
      }
      else if(this.$route.name == 'SignUp'){
        return 'Sign up';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'Remember your password ? Sign in';
      }
    }, 
    link() {
      if( this.$route.name == 'SignIn' || this.$route.name == 'Home'){
        return 'ForgetPassword';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'SignIn';
      }
      else if(this.$route.name == 'SignUp'){
        return '';
      }
    }, 
  }


}
</script>

<style lang="scss" scoped>
  @import '../../styles/styles.scss';

  .container{
    width: 226px;
    margin: 0 auto;
    display: block;
    text-align: center;
    @include responsive('tablet'){
      width: 326px;
    }
    @include responsive('desktop'){
      width: 426px;
    }
    .input_form{
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-bottom: 24px;
      label{
        color: $grey;
      }
      input{
        font-family: 'Montserrat';
        border: none;
        border-bottom: 1px solid;
        border-color: $grey;
        background-color: unset;
        &:focus{
          outline: none;
        }
      }
    }
    a{
      color: $blue;
    }
  }
  .hidden{
    display: none;
  }
  .visible{
    display: block;
  }
</style>