<template>
  <div class="collection-info-page">
    <div>
      <img
        class="collection-info-page__microphone-icon"
        src="@img/microphone.svg"
        alt="microphone"
        data-aos="fade-down"
        data-aos-delay="300"
      />
      <div
        ref="progressBar"
        class="collection-info-page__progress-bar"
        data-aos="fade-down"
        data-aos-delay="300"
      ></div>
      <div
        class="collection-info-page__progress-num"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {{ progressPercentage + "%" }}
      </div>
      <div
        class="collection-info-page__progress-label"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Запись сообщения
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      progressPercentage: 0,
      interval: null,
      timer: null,
    };
  },
  mounted() {
    if (this.answers.length != 5) {
      this.$router.push("/");
    }
    this.interval = setInterval(() => {
      this.progressPercentage += 20;
      this.$refs.progressBar.style.setProperty(
        "--progress-percentage",
        this.progressPercentage + "%"
      );
      if (this.progressPercentage === 100) {
        this.timer = setTimeout(() => {
          this.$router.push("/finish/");
        }, 500);
      }
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  },
  computed: {
    ...mapState(["answers"]),
  },
};
</script>

<style lang="scss">
.collection-info-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  &__microphone-icon {
    display: block;
    margin: 0 auto;
  }
  &__progress-bar {
    margin-top: 20px;
    width: 80vw;
    position: relative;
    line-height: 100px;
    height: 1px;
    width: 300px;
    color: var(--main-color);
  }
  &__progress-bar::after {
    background: linear-gradient(
      to right,
      #f6c866 var(--progress-percentage),
      #f6c866 var(--progress-percentage),
      #fff 0
    );
    position: absolute;
    content: "";
    height: 8px;
    right: 0;
    left: 0;
    top: 0;
  }
  &__progress-num {
    text-align: center;
    margin-top: 36px;
    font-weight: 300;
    font-size: 30px;
    line-height: 32px;
    letter-spacing: 0.1em;

    color: rgba(255, 255, 255, 0.6);
    opacity: 1;
    animation: move 1s infinite linear alternate;
    animation-delay: 0.5s;
  }
  &__progress-label {
    margin-top: 24px;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;

    color: rgba(255, 255, 255, 0.6);
  }

  @keyframes move {
    to {
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 600px) {
    .collection-info-page {
      &__microphone-icon {
        width: 200px;
      }
      &__progress-bar::after {
        height: 4px;
      }
      &__progress-num {
        margin-top: 24px;
        font-size: 20px;
        line-height: 21px;
      }
      &__progress-label {
        margin-top: 16px;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>
