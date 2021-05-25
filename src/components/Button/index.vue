<template>
  <div class="container">
    <button>{{ value }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props:{
    value: String,
  }
}
</script>

<style lang='scss' scoped>
  @import '../../styles/styles.scss';

  .container{
    padding-top: 90px;
    text-align: center;
    button{
      background-color: $purple;
      font-size: $t-lg-size;
      font-weight: $t-lg-weight;
      color: $pure-white;
      border: none;
      border-radius: 30px;
      padding: 5px 31px;
    }
  }
</style>