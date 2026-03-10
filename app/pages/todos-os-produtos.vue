<template>
  <main class="products-page">
    <div class="container">
      <h1 class="page-title">Todos os Produtos</h1>
      <p class="page-description">Em breve, nossa coleção completa disponível para você.</p>
    </div>
  </main>
</template>

<style scoped>
.products-page {
  min-height: 100vh;
  padding-top: 15rem; /* Espaço para o header */
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 5rem);
  color: #2D1E17;
  margin-bottom: 2rem;
}

.page-description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #B5A49A;
  letter-spacing: 0.1em;
}
</style>
