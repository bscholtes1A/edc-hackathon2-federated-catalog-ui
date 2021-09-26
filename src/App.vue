<template>
  <div id="app">
    <div class="header-img">Federated</div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
#app {
  margin-top: 50px;
}
.search-wrapper {
  margin: 20px;
}
.badge {
  border-radius: 0;
}
.header-img {
  width: 100%;
  height: 400px;
  background: url("./assets/multimodal.jpg");
  background-size: cover;
}
html,
body {
  height: 100%;
}
body {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(237, 238, 250);
}
</style>
