<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
body {
  margin: 0;
  background-color: #edf2f6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

 /* Custom Scroll bar */
::-webkit-scrollbar {
  width: 6px;
}
 
::-webkit-scrollbar-thumb {
  background: #aaa; 
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #888; 
}
</style>
