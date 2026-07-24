// JS (script.js) - module, usa Firebase v9 modular via CDN

// ---------- imports (CDN modular v12.5.0) ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// ---------- firebaseConfig (sua config) ----------
const firebaseConfig = {
  apiKey: "AIzaSyCwTzwoXNEaJp5R9n1zCvklBytZvfHuThI",
  authDomain: "natal-mk.firebaseapp.com",
  projectId: "natal-mk",
  storageBucket: "natal-mk.firebasestorage.app",
  messagingSenderId: "102573111223",
  appId: "1:102573111223:web:73d803bc2fb4ff9e835a32",
  measurementId: "G-P517WTCCQJ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ---------- elementos DOM ----------
const cardsContainer = document.getElementById('cards-container');
const confirmadosContainer = document.getElementById('apadrinhados-confirmados');
const modal = document.getElementById('modal');
const modalAfilhado = document.getElementById('modal-afilhado');
const form = document.getElementById('apadrinha-form');
const btnSubmit = document.getElementById('btn-submit');
const closeBtn = document.querySelector('.close');
const badgeContador = document.getElementById('badge-contador');

let selectedDoc = null; // docRef of the selected afilhado
let isSubmitting = false;

// Toast helper
function showToast(message, type = 'success', time = 3000) {
  let wrapper = document.querySelector('.toast-wrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.className = 'toast-wrapper';
    document.body.appendChild(wrapper);
  }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = message;
  wrapper.appendChild(t);
  // show
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => wrapper.removeChild(t), 300);
  }, time);
}

// Util foto
function resolveFotoUrl(fotoVal) {
  if (!fotoVal) return 'images/placeholder.jpg';
  if (fotoVal.startsWith('images/')) return fotoVal;
  return `images/${fotoVal}`;
}

// Renderiza todos os cards a partir de snapshot docs
function renderFromDocs(docs) {
  cardsContainer.innerHTML = '';
  confirmadosContainer.innerHTML = '';
  docs.forEach(d => {
    const p = { id: d.id, ...d.data() };
    const card = document.createElement('div');
    card.classList.add('card');
    if (p.apadrinhado) {
      card.classList.add('locked');
      card.style.pointerEvents = 'none';
    }

    const imagem = resolveFotoUrl(p.fotoUrl);

    // Criar container para ícones animados
    const iconContainer = document.createElement('div');
    iconContainer.style.position = 'absolute';
    iconContainer.style.top = 0;
    iconContainer.style.left = 0;
    iconContainer.style.width = '100%';
    iconContainer.style.height = '100%';
    iconContainer.style.pointerEvents = 'none'; // não interfere no click
    iconContainer.style.overflow = 'hidden';
    iconContainer.style.zIndex = 0; // atrás do conteúdo do card

    const icons = ['🎄','✨'];
    for (let i = 0; i < 3; i++) {
      const icon = document.createElement('div');
      icon.classList.add('icon');
      icon.style.left = Math.random() * 80 + '%';
      icon.style.top = Math.random() * 80 + '%';
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      iconContainer.appendChild(icon);
    }

    card.appendChild(iconContainer);

    // Conteúdo principal do card
    const content = document.createElement('div');
    content.style.position = 'relative'; // acima do container de ícones
    content.style.zIndex = 1;
    content.innerHTML = `
      <img src="${imagem}" alt="${p.nomeCompleto}">
      <h3>${p.nomeCompleto}</h3>
      <p>${p.tipoPessoa ? p.tipoPessoa : ''}</p>
      <p>Idade: ${p.idade ? p.idade : ''}</p>
      ${p.turma ? `<p>Turma: ${p.turma}</p>` : ''}
      <p>Roupa: ${p.tamanhoRoupa ? p.tamanhoRoupa : ''} | Calçado: ${p.tamanhoCalcado ? p.tamanhoCalcado : ''}</p>
      <p>Presente: ${p.opcaoPresente ? p.opcaoPresente : ''}</p>
    `;
    card.appendChild(content);

    // clique abre modal se disponível
    card.addEventListener('click', () => {
      if (p.apadrinhado) return;
      selectedDoc = doc(db, 'afilhados', p.id);
      modalAfilhado.textContent = p.nomeCompleto;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    });

    cardsContainer.appendChild(card);

    // se já apadrinhado, cria card em confirmados com estilo .confirmado
    if (p.apadrinhado) {
      const cardConfirmado = document.createElement('div');
      cardConfirmado.classList.add('card', 'confirmado');
      const imgConfirm = resolveFotoUrl(p.fotoUrl);
      cardConfirmado.innerHTML = `
        <img src="${imgConfirm}" alt="${p.nomeCompleto}">
        <h3>${p.nomeCompleto}</h3>
        <p>Idade: ${p.idade ? p.idade : ''}</p>
        ${p.turma ? `<p>Turma: ${p.turma}</p>` : ''}
        <p>Roupa: ${p.tamanhoRoupa ? p.tamanhoRoupa : ''} | Calçado: ${p.tamanhoCalcado ? p.tamanhoCalcado : ''}</p>
        <p>Presente: ${p.opcaoPresente ? p.opcaoPresente : ''}</p>
        ${p.padrinhoNome ? `<p><strong>Padrinho:</strong> ${p.padrinhoNome}</p>` : ''}
        ${p.padrinhoWhatsapp ? `<p><strong>WhatsApp:</strong> ${p.padrinhoWhatsapp}</p>` : ''}
      `;
      confirmadosContainer.appendChild(cardConfirmado);
    }
  });
}

// Atualiza badge contador
function atualizarBadgeFromDocs(docs) {
  const count = docs.filter(d => d.data().apadrinhado).length;
  badgeContador.textContent = `Apadrinhados: ${count}`;
}


// Real-time listener: render e atualiza contador
async function startRealtime() {
  const q = query(collection(db, 'afilhados')); // sem orderBy no Firestore

  onSnapshot(q, snapshot => {
    const docs = snapshot.docs.sort((a, b) => {
      const nomeA = a.data().nomeCompleto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const nomeB = b.data().nomeCompleto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return nomeA.localeCompare(nomeB);
    });

    renderFromDocs(docs);
    atualizarBadgeFromDocs(docs);
  }, err => {
    console.error('Erro onSnapshot:', err);
    showToast('Erro ao conectar realtime.', 'error');
  });
}

// Fechar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
});

// Submit do form (apadrinhar)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  if (!selectedDoc) {
    showToast('Selecione um afilhado primeiro.', 'error');
    return;
  }
  const nomePadrinho = document.getElementById('padrinho-nome').value.trim();
  const whatsapp = document.getElementById('padrinho-whatsapp').value.trim();
  if (!nomePadrinho || !whatsapp) {
    showToast('Preencha nome e WhatsApp.', 'error');
    return;
  }

  isSubmitting = true;
  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Enviando...';

  try {
    // Atualiza doc do afilhado: marca apadrinhado true e salva dados do padrinho
    await updateDoc(selectedDoc, {
      apadrinhado: true,
      padrinhoNome: nomePadrinho,
      padrinhoWhatsapp: whatsapp,
      dataApadrinhamento: serverTimestamp()
    });

    showToast('Apadrinhamento salvo com sucesso!', 'success');

    // fecha modal e limpa
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    form.reset();
    selectedDoc = null;

  } catch (err) {
    console.error('Erro ao salvar apadrinhamento:', err);
    showToast('Erro ao salvar. Tente novamente.', 'error');
  } finally {
    isSubmitting = false;
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'Confirmar Apadrinhamento';
  }
});

// inicia tudo
startRealtime();

// banner lights + carousel (mesmo comportamento antigo)
const banner = document.querySelector('.banner');
for (let i = 0; i < 15; i++) {
  const light = document.createElement('div');
  light.classList.add('light');
  light.style.left = Math.random() * 95 + '%';
  light.style.top = Math.random() * 50 + '%';
  banner.appendChild(light);
}
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlide, 4000);