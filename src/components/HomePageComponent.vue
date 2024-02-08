<template>
<div class="container1">
  <div class="container1__firstrow">
    <div class="container1__firstrow__left">
      <div class="container1__firstrow__left__title">
        <h1>Lorem  amet <br> adipisicing elit.</h1>
      </div>
      <div class="container1__firstrow__left__description">
        <p>Get the best deals on Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore molestiae ex earum veniam cumque, quaerat dolorem quibusdam provident libero! the latest products</p>
      </div>
      <div class="container1__firstrow__left__button">
        <button>Delivery</button>
        <button>Pickup</button>
      </div>
      <div class="container1__firstrow__left__selection">
        <input type="text" placeholder="Select Location" />
      </div>
    </div>
    <div class="container1__firstrow__right">
      <img src="../assets/hero.png" alt="hero-image" />
    </div>
  </div>
  <div class="container1__secondrow">
    <div class="container1__secondrow__Item1">
      <img src="../assets/Herocart1.png" alt="">
      <h3>Salade Bowl</h3>
      <div class="stars">
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
      </div>
      <div class="details">
        <p>Salade</p>
        <h4><span>$12.99</span>$10.99</h4>
      </div>
    </div>
    <div class="container1__secondrow__Item2">
      <img src="../assets/Herocart2.png" alt="">
      <h3>Salade Bowl</h3>
      <div class="stars">
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
      </div>
      <div class="details">
        <p>Salade</p>
        <h4><span>$12.99</span>$10.99</h4>
      </div>
    </div>
    <div class="container1__secondrow__Item3">
      <img src="../assets/Herocart3.png" alt="">
      <h3>Salade Bowl</h3>
      <div class="stars">
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
        <font-awesome-icon class="star" :icon="['fas', 'star']" />
      </div>
      <div class="details">
        <p>Salade</p>
        <h4><span>$12.99</span>$10.99</h4>
      </div>
    </div>
  </div>
</div>
<div class="container2">
  <div class="container2__section1">
    <div class="s_details">
      <img src="../assets/delivery-bike.png" alt="">
      <div class="text_section">
        <h1>Fastest Delivery</h1>
        <p>Safe & Fastest Delivery</p>
      </div>
    </div>
  </div>
  <div class="container2__section2">
    <div class="s_details">
      <img src="../assets/booking.png" alt="">
      <div class="text_section">
        <h1>Book Now</h1>
        <p>Natural Place</p>
      </div>
    </div>
  </div>
  <div class="container2__section3">
    <div class="s_details">
      <img src="../assets/house.png" alt="">
      <div class="text_section">
        <h1>Home Made</h1>
        <p>Fresh Felling Ever</p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '../styles/Pages/homePageComponent';
</style>