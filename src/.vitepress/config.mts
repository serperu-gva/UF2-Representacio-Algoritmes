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
      title: 'UF2 - Representación de Algoritmos',
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
              { text: '💡 Ejemplos', link: '/8-exemples' },
              { text: '✏️ Ejercicios', link: '/7-enunciats' }
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    sidebar: {
      '/': [
        { text: '📚 Contenidos', items: [
            { text: '1. Introducción', link: '/1-introduccio' },        
            { text: '2. Tipos de representación de algoritmos', link: '/2-representacio' },
            { text: '3. Instrucciones básicas', link: '/3-instruccions' },
            { text: '4. Estructuras de control', link: '/4-estructures' },
            { text: '5. Casos de estudio y patrones comunes', link: '/5-casos-estudi' },
            { text: '6. Herramientas digitales para diagramas de flujo', link: '/6-eines-digitals' },
            { text: '💡 Ejemplos', link: '/8-exemples' },
            { text: '✏️ Ejercicios', link: '/7-enunciats' },
            { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' }
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
