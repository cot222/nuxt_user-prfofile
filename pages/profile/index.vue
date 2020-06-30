<template>
    <div>
      <div v-if="info">
        {{ info.img }}
        <img :src="info.img" />
        <h2>Имя: {{ info.firstName }}</h2>
        <h2>Фамилия: {{ info.lastName }}</h2>
      </div>
      <div v-else>
        Данных нету
      </div>  
    </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      info: null
    }
  },
  beforeMount() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
        this.info = this.$store.state.user.items[0]
    }
  }
}
</script>

<style lang="scss">
</style>
