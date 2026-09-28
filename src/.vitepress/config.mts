import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF2-Representacio-Algoritmes/',
  outDir: '../docs',
  markdown: {    
    mermaid: true,
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF2 - Fundamentos de Programación',
      description: 'Unidad 2 donde se abordan los conceptos básicos de representación de algoritmos.',
      themeConfig: {
        siteTitle: 'Representación de </br>Algoritmos',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },        
              { text: '2. Tipos de representación de algoritmos', link: '/2-representacio' },
              { text: '3. Instrucciones básicas', link: '/3-instruccions' },
              { text: '4. Estructuras de control', link: '/4-estructures' },
              { text: '5. Casos de estudio y patrones comunes', link: '/5-casos-estudi' },
              { text: '6. Herramientas digitales para diagramas de flujo', link: '/6-eines-digitals' },
              { text: '✏️ Ejercicios', link: '/7-enunciats' },
              { text: '💡 Ejemplos', link: '/8-exemples' },
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'UF2 - Representació </br>d\'algoritmes',
      description: 'Unitat 2 on s\'aborden els conceptes bàsics de representació d\'algoritmes.',
      themeConfig: {
        siteTitle: 'Representació d\'algoritmes',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },        
              { text: '2. Tipus de representació d\'algoritmes', link: '/ca/2-representacio' },
              { text: '3. Instruccions bàsiques', link: '/ca/3-instruccions' },
              { text: '4. Estructures de control', link: '/ca/4-estructures' },
              { text: '5. Casos d\'estudi i patrons comuns', link: '/ca/5-casos-estudi' },
              { text: '6. Eines digitals per a diagrames de flux', link: '/ca/6-eines-digitals' },
              { text: '✏️ Exercicis', link: '/ca/7-enunciats' },
              { text: '💡 Exemples', link: '/ca/8-exemples' },
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        { text: '📚 Contenidos', items: [
            { text: '1. Introducción', link: '/1-introduccio' },        
            { text: '2. Tipos de representación de algoritmos', link: '/2-representacio' },
            { text: '3. Instrucciones básicas', link: '/3-instruccions' },
            { text: '4. Estructuras de control', link: '/4-estructures' },
            { text: '5. Casos de estudio y patrones comunes', link: '/5-casos-estudi' },
            { text: '6. Herramientas digitales para diagramas de flujo', link: '/6-eines-digitals' },
            { text: '✏️ Ejercicios', link: '/7-enunciats' },
            { text: '💡 Ejemplos', link: '/8-exemples' },
            { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
            { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
          ]
        }
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
            { text: '1. Introducció', link: '/ca/1-introduccio' },        
            { text: '2. Tipus de representació d\'algoritmes', link: '/ca/2-representacio' },
            { text: '3. Instruccions bàsiques', link: '/ca/3-instruccions' },
            { text: '4. Estructures de control', link: '/ca/4-estructures' },
            { text: '5. Casos d\'estudi i patrons comuns', link: '/ca/5-casos-estudi' },
            { text: '6. Eines digitals per a diagrames de flux', link: '/ca/6-eines-digitals' },
            { text: '✏️ Exercicis', link: '/ca/7-enunciats' },
            { text: '💡 Exemples', link: '/ca/8-exemples' },
            { text: '<img src="../img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
            { text: '<img src="../img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
          ]
        }
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
