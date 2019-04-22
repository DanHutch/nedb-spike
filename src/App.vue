<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button id="only-button" @click="findEntry()">CLICK ME, PLEASE!</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created() {
    var doug = {
      name: "Douglas Adams",
      age: 60
    };
    var jason = {
      name: "Jason Object",
      age: 21
    };
    var hello = {
      title: "Hola!",
      text: "Hello, Vue! Great to meet you. Sincerely, NeDB"
    };
    var goodbye = {
      title: "Buenas tardes!",
      text: "So long, Vue! It's been real, yo. Sincerely, NeDB"
    };

    var people = [doug, jason];
    var messages = [hello, goodbye];

    this.$db.users.insert(people, function(err, docs) {
      docs.forEach(doc => {
        console.log("Inserted", doc.name, "with ID", doc._id);
      });
    });
    this.$db.messages.insert(messages, function(err, docs) {
      docs.forEach(doc => {
        console.log("Inserted", doc.title, "with ID", doc._id);
      });
    });

    console.log(this.$db);

    // this.$db.users.findOne({ name: "Jason" }, function(err, doc) {
    //   console.log(err);
    // });
  },
  methods: {
    findEntry() {
      this.$db.users.findOne({ name: "Jason Object" }, function(err, doc) {
        console.log(doc);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
