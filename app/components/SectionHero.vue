<script setup lang="ts">
const scrollToProducts = () => {
  const productsSection = document.getElementById('produtos')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="section-hero" class="hero">
    <!-- Bloco 1: Pilar Lateral (Fora do quadrado central) -->
    <div class="hero__pillar hero__pillar--pattern">
      <div class="hero__wireframe">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="hero__wireframe-svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="0.5" />
          <g transform="translate(100,100)">
            <ellipse v-for="i in 12" :key="i" rx="85" ry="30" fill="none" stroke="currentColor" stroke-width="0.3" :transform="`rotate(${i * 15})`" />
          </g>
        </svg>
      </div>
    </div>

    <!-- O "Quadrado Central": Container que agrupa texto e foto com respiro nas bordas -->
    <div class="hero__main-container">
      
      <!-- Bloco de Texto (Canto Esquerdo do Quadrado) -->
      <div class="hero__content-block">
        <div class="hero__text-wrapper">
          <h1 class="hero__title">
            Mesa <br />&amp; Cia
          </h1>
          
          <div class="hero__info">
            <p class="hero__description">
              Detalhes pensados para tornar cada ocasião especial e sua mesa inesquecível.
            </p>
            
            <div class="hero__actions hero__actions--desktop">
              <BaseButton variant="primary" @click="scrollToProducts">
                Conhecer Coleções
              </BaseButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Bloco de Imagem (Lado Direito do Quadrado) -->
      <div class="hero__photo-block">
        <div class="hero__image-wrapper">
          <img
            src="/img/mesa-inicio.jpg"
            alt="Léia Mesa & Cia - Mesa Posta"
            class="hero__img"
          />
          
          <!-- Esferas Douradas Flutuantes -->
          <div class="hero__sphere hero__sphere--1"></div>
          <div class="hero__sphere hero__sphere--2"></div>
          <div class="hero__sphere hero__sphere--3"></div>
        </div>

        <!-- Wireframe sobre a foto (canto superior) -->
        <div class="hero__wireframe hero__wireframe--top">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="hero__wireframe-svg">
            <g transform="translate(100,100)">
              <ellipse v-for="i in 24" :key="i" rx="95" ry="35" fill="none" stroke="currentColor" stroke-width="0.2" :transform="`rotate(${i * 7.5})`" />
            </g>
          </svg>
        </div>
      </div>
      
      <!-- Botão exclusivo para Mobile (Abaixo da imagem no fluxo mobile) -->
      <div class="hero__actions hero__actions--mobile">
        <BaseButton variant="primary" @click="scrollToProducts">
          Conhecer Coleções
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ─── Hero: Fundo claro total ─── */
.hero {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-color: #EDE7DE; 
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
}

/* ─── Pilar Lateral de Pattern ─── */
.hero__pillar--pattern {
  width: 15%;
  height: 100%;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  z-index: 0; /* Move para o fundo total */
}

/* ─── O Quadrado Central (Container Principal do Conteúdo) ─── */
/* Ele flutua sobre o fundo, criando as margens claras (moldura) */
.hero__main-container {
  flex: 1;
  display: flex;
  margin: 8vh 5% 5vh 0; 
  background-color: #F2EDE4; 
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  position: relative;
  z-index: 2; /* Fica sobre o pilar lateral */
}

/* ─── Bloco de Texto (Canto Esquerdo do Quadrado) ─── */
.hero__content-block {
  width: 42%;
  background-color: #B5A49A; /* O Marrom/Tan do modelo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  position: relative;
  z-index: 10;
  overflow: hidden; /* Para conter o noise do ::after */
}

/* Camada de Noise (Mais robusta para produção) */
.hero__content-block::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  opacity: 0.4; /* Ajuste para dar o tom certo de textura */
  pointer-events: none;
  z-index: -1;
}

/* ─── Bloco de Imagem (Lado Direito do Quadrado) ─── */
.hero__photo-block {
  flex: 1;
  position: relative;
  background-color: #EDE7DE;
  display: flex;
  align-items: stretch;
}

.hero__image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5; /* Garante que a imagem e as esferas fiquem na frente */
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ─── Elementos Visuais e Tipografia ─── */
.hero__text-wrapper {
  color: #1A1A1A;
}

.hero__label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: #1A1A1A;
  margin-bottom: 2rem;
  opacity: 0.6;
}

.hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.8rem, 6.5vw, 6.8rem); 
  font-weight: 700;
  line-height: 0.9; 
  letter-spacing: -0.02em;
  color: #2D1E17; /* Marrom profundo, quase preto */
  margin-bottom: 3rem;
}

.hero__info {
  margin-top: auto;
}

.hero__description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem; 
  font-weight: 600; /* Aumentado para não ficar muito fino sobre o ruído */
  line-height: 1.5;
  max-width: 380px; 
  color: #2D1E17; /* Mesma cor do título para harmonia */
  opacity: 0.9; /* Aumentado de 0.8 para 0.9 para melhor contraste */
  margin-bottom: 2.5rem; /* Espaço para o botão */
}

.hero__actions {
  display: flex;
  gap: 1rem;
}

.hero__actions--mobile {
  display: none;
}

/* SVG Patterns */
.hero__wireframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250%;
  transform: translate(-50%, -50%);
  color: #B5A49A;
  opacity: 0.4;
  pointer-events: none;
  z-index: 0; 
}

.hero__wireframe--top {
  top: 0;
  left: 80%;
  width: 80%;
  transform: translate(-50%, -40%);
  z-index: 0; 
}

.hero__wireframe-svg { width: 100%; height: auto; }

/* Esferas */
.hero__sphere {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #F0D47A 0%, #D4AF37 50%, #8B7500 100%);
  box-shadow: inset -5px -5px 15px rgba(0,0,0,0.4), 10px 10px 30px rgba(0,0,0,0.25);
  z-index: 10; /* Garante visibilidade máxima */
  pointer-events: none;
}

/* ─── Mobile ─── */
@media (max-width: 1024px) {
  .hero { height: auto; flex-direction: column; }
  .hero__pillar--pattern { display: none; }
  .hero__main-container { 
    margin: 0; 
    flex-direction: column;
    background-color: transparent; 
  }
  
  .hero__content-block { 
    width: 100%; 
    padding: 5rem 1.5rem 2rem 1.5rem; 
    text-align: center;
    align-items: center;
  }

  .hero__title { 
    font-size: clamp(3rem, 14vw, 4.8rem); /* Reduzido de 4rem/18vw/6rem */
    text-align: center;
    margin-bottom: 2rem;
  }

  .hero__actions--desktop {
    display: none;
  }

  .hero__actions--mobile {
    display: flex;
    justify-content: center;
    padding: 2rem 1.5rem 5rem 1.5rem;
    width: 100%;
  }

  .hero__description { 
    text-align: center; 
    margin: 0 auto; 
    font-size: 1.15rem; /* Reduzido para harmonizar */
    max-width: 100%;
    margin-bottom: 0; /* Remove margem no mobile já que o botão saiu daqui */
  }

  /* Aplicação da Moldura Moderna na Foto */
  .hero__photo-block { 
    height: 70vh; 
    padding: 1.5rem; /* Cria o distanciamento da borda da tela */
    background-color: transparent;
  }

  .hero__image-wrapper {
    border-radius: 2.5rem 2.5rem 0 2.5rem; /* Forma moderna assimétrica */
    border: 10px solid #F2EDE4; /* Bege suave em vez de branco puro */
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }
}
</style>
