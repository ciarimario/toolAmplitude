<template>
  <div class="home">
    <MainHeader />
  </div>
  <CardText />
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import CardText from "@/components/CardText.vue";
export default {
  name: "HomeView",
  components: {
    MainHeader,
    CardText,
  },
};
</script>
