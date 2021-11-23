<template>
  <div>
    <Header/>
    <login-form/>
  </div>

</template>

<script>
import Header from "../plugins/general/pages/header";
import LoginForm from "../plugins/auth/pages/login-form";
export default {
  name: "Login",
  components: {Header, LoginForm}
}
</script>

