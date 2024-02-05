<template>
  <!--Main Navbar Start-->
  <nav class="nav">
      <!--Right Side Logo-->
    <div class="nav__logo">
      <img src="../assets/logo.png" alt="" />
    </div>
      <!--Centered Navigation Items-->
    <div class="nav__items">
        <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Menu">Menu</router-link></li>
      <li><router-link to="/About-us">About Us</router-link></li>
      <li><router-link to="/Contact-us">Contact Us</router-link></li>
    </ul>
    </div>
      <!--Right Side Icons-->
    <div class="nav__icons">
      <font-awesome-icon class="cart_icon" :icon="['fas', 'cart-shopping']" />
      <font-awesome-icon
        class="cart_icon"
        :icon="['fas', 'phone']"
        flip="horizontal"
      />
      <button>
<router-link to="/Login">
  Login
        <font-awesome-icon class="login_icon" :icon="['fas', 'arrow-right-to-bracket']" />
</router-link>
      </button>
    </div>
      <!--Bars For Side Navigation On Mobile Responsive-->
      <div class="nav__bar">
        <font-awesome-icon class="bars" :icon="['fas', 'bars']" />
      </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../styles/Pages/headerlayout";
</style>
