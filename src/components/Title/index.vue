<template>
  <div class="container">
    <p class="title">{{ title }}</p>
    <p>
      {{ text }}
      <a href='#'>{{ link_text }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props:{
    title: String,
    text: String,
    link_text: String,
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
      font-size: $t-xl-size;
      font-weight: $t-xl-weight;
      margin: 0px;
    }
    p{
      padding-top: 13px; 
      color: $grey;
      font-size: $t-md-size;
      font-weight: $t-md-weight-light;
    }
    a{
      color: $blue;
      font-size: $t-md-size;
      font-weight: $t-md-weight-light;
    }
  }

</style>