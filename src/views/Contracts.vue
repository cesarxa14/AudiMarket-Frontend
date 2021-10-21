<template>
  <div>
    <Header/>
    <ContractList/>
  </div>

</template>

<script>
import Header from "../plugins/general/pages/header";
import ContractList from "../plugins/contract/pages/contract-list";
export default {
  name: "Contracts",
  components: {ContractList, Header}
}
</script>

