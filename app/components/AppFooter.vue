<template>
  <footer id="footer" class="footer">
    <!-- Divisor Elegante: Fio Dourado (Invertido para o topo do footer) -->
    <div class="section-divider"></div>

    <div class="footer__container">
      
      <!-- 1. Redes Sociais -->
      <div class="footer__section">
        <h4 class="footer__label">Redes Sociais</h4>
        <div class="footer__socials">
          <a href="https://www.instagram.com/atelie_mesaecia" target="_blank" rel="noopener noreferrer" class="footer__social-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="footer__icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/5547999428695" target="_blank" rel="noopener noreferrer" class="footer__social-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="footer__icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-4.7 8.38 8.38 0 0 1 3.8.9L21 11.5Z"></path></svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- 2. Horário de Funcionamento -->
      <div class="footer__section">
        <h4 class="footer__label">Horário</h4>
        <p class="footer__text">Segunda a Sexta<br>das 9h às 18h</p>
      </div>

      <!-- 3. Endereço -->
      <div class="footer__section">
        <h4 class="footer__label">Endereço</h4>
        <p class="footer__text">
          Rua Theodoro Humanhuk, 323 <br>
          Canoinhas - SC
        </p>
        <div class="footer__map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.4187!2d-50.3784034!3d-26.1861959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e71293ba5bf1db%3A0xf29fdf5c995587fb!2sR.%20Theodoro%20Humenhuk%2C%20323%20-%20Campo%20d&#39;%C3%81gua%20Verde%2C%20Canoinhas%20-%20SC%2C%2089460-000!5e0!3m2!1spt-BR!2sbr!4v1710107200000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="150" 
            style="border:0; border-radius: 12px; opacity: 1; filter: contrast(1.1);" 
            allowfullscreen 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>

    <div class="footer__bottom">
      <p>&copy; {{ new Date().getFullYear() }} Mesa &amp; Cia. Todos os direitos reservados.</p>
      <p class="footer__credits">
        <a href="https://cwtech-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Desenvolvido por CW Tech</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #F2EDE4; /* Tom levemente diferente do corpo para destacar */
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  padding: 6rem 5% 2rem 5%;
  position: relative;
  color: #2D1E17;
}

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
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 4rem;
}

.footer__label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #B5A49A;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.footer__text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
}

.footer__socials {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.footer__social-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.footer__social-item:hover {
  color: #D4AF37;
  transform: translateX(5px);
}

.footer__icon {
  width: 20px;
  height: 20px;
}

.footer__map {
  margin-top: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
}

.footer__map:hover {
  filter: grayscale(0);
  transform: translateY(-5px);
}

.footer__bottom {
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(45, 30, 23, 0.05);
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  color: #B5A49A;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__credits a {
  color: #2D1E17;
  text-decoration: underline;
  font-weight: 600;
  transition: all 0.3s ease;
}

.footer__credits a:hover {
  color: #D4AF37;
  text-decoration: none;
}

/* ─── Mobile ─── */
@media (max-width: 1024px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  .footer__socials {
    align-items: center;
  }

  .footer__map {
    max-width: 280px; /* Reduzido para alinhar melhor com o bloco de texto */
    margin: 1.5rem auto 0 auto;
  }

  .footer__map iframe {
    height: 280px; /* Altura ajustada para manter o formato quadrado compacto */
  }
}
</style>
