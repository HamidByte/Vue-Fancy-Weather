<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand"
      >
        Fancy Weather
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <router-link
              to="/"
              class="nav-link active"
            >
              Home
            </router-link> -->
          </li>
        </ul>
        <ul class="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >
              About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
    }
  },
}
</script>
