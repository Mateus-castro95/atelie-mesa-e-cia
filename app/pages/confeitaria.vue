<template>
  <main class="confectionery-page">
    <div class="container">
      <h1 class="page-title">Confeitaria</h1>
      <p class="page-description">Doçura e elegância em cada detalhe. Lançamento em breve.</p>
    </div>
  </main>
</template>

<style scoped>
.confectionery-page {
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
