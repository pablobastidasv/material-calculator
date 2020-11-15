<template lang="pug">
  .container
    nav.navbar
      .navbar-brand
        a.navbar-item(href="https://bulma.io")
          img(src="/logo.png" width="112" height="28")

      #navbarBasicExample.navbar-menu
        .navbar-start
          router-link.navbar-item(to="/drywall_calculator") Home
          router-link.navbar-item(to="/drywall_calculator") Drywall Calculator

    router-view
</template>
