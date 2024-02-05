<template>
  <!--Footer Main Section-->
  <footer class="footer">
    <!--Footer Container-->
    <div class="footer__container">
      <!--Footer Container Columns-->
      <div class="footer__container__firstcolumn">
        <div class="footer__container__firstcolumn__logo">
          <img src="../assets/logo.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus
          commodi cupiditate, aliquam dolores id eaque. Fugiat nemo laborum
          voluptatem eveniet accusamus, consequuntur ipsam at commodi ipsa
          sapiente dolorem eos.
        </p>
        <button>Know More</button>
      </div>
      <div class="footer__container__secondcolumn">
        <h3>Cotacts</h3>
        <hr color="#d6cf70">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ad.
        </p>
        <p class="mail"><span>Mail: </span> <a href="mailto:abdulbasetbappy@hotmail.com">example@admin.com</a></p>
        <p class="call"><span>Phone: </span> <a href="tel:+4733378901">+99-48-878-786</a></p>
        <div class="social__icons">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
          <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="icon" :icon="['fab', 'tiktok']" />
        </div>
      </div>
      <div class="footer__container__thirdcolumn">
        <h3>Quick Links</h3>
        <hr color="#d6cf70">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer__container__fourthcolumn">
        <h3>Location</h3>
        <hr color="#d6cf70">
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58441.60438620015!2d90.35103142324348!3d23.72596447218989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d73a64e709%3A0x65a4e99bd5bb0ebd!2sOld%20Dhaka%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706457341875!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="install_logo">
          <img src="../assets/playstore.png" alt="" />  
          <img src="../assets/applestore.png" alt="" />
        </div>
      </div>
    </div>
    <!--Footer Container End-->
    <div class="footer__end">
      <hr color="#d6cf70">
      <p>© 2021 All Rights Reserved by <span>WeTechPro</span></p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../styles/Pages/footerlayout";
</style>
