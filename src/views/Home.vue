<template>
  <div class="home">
    <SignIn />
  </div>
  <router-view />
</template>

<script>
import SignIn from './SignIn.vue';

export default {
  name: 'Home',
  components:{
    SignIn,
  }
}
</script>
<style lang="scss">
</style>
