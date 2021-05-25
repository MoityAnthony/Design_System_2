<template>
  <div class="container">
    <div class="input_form">
      <label for="email">Email</label>
      <input type="mail" title="email">
    </div>
    <div class="input_form">
      <label for="password">Password</label>
      <input type="password" title="password">
    </div>
    <a href="#" class="link">Forget password ?</a>
  </div>
</template>

<script>
export default {
  name: 'Input',
  porps:{
    label: String,
    link: String,
    text_link: String,
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
</style>