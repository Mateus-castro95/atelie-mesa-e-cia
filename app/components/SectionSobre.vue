<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutSection = ref(null)
const isVisible = ref(false)

const scrollToProducts = () => {
  const productsSection = document.getElementById('produtos')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.3 // Aumentado levemente para a animação começar com a seção um pouco mais dentro da tela
  })

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})
</script>

<template>
  <section id="sobre" ref="aboutSection" class="about" :class="{ 'is-active': isVisible }">
    <!-- Divisor Elegante: Fio Dourado -->
    <div class="section-divider"></div>
    
    <div class="about__container">
      
      <!-- Lado Esquerdo: Conteúdo de Texto -->
      <div class="about__content animate-slide-right">
        <div class="about__text-wrapper">
          <span class="about__label">NOSSA HISTÓRIA</span>
          <h2 class="about__title">Sobre a Mesa &amp; Cia</h2>
          <div class="about__text-group">
            <p class="about__text">
              Mesa &amp; Cia nasceu da paixão por receber bem e pela beleza dos detalhes. 
              Cada composição é criada com carinho, buscando trazer elegância e personalidade 
              para cada mesa.
            </p>
            <p class="about__text">
              Acreditamos que momentos especiais merecem um cenário à altura, e é por isso 
              que cuidamos de cada detalhe para tornar sua ocasião inesquecível.
            </p>
          </div>
        </div>

        <!-- Botão alinhado com a base da foto -->
        <div class="about__actions animate-button-reveal">
          <BaseButton variant="primary" @click="scrollToProducts">Conheça nosso trabalho</BaseButton>
        </div>
      </div>

      <!-- Lado Direito: Foto do Ateliê -->
      <div class="about__photo-wrapper animate-reveal">
        <div class="about__image-container">
          <!-- Placeholder para a foto do ateliê -->
          <img 
            src="/img/secao-sobre.jpg" 
            alt="Interior do Ateliê Mesa & Cia" 
            class="about__img"
          />
          <!-- Detalhe decorativo que conversa com a Hero -->
          <div class="about__frame-detail"></div>
        </div>
    </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 10rem 5%;
  background-color: #EDE7DE;
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  overflow: hidden;
  position: relative; /* Para posicionar o divisor */
}

/* Divisor Fio Dourado */
.section-divider {
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg, 
    rgba(212, 175, 55, 0) 0%, 
    rgba(212, 175, 55, 0.8) 50%, 
    rgba(212, 175, 55, 0) 100%
  );
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  z-index: 5;
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: stretch; /* Garante que as colunas tenham a mesma altura */
}

/* ─── Estados Iniciais das Animações ─── */
.animate-slide-right {
  opacity: 0;
  transform: translateX(-60px);
  transition: all 1.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.animate-reveal {
  opacity: 0;
  transform: scale(0.9) translateY(40px);
  transition: all 2s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 0.5s;
}

.about__text-group {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.5s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 1s;
}

.animate-button-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.5s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 1.5s; /* Entra por último */
}

/* ─── Ativação das Animações ao Rolar ─── */
.about.is-active .animate-slide-right {
  opacity: 1;
  transform: translateX(0);
}

.about.is-active .animate-reveal {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.about.is-active .about__text-group {
  opacity: 1;
  transform: translateY(0);
}

.about.is-active .animate-button-reveal {
  opacity: 1;
  transform: translateY(0);
}

/* Lado Esquerdo */
.about__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0; /* Pequeno ajuste para o botão não colar no fundo da seção */
}
.about__label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: #B5A49A;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.about__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 4vw, 4rem);
  color: #2D1E17;
  line-height: 1.1;
  margin-bottom: 2.5rem;
}

.about__text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.8;
  color: #4A3B33;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

/* Lado Direito */
.about__photo-wrapper {
  position: relative;
}

.about__image-container {
  position: relative;
  z-index: 2;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);
  /* Mantém a proporção vertical elegante */
  aspect-ratio: 4 / 5;
}

.about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.about__img:hover {
  transform: scale(1.05);
}

/* Moldura decorativa atrás da foto */
.about__frame-detail {
  position: absolute;
  top: 2rem;
  right: -2rem;
  bottom: -2rem;
  left: 2rem;
  border: 1px solid #B5A49A;
  border-radius: 1rem;
  z-index: 1;
  pointer-events: none;
}

.about__photo-hint {
  position: absolute;
  bottom: -3rem;
  right: 0;
  font-size: 0.75rem;
  color: #B5A49A;
  font-family: Arial, sans-serif;
  letter-spacing: 0.05em;
  opacity: 0.6;
}

/* ─── Mobile ─── */
@media (max-width: 1024px) {
  .about {
    padding: 6rem 1.5rem;
  }

  .about__container {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  .about__text {
    font-size: 1.15rem;
  }

  .about__photo-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  .about__frame-detail {
    display: none;
  }

  /* Ajuste de animação mobile para ser apenas vertical */
  .animate-slide-right, .animate-reveal {
    transform: translateY(30px) translateX(0);
  }
}
</style>
