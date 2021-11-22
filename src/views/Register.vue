<template>
  <div>
    <Header/>
    <register-form/>
  </div>
</template>

<script>
import Header from "../plugins/general/pages/header";
import RegisterForm from "../plugins/auth/pages/register-form";
export default {
  name: "Register",
  components: {RegisterForm, Header}
}
</script>

