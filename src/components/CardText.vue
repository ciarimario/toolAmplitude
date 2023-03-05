<template>
  <div class="cardText">
    <section class="cardTextSectionImage"></section>
    <section class="cardTextSectionText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eos.
    </section>
  </div>
</template>

<script>
import axios from "axios";
axios.get();
</script>

<style>
.cardText {
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  height: 200px;
  box-shadow: -1px 0px 17px 2px rgba(0, 0, 0, 0.3);
}

.cardTextSectionImage {
  background-color: red;
  width: 40%;
}

.cardTextSectionText {
  width: 60%;
  padding: 1em;
}
</style>