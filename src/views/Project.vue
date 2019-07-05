<template>
  <div class="hello">
    <Navbar></Navbar>
    <h1>Project</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "tempRouter",
  components: {
    Navbar
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
