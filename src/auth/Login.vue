<template>
    <div class="sufee-login d-flex align-content-center flex-wrap">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="#">
                        <img class="align-content" src="/src/images/logo.png" width="300px" alt="" />
                        <h1>Paiements des bourses</h1>
                    </a>
                </div>
                <div class="login-form">
                    <form @submit.prevent="connexion">
                        <div class="form-group">
                            <label>Nom d'utilisateur'</label>
                            <input type="text" v-model="login" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label>Mot de passe</label>
                            <input id="password" type="password" v-model="password" class="form-control" />
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-on:change="show_password" />
                                Afficher/Cacher mot de passe
                            </label>
                            <label class="pull-right">
                                <a href="#">Mot de passe oublié?</a>
                            </label>
                        </div>
                        <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">
                            Connexion
                        </button>

                        <!-- <div class="register-link m-t-15 text-center">
                                <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                            </div> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import image_otp from "../images/otp.png";
import { useboursesStore } from "@/store/bourses";
import { useRouter } from "vue-router";
//les données
const router = useRouter()
const store = useboursesStore();
const login = ref("");
const password = ref("");
let token = ref("");
//les fonctions
console.log(store.$state);

const connexion = () => {
    axios
        .post(`${import.meta.env.VITE_APP_API_URL}/api/auth/generateToken`, {
            username: login.value,
            password: password.value,
        })
        .then((response) => {
            token = ref(response.data.content);
            console.log(token.value);
            console.log(response.data)
            if (token.value.length > 0) {
                //modal otp
                swal
                    .fire({
                        imageUrl: `${image_otp}`,
                        imageWidth: 35,
                        imageHeight: 50,
                        imageAlt: "Custom image",
                        title: "Verification par OTP",
                        text: "Vous avez reçu un SMS contenant un code OTP à Saisir en dessous",
                        input: "text",
                        showCancelButton: true,
                        confirmButtonColor: "green",
                        cancelButtonColor: "red",
                        confirmButtonText: "Envoyer",
                        cancelButtonText: "Annuler",
                    })
                    .then((code_otp) => {
                        if (code_otp.isConfirmed) {
                            axios
                                .post(
                                    `${import.meta.env.VITE_APP_API_URL}/api/auth/checkOTP`,
                                    {
                                        otp: code_otp.value,
                                    },
                                    {
                                        headers: {
                                            Authorization: "Bearer " + token.value,
                                        },
                                    }
                                )
                                .then((response) => {
                                    store.$state.login_token = response.data.content;
                                    console.log(store.$state.login_token);
                                    store.setLogin({matricule:login.value,token:store.$state.login_token})
                                    router.push('/dashboard');

                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                            console.log(code_otp.value);
                        }
                    });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const show_password = () => {
    const passwordField = document.getElementById("password");
    console.log(
      JSON.parse(localStorage.getItem('loginInfo').token)
    )


    if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
    else passwordField.setAttribute("type", "password");
};
</script>
