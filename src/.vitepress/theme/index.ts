// .vitepress/theme/index.ts
import type { Theme, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import customEnhanceApp from './enhanceApp'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp?.(ctx)
    enhanceAppWithTabs(ctx.app)
    customEnhanceApp(ctx)
    
    if (typeof window !== 'undefined') {
      const initMermaid = async () => {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default'
          });
          
          const renderDiagrams = () => {
            document.querySelectorAll('.language-mermaid:not([data-processed])').forEach((el, i) => {
              const code = el.textContent?.replace(/^mermaid\s*/i, '').trim();
              if (code) {
                el.setAttribute('data-processed', 'true');
                mermaid.render(`diagram-${i}`, code).then(result => {
                  const div = document.createElement('div');
                  div.innerHTML = result.svg;
                  el.parentNode?.insertBefore(div, el);
                  (el as HTMLElement).style.display = 'none';
                });
              }
            });
          };
          
          renderDiagrams();
          new MutationObserver(renderDiagrams).observe(document.body, { childList: true, subtree: true });
        } catch (error) {
          console.error('Mermaid error:', error);
        }
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMermaid);
      } else {
        initMermaid();
      }
    }
  }
} satisfies Theme
