<template>
  <div id="app">
    <select class="js-select" v-on:change="callToAPI">
      <option v-for="person in people">
        {{ person.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      people: [{
        name: "Chang Fujita"
      }, {
        name: "Eskandari"
      }, {
        name: "Mackenzie"
      }, {
        name: "Moss"
      }, {
        name: "Thomas"
      }, {
        name: "Weinstein"
      }]
    };
  },
  methods: {
    callToAPI(a) {
      const select = document.querySelector(".js-select");

      alert(`Call to API for ${select.value}. API implementation soon.`);
    }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
