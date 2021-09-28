<template>
  <div id="app">
    <div class="header-img"></div>
    <h1 style="text-align:center">Mobility dataspace federated catalog</h1>
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
  height: 500px;
  background: url("./assets/header.png");
  background-size: cover;
}
body {
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(237, 238, 250);
}
</style>
