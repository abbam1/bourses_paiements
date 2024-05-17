<template>
  <body>
    <div class="sufee-login d-flex align-content-center flex-wrap">
      <div class="container">
        <div class="login-content">
          <div class="login-logo">
            <a href="#">
              <img
                class="align-content"
                src="/src/images/logo.png"
                width="300px"
                alt=""
              />
            </a>
          </div>
          <div class="login-form">
            <form>
              <div class="form-group">
                <h2 style="text-align: center; color: green">Code OTP</h2>
                <h5 style="text-align: center">
                  Veuillez entrer l'otp envoyé a votre numéro
                </h5>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Code OTP"
                />
              </div>
              <button
                class="btn btn-primary btn-flat m-b-15"
                @click="$router.push('/dashboard')"
                type="button"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
