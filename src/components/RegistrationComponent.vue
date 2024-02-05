<template>
    <div class="container">
            <div class="form-container sign-in">
                <form>
                    <h1>Sign Up</h1>
                    <div class="social-icons">
                        <a href="#" class="icon"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
                        <a href="#" class="icon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        <a href="#" class="icon"><font-awesome-icon :icon="['fab', 'github']" /></a>
                        <a href="#" class="icon"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <a href="#">→ Forget Your Password? ←</a>
                    <button>
                        <router-link to="/login">Sign up</router-link>
                    </button>
                </form>
            </div>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button class="hidden" id="register"><router-link to="registration">Sign in</router-link></button>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script lang="ts" setup>
    
    </script>
    
    <style lang="scss" scoped>
    @import '../styles/Pages/registrationComponent';
    </style>