<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld :people="people"/>
    </v-content>
    <!-- {{people}} -->
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: () => ({
    people: [],
    messages: []
  }),
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
    var folks = [doug, jason];
    var messages = [hello, goodbye];
    this.$db.users.insert(folks, function(err, docs) {
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
  },
  mounted() {
    var that = this;
    this.$db.users.find({}, function(err, docs) {
      that.people = docs
      // console.log(docs)
      // docs.forEach(doc => {
      //   people.push(doc);
      // });
    });
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