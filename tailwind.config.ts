import type { Config } from 'tailwindcss'

/**
 * tailwind.config.ts — Configuração de tema do site Leia Mesa & Cia
 * Define: paleta de cores semânticas, família de fontes e plugins utilizados.
 */
const config: Config = {
    // Escaneia apenas os arquivos da pasta app/ para purge correto
    content: [
        './app/**/*.{vue,ts,js}',
    ],

    theme: {
        extend: {

            // ─── Paleta de cores ───────────────────────────────────────────
            colors: {

                /**
                 * brand — cor principal da marca (vinho/bordô)
                 * Usada em: títulos, botões primários, elementos de destaque
                 */
                brand: {
                    DEFAULT: '#5D3136',   // bordô principal
                    light: '#7A474D',   // variação mais clara (hover, bordas)
                    dark: '#3D1F23',   // variação mais escura (pressed, sombras)
                    muted: '#8A6568',   // versão dessaturada (texto secundário)
                },

                /**
                 * surface — tons de superfície (fundos de cards, badges, seções)
                 * Variações do bege areia — mesma família do fundo geral
                 */
                surface: {
                    DEFAULT: '#E8E2D9',   // bege areia — fundo base do site
                    soft: '#D4C5BF',   // bege rosado suave (badges, cards leves)
                    dim: '#C4B5AE',   // bege mais escuro (separadores, bordas)
                },

                /**
                 * Cores semânticas — mapeadas sobre a paleta acima
                 * para uso mais legível nas classes Tailwind
                 */

                // Texto principal e secundário
                'text-primary': '#5D3136',   // = brand.DEFAULT
                'text-muted': '#8A6568',   // = brand.muted

                // Fundo geral
                'bg-base': '#E8E2D9',   // = surface.DEFAULT

                // Utilitários de feedback (pode expandir futuramente)
                'success': '#4A7C59',
                'error': '#A63228',
            },

            // ─── Tipografia ────────────────────────────────────────────────
            fontFamily: {
                /**
                 * 'cormorant' — fonte principal do projeto (Google Fonts)
                 * Pesos disponíveis: 300 (Light), 400 (Regular), 600 (SemiBold)
                 * Importada via @import no main.css — sem arquivos locais
                 */
                cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],

                /**
                 * 'sans' — fallback para textos de UI menores
                 */
                sans: ['Arial', 'system-ui', 'sans-serif'],
            },

            // ─── Bordas arredondadas personalizadas ───────────────────────
            borderRadius: {
                'pill': '9999px',   // para badges e botões arredondados
            },
        },
    },

    plugins: [],
}

export default config
