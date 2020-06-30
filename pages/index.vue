<template lang="html">
  <form class="form" @submit.prevent="loginCheck()">
    <div>
      <input type="text" placeholde="LOGIN" v-model="login"/>
    </div>
    <div>
      <input type="password" placeholde="PASSWORD" v-model="password"/>
    </div>
    <div>
      <button type="submit">Войти</button>
    </div>
  </form>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      login: "",
      password: "",
      validFlag: false
    }
  },
  methods: {
    async loginCheck() {
      //Имитация проверки введенных данных с данными в базе
      const userInfo = this.$store.state.user.validUser;

      this.login === userInfo.login ? this.validFlag = true : this.validFlag = false
      this.password === userInfo.password ? this.validFlag = true : this.validFlag = false

      if(this.validFlag) {
        const userData = {
          id: 0,
          firstName: "TESTFIRSTNAME",
          lastName: "TESTLASTNAME",
          img: "https://klike.net/uploads/posts/2019-07/1564314090_3.jpg"
        }
        await this.$store.dispatch("user/fetch", { options: userData })
        this.$router.push("/profile")
      } else {
        alert("Неверные данные")
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vw;
  margin: auto;
}
.labelx {
  .vs-input {
    margin: 10px;
  }
}
</style>
