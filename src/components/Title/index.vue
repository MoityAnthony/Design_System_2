<template>
  <div class="container">
    <p class="title t-xl" >{{title_text()}}</p>
    <p class="t-ml-light">
      {{ text }}
      <router-link :to="link()" class="t-ml-light">{{ link_text }}</router-link>
    </p>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Title',
  props:{
    title: String,
    text: String,
    link_text: String,
  },
  methods:{
    link() {
      if( this.$route.name == 'SignIn'){
        return 'SignUp';
      }
      else if(this.$route.name == 'SignUp'){
        return 'SignIn';
      }
      else if(this.$route.name == 'Home'){
        return 'SignUp';
      }
      else if(this.$route.name == 'ForgetEmail'){
        return 'SignIn';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'SignIn';
      }
    }, 
    title_text() {
      if( this.$route.name == 'SignIn'){
        return 'Sign in';
      }
      else if(this.$route.name == 'SignUp'){
        return 'Sign up';
      }
      else if(this.$route.name == 'Home'){
        return 'Sign in';
      }
      else if(this.$route.name == 'ForgetEmail'){
        return 'Forgetten password';
      }
      else if(this.$route.name == 'ForgetPassword'){
        return 'Forgetten password';
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

  .container{
    text-align: center;
    padding-bottom: 133px;
    padding-top: 140px;
    .title{
      color: $grey;
      margin: 0px;
    }
    p{
      padding-top: 13px; 
      color: $grey;
    }
    a{
      color: $blue;
    }
  }

</style>