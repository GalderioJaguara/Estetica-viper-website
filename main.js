const faleConosco = document.querySelector('a#fale-conosco');
        const rodapeContato = document.querySelector('div.rodape-contato');
        faleConosco.addEventListener('click',footerPisca);
        function footerPisca(){
            let animation = rodapeContato.animate({
                opacity: [0.5, 1],
                 transform: ['scale(0.5)', 'scale(1)'],
                }, {
                direction: 'alternate',
                duration: 500,
            iterations: 3,
            });
        }
const hidden = document.querySelector('.hidden');
const show = document.querySelector('.show');
const procedimentosContainer1 = document.querySelector('section.procedimentos-container');
const procedimentosContainer2 = document.querySelector('section.procedimentos-container-show');
const limpezadePele = document.querySelectorAll('.limpeza-de-pele');
const massagemFacial = document.querySelectorAll('.massagem-facial');
const microagulhamento = document.querySelectorAll('.microagulhamento');
const peeling = document.querySelectorAll('.peeling');
const headerflex = document.querySelector('ul.container-flex-header');


const botao = document.querySelector('.btn-mobile');
botao.addEventListener('click', abrirMenu);
botao.addEventListener('touchstart', abrirMenu);
function abrirMenu(event){
    if (event.type ==='touchstart') event.preventDefault();
    const navbar = document.querySelector('div.navigation');
    navbar.classList.toggle('active');
    botao.classList.toggle('active');
}

peeling.forEach((peelingdiv) => peelingdiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    

}));
limpezadePele.forEach((limpezadePelediv) => limpezadePelediv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
   
}));
massagemFacial.forEach((massagemFacialdiv) => massagemFacialdiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
   
}));
microagulhamento.forEach((microagulhamentodiv) => microagulhamentodiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
   
}));


function menuWide() {
    if (window.innerWidth >= 600) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
}

const imagemProcedimentos = document.querySelector('img#imagem-change');

function needlingImg() {
    imagemProcedimentos.setAttribute('src','Imagens/microagulhamento.jpeg');
    
}

function peelingImg(){
    imagemProcedimentos.setAttribute('src','Imagens/facial-treatment.jpeg');
}
function facialImg() {
    imagemProcedimentos.setAttribute('src', 'Imagens/massagem-facial.jpg');
}
function limpezaImg() {
    imagemProcedimentos.setAttribute('src', 'Imagens/limpeza.jpg');
}

