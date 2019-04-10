<template>
    <div>
      <md-field>
          <label>Usuario</label>
          <md-input class="loginput" v-model="initial" type="email" placeholder="Usuario"></md-input>
      </md-field>

      <md-field>
          <label>Usuario</label>
          <md-input class="loginput" v-model="initial" type="password" placeholder="Contraseña"></md-input>
      </md-field>

      <md-button class="md-raised md-primary">Iniciar</md-button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.loginput {
  width:80%;
}
</style>