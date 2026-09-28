/**
 * ==============================================================================
 * ExploreMundo - Script Principal
 * Projeto Bibliotecas JavaScript | Programação Web I
 * 
 * Este arquivo demonstra a integração e uso prático de 3 bibliotecas JS principais:
 * 1. Swiper.js      - Carrossel 3D interativo de destinos
 * 2. Leaflet.js     - Mapa interativo mundial com marcadores e rotas
 * 3. AOS.js         - Animações refinadas ao rolar a página (Animate On Scroll)
 * + Bônus: canvas-confetti - Efeito visual comemorativo nas reservas
 * ==============================================================================
 */

// Dados dos Destinos Turísticos
const DESTINOS = [
  {
    id: 'fernando-noronha',
    nome: 'Fernando de Noronha',
    pais: 'Brasil',
    regiao: 'americas',
    coords: [-3.8549, -32.4230],
    preco: 'R$ 3.890',
    avaliacao: 4.9,
    categoria: 'Praia & Natureza',
    img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&auto=format&fit=crop&q=80',
    descricao: 'Arquipélago vulcânico com praias paradisíacas, águas cristalinas e santuário ecológico de vida marinha.'
  },
  {
    id: 'paris',
    nome: 'Paris',
    pais: 'França',
    regiao: 'europa',
    coords: [48.8566, 2.3522],
    preco: 'R$ 5.490',
    avaliacao: 4.8,
    categoria: 'Cultura & Romance',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80',
    descricao: 'A icônica Cidade Luz com a Torre Eiffel, museus renomados como o Louvre e alta gastronomia mundial.'
  },
  {
    id: 'toquio',
    nome: 'Tóquio',
    pais: 'Japão',
    regiao: 'asia',
    coords: [35.6762, 139.6503],
    preco: 'R$ 6.950',
    avaliacao: 5.0,
    categoria: 'Tecnologia & Tradição',
    img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80',
    descricao: 'Metrópole vibrante que combina arranha-céus futuristas com templos xintoístas históricos e culinária única.'
  },
  {
    id: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    pais: 'Brasil',
    regiao: 'americas',
    coords: [-22.9068, -43.1729],
    preco: 'R$ 1.990',
    avaliacao: 4.7,
    categoria: 'Praia & Carnaval',
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=80',
    descricao: 'A Cidade Maravilhosa, com o Cristo Redentor, Pão de Açúcar, praias de Copacabana e Ipanema.'
  },
  {
    id: 'roma',
    nome: 'Roma',
    pais: 'Itália',
    regiao: 'europa',
    coords: [41.9028, 12.4964],
    preco: 'R$ 4.790',
    avaliacao: 4.9,
    categoria: 'História & Gastronomia',
    img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80',
    descricao: 'Um museu a céu aberto: Coliseu, Fontana di Trevi, Vaticano e as mais deliciosas massas e gelatos italianos.'
  },
  {
    id: 'machu-picchu',
    nome: 'Machu Picchu',
    pais: 'Peru',
    regiao: 'americas',
    coords: [-13.1631, -72.5450],
    preco: 'R$ 3.250',
    avaliacao: 4.9,
    categoria: 'Arqueologia & Aventura',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&auto=format&fit=crop&q=80',
    descricao: 'A lendária cidade perdida dos Incas no alto da Cordilheira dos Andes, um espetáculo de arquitetura e mistério.'
  },
  {
    id: 'bali',
    nome: 'Bali',
    pais: 'Indonésia',
    regiao: 'asia',
    coords: [-8.4095, 115.1889],
    preco: 'R$ 5.100',
    avaliacao: 4.8,
    categoria: 'Praia & Espiritualidade',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    descricao: 'A Ilha dos Deuses com campos de arroz em terraços, templos sagrados na água e pores do sol inesquecíveis.'
  },
  {
    id: 'cairo',
    nome: 'Cairo & Gizé',
    pais: 'Egito',
    regiao: 'africa',
    coords: [30.0444, 31.2357],
    preco: 'R$ 4.980',
    avaliacao: 4.8,
    categoria: 'Civilização Antiga',
    img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&auto=format&fit=crop&q=80',
    descricao: 'As imponentes Pirâmides de Gizé, a Esfinge e tesouros milenares à beira do lendário Rio Nilo.'
  }
];

// Variáveis globais para os objetos das bibliotecas
let destinosSwiper = null;
let mapaLeaflet = null;
let marcadoresMapa = {};

// ==============================================================================
// 1. INICIALIZAÇÃO DA BIBLIOTECA AOS (Animate On Scroll)
// ==============================================================================
function initAOS() {
  /**
   * AOS.init() configura os comportamentos das animações ao rolar a página:
   * - duration: Duração da animação em milissegundos
   * - once: Se true, a animação acontece apenas na primeira vez que o elemento entra na tela
   * - offset: Distância em pixels antes do elemento entrar na viewport para disparar
   * - easing: Curva de aceleração visual da transição
   */
  AOS.init({
    duration: 850,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
  });
  console.log('[AOS] Biblioteca inicializada com sucesso.');
}

// ==============================================================================
// 2. INICIALIZAÇÃO DA BIBLIOTECA SWIPER.JS (Carrossel 3D de Destinos)
// ==============================================================================
function initSwiper() {
  /**
   * Renderiza os slides dinamicamente no container do Swiper
   */
  const swiperWrapper = document.getElementById('swiper-destinos-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = DESTINOS.map(destino => `
      <div class="swiper-slide group" data-destino-id="${destino.id}">
        <img src="${destino.img}" alt="${destino.nome}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
          <span class="inline-block bg-teal-500/90 text-slate-950 text-xs font-black uppercase px-2.5 py-1 rounded-full w-max mb-2 backdrop-blur-sm">
            ${destino.categoria}
          </span>
          <h3 class="text-2xl font-black text-white leading-tight">${destino.nome}</h3>
          <p class="text-teal-300 text-sm font-semibold flex items-center gap-1 mt-0.5">
            <span>📍</span> ${destino.pais} • ⭐ ${destino.avaliacao}
          </p>
          <p class="text-slate-300 text-xs mt-2 line-clamp-2">${destino.descricao}</p>
          <div class="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              <span class="text-[10px] uppercase text-slate-400 block font-bold">A partir de</span>
              <span class="text-white font-black text-lg">${destino.preco}</span>
            </div>
            <button onclick="focarNoMapa('${destino.id}')" class="px-3.5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-lg shadow-teal-500/20">
              <span>Ver no Mapa</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /**
   * Configuração do Swiper com efeito 3D Coverflow moderno
   */
  destinosSwiper = new Swiper('.destinos-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 180,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3800,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  console.log('[Swiper] Carrossel 3D inicializado com sucesso.');
}

let camadaSatelite = null;
let camadaRotulos = null;
let camadaRuas = null;

// ==============================================================================
// 3. INICIALIZAÇÃO DA BIBLIOTECA LEAFLET.JS (Mapa Interativo Mundial)
// ==============================================================================
function initLeafletMap() {
  const mapElement = document.getElementById('mapa-turismo');
  if (!mapElement) return;

  /**
   * L.map() inicializa o mapa na div com ID 'mapa-turismo'
   * setView([latitude, longitude], zoomLevel)
   */
  mapaLeaflet = L.map('mapa-turismo', {
    center: [20, 0],
    zoom: 2.2,
    minZoom: 2,
    maxZoom: 18,
    scrollWheelZoom: false // Evita que a rolagem da página fique presa no mapa
  });

  /**
   * Camadas de Mapa (Tiles):
   * 1. Satélite Real de Alta Resolução (Esri World Imagery)
   * 2. Rótulos e Limites de Países (Esri Reference Boundaries & Places)
   * 3. Mapa de Ruas / Político (OpenStreetMap)
   */
  camadaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Imagens de Satélite Maxar/Earthstar Geographics',
    maxZoom: 19
  });

  camadaRotulos = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Rótulos &copy; Esri',
    maxZoom: 19
  });

  camadaRuas = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

  // Ativa por padrão a visualização de Satélite Híbrido (Satélite + Nomes de Países e Cidades)
  camadaSatelite.addTo(mapaLeaflet);
  camadaRotulos.addTo(mapaLeaflet);

  // Adiciona controle de camadas nativo do Leaflet no canto superior direito
  const baseLayers = {
    "🛰️ Satélite Híbrido": L.layerGroup([camadaSatelite, camadaRotulos]),
    "🛰️ Satélite Puro": camadaSatelite,
    "🗺️ Mapa Urbano": camadaRuas
  };
  L.control.layers(baseLayers, null, { position: 'topright' }).addTo(mapaLeaflet);

  // Força o recalculo do tamanho do mapa para garantir renderização perfeita
  setTimeout(() => {
    mapaLeaflet.invalidateSize();
  }, 250);

  /**
   * Criação do ícone de marcador personalizado usando L.divIcon
   */
  const customIcon = L.divIcon({
    className: 'custom-leaflet-icon',
    html: `<div class="custom-pin"><span>✈</span></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

  /**
   * Adiciona marcadores para cada um dos destinos turísticos
   */
  DESTINOS.forEach(destino => {
    const popupContent = `
      <div class="w-64 text-left">
        <img src="${destino.img}" alt="${destino.nome}" class="w-full h-32 object-cover rounded-t-xl">
        <div class="p-4 bg-slate-900">
          <div class="flex items-center justify-between mb-1">
            <span class="text-teal-400 font-bold text-xs uppercase tracking-wider">${destino.pais}</span>
            <span class="text-amber-400 font-bold text-xs">★ ${destino.avaliacao}</span>
          </div>
          <h4 class="text-lg font-bold text-white mb-1">${destino.nome}</h4>
          <p class="text-slate-300 text-xs line-clamp-2 mb-3">${destino.descricao}</p>
          <div class="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <span class="text-[10px] text-slate-400 block font-semibold">Valor do Pacote</span>
              <span class="text-teal-400 font-bold text-base">${destino.preco}</span>
            </div>
            <button onclick="abrirModalReserva('${destino.nome}', '${destino.preco}')" class="px-3 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg transition shadow">
              Reservar
            </button>
          </div>
        </div>
      </div>
    `;

    const marker = L.marker(destino.coords, { icon: customIcon })
      .addTo(mapaLeaflet)
      .bindPopup(popupContent, { maxWidth: 280 });

    marcadoresMapa[destino.id] = marker;
  });

  console.log('[Leaflet] Mapa de Satélite interativo carregado com', DESTINOS.length, 'marcadores.');
}

/**
 * Função para alternar o tipo de visualização do mapa (Satélite Híbrido, Satélite Puro ou Ruas)
 */
function alternarTipoMapa(tipo) {
  if (!mapaLeaflet || !camadaSatelite || !camadaRotulos || !camadaRuas) return;

  // Remove camadas ativas temporariamente
  if (mapaLeaflet.hasLayer(camadaSatelite)) mapaLeaflet.removeLayer(camadaSatelite);
  if (mapaLeaflet.hasLayer(camadaRotulos)) mapaLeaflet.removeLayer(camadaRotulos);
  if (mapaLeaflet.hasLayer(camadaRuas)) mapaLeaflet.removeLayer(camadaRuas);

  // Atualiza estilo dos botões
  document.querySelectorAll('.btn-tipo-mapa').forEach(btn => {
    if (btn.dataset.tipo === tipo) {
      btn.classList.add('bg-cyan-500', 'text-slate-950');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-cyan-500', 'text-slate-950');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });

  if (tipo === 'hibrido') {
    camadaSatelite.addTo(mapaLeaflet);
    camadaRotulos.addTo(mapaLeaflet);
  } else if (tipo === 'satelite') {
    camadaSatelite.addTo(mapaLeaflet);
  } else if (tipo === 'ruas') {
    camadaRuas.addTo(mapaLeaflet);
  }
}

/**
 * Função para focar e abrir o popup de um destino no mapa
 * É chamada quando o usuário clica em "Ver no Mapa" no carrossel Swiper
 */
function focarNoMapa(destinoId) {
  const destino = DESTINOS.find(d => d.id === destinoId);
  if (!destino || !mapaLeaflet) return;

  // Rolagem suave até a seção do mapa
  const mapaSection = document.getElementById('secao-mapa');
  if (mapaSection) {
    mapaSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Animação flyTo do Leaflet para focar nas coordenadas do destino
  setTimeout(() => {
    mapaLeaflet.flyTo(destino.coords, 6, {
      duration: 1.8,
      easeLinearity: 0.25
    });

    // Abre o popup do marcador
    if (marcadoresMapa[destinoId]) {
      marcadoresMapa[destinoId].openPopup();
    }
  }, 400);
}

/**
 * Filtro por regiões geográficas no mapa
 */
function filtrarRegiao(regiao) {
  if (!mapaLeaflet) return;

  // Atualiza visual dos botões de filtro
  document.querySelectorAll('.btn-filtro').forEach(btn => {
    if (btn.dataset.regiao === regiao) {
      btn.classList.add('bg-teal-500', 'text-slate-950');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      btn.classList.remove('bg-teal-500', 'text-slate-950');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });

  switch (regiao) {
    case 'americas':
      mapaLeaflet.flyTo([-12, -60], 3.5, { duration: 1.5 });
      break;
    case 'europa':
      mapaLeaflet.flyTo([48, 10], 4, { duration: 1.5 });
      break;
    case 'asia':
      mapaLeaflet.flyTo([25, 115], 3.8, { duration: 1.5 });
      break;
    default:
      mapaLeaflet.flyTo([20, 0], 2.2, { duration: 1.5 });
      break;
  }
}

// ==============================================================================
// 4. BIBLIOTECA BÔNUS: CANVAS-CONFETTI (Microinteração Comemorativa)
// ==============================================================================
function dispararConfetes() {
  /**
   * A biblioteca canvas-confetti gera partículas físicas realistas no canvas HTML5.
   * Dispara duas salvas laterais de confetes coloridos.
   */
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 }
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 }
    });
  }
}

// ==============================================================================
// 5. MODAL DE RESERVA E CONTROLES DE INTERFACE
// ==============================================================================
function abrirModalReserva(nomeDestino, preco) {
  const modal = document.getElementById('modal-reserva');
  const spanDestino = document.getElementById('reserva-destino-nome');
  const spanPreco = document.getElementById('reserva-destino-preco');

  if (spanDestino) spanDestino.textContent = nomeDestino || 'Pacote Selecionado';
  if (spanPreco) spanPreco.textContent = preco || 'R$ 2.490';
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function fecharModalReserva() {
  const modal = document.getElementById('modal-reserva');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function confirmarReserva(event) {
  event.preventDefault();
  fecharModalReserva();

  // Dispara a biblioteca de confetes para feedback alegre
  dispararConfetes();

  // Mostra aviso de sucesso toast
  const toast = document.getElementById('toast-sucesso');
  if (toast) {
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4500);
  }
}

// ==============================================================================
// EVENT LISTENERS AO CARREGAR O DOM
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('[ExploreMundo] Inicializando aplicação...');
  
  // 1. Inicializa Animate On Scroll
  initAOS();

  // 2. Inicializa o carrossel Swiper
  initSwiper();

  // 3. Inicializa o mapa Leaflet
  initLeafletMap();

  // Configuração do formulário de reserva
  const formReserva = document.getElementById('form-reserva');
  if (formReserva) {
    formReserva.addEventListener('submit', confirmarReserva);
  }

  // Configuração da newsletter no rodapé
  const formNewsletter = document.getElementById('form-newsletter');
  if (formNewsletter) {
    formNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      dispararConfetes();
      alert('Inscrição realizada com sucesso! Você receberá ofertas exclusivas no seu e-mail.');
      formNewsletter.reset();
    });
  }
});
