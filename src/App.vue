<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'SignIn'}">Sign In</router-link>
    <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import './styles/styles.scss';

#app {
  font-family: 'Montserrat', sans-serif;
  margin: 0px;
  padding: 0px;
  background: url('./assets/Ellipse_2.png'), url('./assets/Ellipse_3.png'), url('./assets/Ellipse_4.png');
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 117px 198px, 263px 129px, 15px 20px;
}
#nav{
  a{
    color: $blue;
    text-decoration: none;
    padding: 8px;
  }
  a:focus{
    border-bottom: 1px solid $blue;
  }
}

</style>
