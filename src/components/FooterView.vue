<template>
  <div>
    <footer class="bg-light py-3 mt-auto">
      <div class="container text-center">
        <small class="text-muted mb-0">
          <a href="https://github.com/HamidByte/">
            <span class="brand-name">Hamid</span>
          </a>
          &bull; All rights reserved
          <font-awesome-icon icon="fa-copyright" />
          2022
        </small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  font-size: 1.2em;
}

.brand-name {
  font-weight: bold;
  color: #495057;
}

.brand-name:hover {
  font-weight: bold;
  color: #007bff;
}
</style>
