# 🌍 ExploreMundo - Projeto Bibliotecas JavaScript
**Disciplina:** Programação Web I  
**Tema:** Plataforma de Turismo e Viagens Globais  
**Status:** Completo e Pronto para Apresentação  

---

## 🎯 Objetivo do Projeto
Atender aos critérios definidos na atividade prática:
1. Construir uma página Web temática que utilize **3 bibliotecas JavaScript de funcionalidades diferentes**.
2. Demonstrar o consumo e importação de bibliotecas externas via CDN (`<link>` e `<script>`).
3. Criar uma **apresentação de slides** detalhando o funcionamento, utilidade e implementação de cada biblioteca.
4. Apresentar a solução para a sala de aula.

---

## 📦 Bibliotecas JavaScript Utilizadas

| Biblioteca | Versão | Categoria | Para que serve no projeto |
| :--- | :--- | :--- | :--- |
| **1. Swiper.js** | v11 | Carrossel / Slider Touch | Apresenta os destinos mais procurados com efeito **Coverflow 3D**, permitindo arrastar cards com o mouse ou toque, com rotação dinâmica e paginação. |
| **2. Leaflet.js** | v1.9 | Mapas & Geolocalização | Renderiza um mapa-múndi interativo com marcadores personalizados em cada destino, popups informativos com foto/preço e animação `map.flyTo()` para navegação rápida. |
| **3. AOS.js** | v2.3 | Animações ao Rolar (Scroll Reveal) | Aplica animações de entrada (`fade-up`, `zoom-in`) aos cards de pacotes turísticos e estatísticas conforme o usuário rola a página. |
| **Bônus: canvas-confetti** | v1.9 | Microinterações e Partículas | Dispara uma chuva de confetes festivos coloridos no Canvas ao confirmar a reserva de um pacote turístico. |

---

## 📂 Estrutura de Arquivos

```text
ExploreMundo/
│
├── index.html        # Página principal do projeto com as 3 bibliotecas integradas
├── slides.html       # Apresentação interativa de slides pronta para o projetor
├── README.md         # Documentação e roteiro de estudo
│
├── css/
│   └── style.css     # Estilos complementares, personalização do Leaflet e Swiper
│
└── js/
    └── main.js       # Código JavaScript comentado passo a passo para cada biblioteca
```

---

## 🚀 Como Executar o Projeto

1. Abra a pasta `ExploreMundo` na sua Área de Trabalho ou no seu editor.
2. Dê um duplo clique no arquivo **`index.html`** para abrir o site no Google Chrome ou Microsoft Edge.
3. Para abrir os slides da apresentação, dê um duplo clique no arquivo **`slides.html`** (ou clique no botão **"Slides da Apresentação"** no topo do site).

---

## 🎤 Roteiro de Fala para a Apresentação na Sala

### 1. Abertura (Slide 1 e 2)
> *"Boa tarde professor e colegas. O nosso projeto se chama **ExploreMundo**, uma plataforma interativa de viagens. O objetivo foi aplicar 3 bibliotecas JavaScript de naturezas diferentes para enriquecer a experiência do usuário sem precisar reescrever funcionalidades complexas do zero."*

### 2. Biblioteca 1 - Swiper.js (Slide 3)
> *"A primeira biblioteca escolhida foi o **Swiper.js**. Ela resolve o problema de criar sliders touch responsivos. No nosso site, utilizamos o efeito 3D Coverflow com rotação e profundidade nos destinos turísticos mais procurados. Para usá-la, importamos o CSS e o JS pelo CDN do jsDelivr e instanciamos o objeto `new Swiper()` no JavaScript com opções como `effect: 'coverflow'`, `centeredSlides: true` e `autoplay`."*

### 3. Biblioteca 2 - Leaflet.js (Slide 4)
> *"A segunda biblioteca é o **Leaflet.js**, a mais conceituada para mapas interativos de código aberto. Escolhemos o Leaflet porque ele não exige chaves de API restritivas do Google e é extremamente leve. Criamos o mapa com `L.map('mapa-turismo')`, adicionamos tiles do CartoDB/OpenStreetMap e plotamos marcadores com `L.marker().bindPopup()`. Além disso, quando o usuário clica em 'Ver no Mapa' no carrossel, usamos a função `map.flyTo()` para voar suavemente até as coordenadas exatas daquele país."*

### 4. Biblioteca 3 - AOS (Animate On Scroll) (Slide 5)
> *"A terceira biblioteca é o **AOS (Animate On Scroll)**. Ela escuta o evento de rolagem do navegador e ativa classes de animação CSS nos elementos assim que eles entram na tela. No HTML, basta adicionar o atributo `data-aos="fade-up"` e definir um atraso em cascata com `data-aos-delay="200"`. Inicializamos com `AOS.init({ duration: 850, once: true })`."*

### 5. Biblioteca Bônus - canvas-confetti (Slide 6)
> *"Como bônus, incluímos o **canvas-confetti** (que o professor citou nos slides de exemplo). Ela gera partículas físicas na tela. Usamos no botão de confirmação de reserva do pacote para dar um feedback visual imediato e agradável ao usuário."*

### 6. Demonstração Prática (Slide 7 e 8)
> *(Alterne para a aba do `index.html`, arraste o Swiper, mostre a animação do mapa Leaflet voando até o Japão/Fernando de Noronha, role para ver os cards do AOS e clique em 'Reservar Pacote' para mostrar os confetes).*

---

## ❓ Perguntas Prováveis do Professor & Como Responder

**P: Como vocês importaram as bibliotecas?**  
*R:* *"Importamos via CDN através das tags `<link rel="stylesheet">` no `<head>` para os estilos e `<script src="...">` no final do `<body>` para os arquivos JavaScript."*

**P: As bibliotecas interferem umas nas outras?**  
*R:* *"Não, cada biblioteca opera no seu próprio escopo e manipula elementos DOM distintos (Swiper no container do carrossel, Leaflet na div do mapa e AOS através de atributos `data-aos`). Inclusive, criamos uma comunicação coordenada onde um clique no card do Swiper chama o método `flyTo` do Leaflet."*

**P: O que aconteceria se a internet caísse?**  
*R:* *"Como usamos CDN, os arquivos são carregados pela rede. Em um ambiente de produção offline, poderíamos baixar os arquivos `.min.js` e `.min.css` para pastas locais do projeto."*
