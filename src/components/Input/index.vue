<template>
  <div class="container">
    <div id="email" class="input_form">
      <label for="email">Email</label>
      <input type="mail" title="email">
    </div>
    <div id="password" class="input_form" :class="isHidden">
      <label for="password">Password</label>
      <input type="password" title="password">
    </div>
    <router-link :to="{name: 'ForgetPassword'}" id="link" name="link" :class="forgetPassword">{{ text_link() }}</router-link>
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
      return className
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
    .input_form{
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-bottom: 24px;
      label{
        color: $grey;
        font-size: $t-md-size;
        font-weight: $t-md-weight;
      }
      input{
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
      font-size: $t-md-size;
      font-weight: $t-md-weight-light;
    }
  }
  .hidden{
    display: none;
  }
  .visible{
    display: block;
  }
</style>