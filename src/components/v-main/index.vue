<template>
  <div class="v-main">
    <img class="v-main__blik-img" src="@img/blik.png" alt="blik" />
    <div class="container">
      <vMainSection data-aos="fade-down" data-aos-delay="200" />

      <vSection2
        class="v-main__section2"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <vSection3
        class="v-main__section3"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <vFirstQuestion
        @change-page="changePage"
        @add-answer="addAnwser"
        id="first-question"
        class="v-main__first-question"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <vFooter
        class="v-main__footer"
        data-aos="fade-down"
        data-aos-delay="200"
      />
    </div>
  </div>
</template>

<script>
import {
  vMainSection,
  vSection2,
  vSection3,
  vFirstQuestion,
  vFooter,
} from "./index.js";
export default {
  components: {
    vMainSection,
    vSection2,
    vSection3,
    vFirstQuestion,
    vFooter,
  },
  data() {
    return {
      page: 1,
      answers: [],
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    addAnwser(answer) {
      this.answers.push(answer);
    },
  },
};
</script>

<style lang="scss">
.v-main {
  &__blik-img {
    position: absolute;
    right: 0;
    // top: -9%;
    top: -52px;
  }
  &__section2 {
    margin-top: 24px;
  }
  &__section3 {
    margin-top: 70px;
  }
  &__first-question {
    padding-top: 133px;
  }
  &__footer {
    margin-top: 105px;
  }
}

@media screen and (max-width: 600px) {
  .v-main {
    &__blik-img {
      display: none;
    }
    &__section2 {
      margin-top: 14px;
    }
    &__section3 {
      margin-top: 40px;
    }
    &__first-question {
      padding-top: 53px;
    }
    &__footer {
      margin-top: 61px;
    }
  }
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
