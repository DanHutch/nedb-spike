<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created() {

    var doug = {
      name: 'Douglas Adams',
      age: 60
    }
    var jason = {
      name: "Jason Object",
      age: 21
    }
    var people = [doug, jason]
    this.$db.users.insert(people, function(err, docs) {
      docs.forEach((doc) => {
        console.log('Inserted', doc.name, 'with ID', doc._id);
      });
    })
    console.log(this.$db);

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
