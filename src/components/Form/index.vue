<template>
  <div class="form">
    <Input />
    <Button :value='value' />
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
  },
  props:{
    value: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
