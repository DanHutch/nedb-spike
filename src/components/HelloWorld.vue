<template>
  <div id="main-container">
    <v-form v-model="valid">
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field v-model="age" :rules="nameRules" label="Age" required></v-text-field>
          </v-flex>

          <v-flex>
            <v-btn @click="submit">submit</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <div id="list">
      <div v-for="person in people" :key="person._id">Name: {{person.name}}, Age: {{person.age}}</div>
    </div>
    <v-btn @click="wipeUsers">Delete All Users</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Sample",
    age: "10"
  }),
  methods: {
    submit() {
      var that = this;
      this.$db.users.insert(this.newPerson, function(err, doc) {
        console.log("Inserted", doc.name, "with ID", doc._id);
        that.people.push(doc);
      });
    },
    listPeople() {
      console.log(this.people);
    },
    wipeUsers() {
      this.$db.users.remove({}, {multi:true})
    }
  },
  computed: {
    newPerson() {
      return {
        name: this.name,
        age: this.age
      };
    }
  },
  props: {
    people: Array
  }
};
</script>

<style>
</style>
