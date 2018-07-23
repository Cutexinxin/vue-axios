<template>
  <div class="axios">
    <div>
      <label>姓名：</label>
      <span>{{name}}</span>
    </div>
    <div>
      <label>年龄：</label>
      <span>{{age}}</span>
    </div>
    <div>
      <label>性别：</label>
      <span>{{sex}}</span>
    </div>
    <div>
      <label>联系电话：</label>
      <span>{{tel}}</span>
    </div>
    <div>
      <label>职位：</label>
      <span>{{job}}</span>
    </div>
    <button @click="getUser">点击获取信息</button>
  </div>
</template>

<script>
  import api from '../api/demo'
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: '',
        age: '',
        sex: '',
        job: '',
        tel: ''
      }
    },
    mounted() {
    },
    methods: {
      getUser() {
        api.getUser().then((res)=>{
          this.name=res.name;
          this.age=res.age;
          this.sex=res.sex;
          this.job=res.job;
          this.tel=res.tel;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
