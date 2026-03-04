# 🤖 Landing Page Interativa com Robôs 3D

## 🎯 Descrição do Projeto

Landing page moderna e altamente interativa desenvolvida com **HTML5**, **CSS3** e **JavaScript ES6+**, apresentando robôs 3D dinâmicos, sistema de temas dark/light, efeitos de partículas e conteúdo adaptativo.

## ✨ Funcionalidades Principais

### � Sistema Dark/Light Mode
- **Toggle animado** com ícones de sol e lua
- **Persistência de tema** via localStorage
- **Transições suaves** entre modos
- **Conteúdo dinâmico** que muda completamente com o tema

### 🤖 Robôs 3D Interativos (Spline)
Dois robôs 3D que alternam automaticamente conforme o tema:

**SHADOW NEXUS** (Modo Dark):
- Robô de design futurista em tons escuros
- Representa tecnologia de ponta e inovação
- URL: `https://prod.spline.design/Wa3a2rQYFgusLcQK/scene.splinecode`

**LUMINA PRIME** (Modo Light):
- Robô elegante em tons claros
- Simboliza eficiência e modernidade
- URL: `https://prod.spline.design/9voLUNt7tdJxUq2H/scene.splinecode`
- Escala reduzida para melhor proporção visual

### 🎨 Detalhes Decorativos de Fundo
Elementos visuais que criam profundidade e atmosfera:

**Modo Light:**
- Gradientes radiais em roxo lavanda e laranja pêssego
- 4 camadas de gradientes estrategicamente posicionados
- Opacidades otimizadas para visibilidade sem sobrecarga visual

**Modo Dark:**
- Gradientes mais intensos em roxo escuro e laranja vibrante
- Camadas adicionais para maior profundidade
- Atmosfera imersiva que complementa o robô SHADOW NEXUS

Características técnicas:
- `z-index: 0` para ficarem atrás de todo conteúdo
- `pointer-events: none` para não interferir na interação
- Transições automáticas ao trocar de tema

### � Conteúdo Dinâmico por Tema

**Títulos e Subtítulos:**
- Modo Dark: "SHADOW NEXUS" + "O Futuro da Tecnologia Está Aqui"
- Modo Light: "LUMINA PRIME" + "Inovação que Ilumina o Caminho"

**Descrições Personalizadas:**
- Ícones do Font Awesome específicos para cada robô
- Textos descritivos únicos para cada modo
- Destaques visuais com cores temáticas

**Carrossel Temático:**
- Conteúdo completamente diferente para cada modo
- Ícones, títulos e descrições adaptados ao robô ativo
- Cards com informações relevantes ao contexto

### 🎪 Carrossel Avançado
- **Navegação circular** sem travamentos
- **Auto-play inteligente** (4 segundos, pausa ao interagir)
- **Navegação por teclado** (setas ← →)
- **Swipe touch** para dispositivos móveis
- **Indicadores de página** (dots) interativos
- **Responsivo**: 2 cards (desktop) → 1 card (mobile)
- **Glassmorphism** nos cards
- **Efeito de sweep** ao hover
- **Dimensionamento dinâmico** baseado no container

### ✨ Particles.js
- **Efeito de partículas** animadas no fundo
- **Interação por hover** (modo grab)
- **Onclick desabilitado** para evitar sobrecarga de partículas
- **Performance otimizada** para não travar a página

### 🎨 Design Moderno
- **Glassmorphism** em cards e elementos
- **Gradientes vibrantes** personalizados por tema
- **Animações suaves** com cubic-bezier
- **Micro-interações** em todos os elementos
- **Tipografia premium** (Plus Jakarta Sans, Sora)
- **Font Awesome 6** para ícones escaláveis

### 📱 Responsividade Premium
- **Mobile-first approach**
- **Breakpoints otimizados**: 900px, 640px, 380px
- **Grid responsivo** adaptativo
- **Tipografia fluida** com clamp()
- **Imagens responsivas** que trocam com o tema

### ♿ Acessibilidade
- **ARIA labels** em todos os botões
- **Suporte completo a teclado**
- **Contraste adequado** em ambos os temas
- **Navegação semântica**

## 🛠️ Tecnologias Utilizadas

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
- **JavaScript ES6+** - Lógica e interatividade

### Bibliotecas Externas
- **Spline Viewer** - Renderização de modelos 3D
- **Particles.js** - Efeito de partículas animadas
- **Font Awesome 6** - Ícones vetoriais
- **Google Fonts** - Tipografia (Plus Jakarta Sans, Sora)

### Técnicas CSS
- CSS Grid e Flexbox
- Custom Properties (variáveis CSS)
- Pseudo-elementos (::before, ::after)
- Gradientes radiais múltiplos
- Backdrop-filter (glassmorphism)
- Animações e transições
- Media queries responsivas

### Técnicas JavaScript
- Classes ES6 (DarkModeToggle, Carousel)
- Event Delegation
- LocalStorage API
- Touch Events
- Keyboard Events
- Resize Observer
- Arrow Functions
- Template Literals

## 📂 Estrutura de Arquivos

```
main-page/
├── index.html              # Estrutura HTML
├── styles.css              # Estilos e animações
├── script.js               # Lógica (DarkMode + Carousel)
├── particles.js            # Configuração do Particles.js
├── img/
│   ├── index.png          # Imagem modo dark
│   └── indexbauru.png     # Imagem modo light
└── README.md              # Documentação
```

## 🚀 Como Executar

1. **Método Direto:**
   ```bash
   # Abra o arquivo index.html no navegador
   start index.html
   ```

2. **Servidor Local (recomendado):**
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```

3. Acesse: `http://localhost:8000`

## 🎯 Funcionalidades Detalhadas

### Dark Mode Toggle
1. Clique no botão de toggle (canto superior direito)
2. Ícone anima entre sol ☀️ e lua 🌙
3. Todo o conteúdo muda instantaneamente:
   - Robô 3D
   - Cores de fundo
   - Títulos e descrições
   - Conteúdo do carrossel
   - Imagem temática
   - Detalhes decorativos
4. Preferência salva no navegador

### Carrossel Interativo
1. **Navegação por botões**: Setas prev/next
2. **Indicadores**: Dots clicáveis
3. **Auto-play**: Troca automática (pausa ao interagir)
4. **Teclado**: ← e → para navegar
5. **Touch**: Swipe horizontal em mobile
6. **Responsivo**: Adapta cards visíveis

### Robôs 3D
- Renderizados em tempo real via Spline
- Interativos (podem ser rotacionados)
- Carregamento otimizado
- Alternância automática por tema

## 📱 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

## 🎨 Paleta de Cores

### Modo Light
- **Background**: #ffffff
- **Text**: #1a1a2e
- **Accent Purple**: #b8a4d9, #9c83c5
- **Accent Orange**: #ffc896, #ffb478
- **Gradientes**: Roxo lavanda + Laranja pêssego

### Modo Dark
- **Background**: #0f0c29 → #302b63 → #24243e
- **Text**: #ffffff
- **Accent Purple**: #8b6fb8, #667eea
- **Accent Orange**: #ff8c42, #ff6b1a
- **Gradientes**: Roxo profundo + Laranja vibrante

## 💡 Destaques Técnicos

- **Arquitetura orientada a objetos** (Classes ES6)
- **Separação de responsabilidades** clara
- **Performance otimizada** (GPU acceleration)
- **Código modular** e reutilizável
- **Sem dependências pesadas** (apenas bibliotecas específicas)
- **LocalStorage** para persistência
- **Event listeners otimizados**
- **Lazy loading** de recursos

## 🔧 Configurações Customizáveis

### Particles.js
- Quantidade de partículas
- Velocidade de movimento
- Cor e opacidade
- Interatividade (hover/click)

### Carrossel
- Delay do auto-play (4000ms)
- Itens visíveis por breakpoint
- Velocidade de transição
- Distância de swipe

### Dark Mode
- Cores personalizáveis via CSS variables
- Transições ajustáveis
- Persistência opcional

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 90+
- **Animações em GPU** (transform, opacity)
- **Otimização de repaints**

---

**Desenvolvido com 💜 e ☕ - Landing Page Interativa com Robôs 3D**
