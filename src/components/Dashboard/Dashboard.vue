<template>
  <div>
    <p class="mt-12 text-h2">Welcome To Dashboard</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userOptions: ['Settings', 'Log Out'],
    }
  },
};
</script>

<style lang="sass" scoped>
.sidebar
  background: #141335
  padding: 50px
  width: 300px
  height: 100vh

  .circle
    width: 150px
    height: 150px
    background: #2EF0D6
    border-radius: 50%
    margin: 0 auto

  .title
    color: white

  .link
    display: block
    color: #fff
    padding-bottom: 15px
    border-bottom: 1px solid #fff
</style>
