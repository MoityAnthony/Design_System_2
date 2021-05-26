<template>
  <div class="form">
    <Input />
    <Button />
  </div>
</template>

<script>
import Input from '../Input';
import Button from '../Button';

export default {
  name: 'Form',
  components:{
    Input,
    Button,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
