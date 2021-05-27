<template>
  <nav>
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'SignIn'}">Sign In</router-link>
    <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import './styles/styles.scss';

#app {
  width: 300px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  padding: 0px;
  background: url('./assets/Ellipse_2.png'), url('./assets/Ellipse_3.png'), url('./assets/Ellipse_4.png');
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 87px 228px, 233px 129px, 0px 20px;
  @include responsive('tablet'){
    width: 500px;
    background-position: 187px 228px, 333px 129px, 50px 20px;
  }
  @include responsive('desktop'){
    width: 650px;
    background-position: 267px 228px, 433px 129px, 100px 20px;
  }
}
nav{
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
