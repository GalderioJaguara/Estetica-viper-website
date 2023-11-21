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
const procedimentosListaTexto = document.querySelector('div.procedimentos-lista-texto');
const limpezadePele = document.querySelectorAll('.limpeza-de-pele');
const massagemFacial = document.querySelectorAll('.massagem-facial');
const microagulhamento = document.querySelectorAll('.microagulhamento');
const peeling = document.querySelectorAll('.peeling');
const headerflex = document.querySelector('ul.container-flex-header')
const navbar = document.querySelector('div.navigation');
const procedimentoslistatextoContainer = document.querySelector('.procedimentos-lista-texto-container');

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
    procedimentoslistatextoContainer.style.display = 'none'
    imagemProcedimentos.style.display = 'none'
    hidden.style.display = 'block'
    show.style.display = 'none'
        setTimeout(() => {
            procedimentoslistatextoContainer.style.display = 'flex'
            imagemProcedimentos.style.display = 'block'
            procedimentosListaTexto.innerHTML = '<h3>Peeling</h3><p>O peeling é um procedimento estético amplamente conhecido que visa melhorar a aparência da pele, restaurando sua textura, tonalidade e vitalidade. Este tratamento é uma opção popular para quem deseja combater problemas como manchas, rugas, cicatrizes de acne e outras imperfeições da pele. O processo envolve a remoção das camadas mais superficiais da pele, estimulando a regeneração das células cutâneas e, consequentemente, revelando uma pele mais jovem, suave e radiante.</p> <h4>Como funciona o peeling?</h4> <p>O peeling é um procedimento estético que consiste na aplicação de substâncias químicas, laser ou técnicas físicas para remover camadas superficiais da pele. Isso estimula a renovação celular, reduzindo manchas, rugas e imperfeições. O tipo de peeling e sua profundidade variam de acordo com as necessidades do paciente, resultando em uma pele mais saudável e rejuvenescida após a recuperação.</p>'
        }, 0);
    
    
}));
limpezadePele.forEach((limpezadePelediv) => limpezadePelediv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentoslistatextoContainer.style.display = 'none'
    imagemProcedimentos.style.display = 'none'
    hidden.style.display = 'block'
    show.style.display = 'none'
    setTimeout(() => {
        procedimentoslistatextoContainer.style.display = 'flex'
        imagemProcedimentos.style.display = 'block'
        procedimentosListaTexto.innerHTML = "<h3>Limpeza de pele</h3> <p>Um dos tratamentos estéticos mais realizados no mundo, a limpeza de pele tem como objetivo remover os cravos e as impurezas, desobstruir os poros e melhorar a capacidade de absorção da pele. Além disso, a limpeza de pele também auxilia na oxigenação, hidratação, nutrição e clareamento, podendo ser aplicada em qualquer tom de pele.</p><h4>Como funciona a limpeza de pele?<h4><p>A limpeza começa com a higienização para remover substâncias como a maquiagem, as impurezas e a gordura da pele. Em seguida, é realizada uma esfoliação para remover as células mortas e facilitar a eliminação dos cravos.  Após a dilatação dos poros, são removidos os cravos e os cistos de queratina e sebo. Para finalizar a limpeza de pele, é aplicada uma máscara, a fim de amenizar a vermelhidão.</p>"
    }, 0);
   
}));
massagemFacial.forEach((massagemFacialdiv) => massagemFacialdiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentoslistatextoContainer.style.display = 'none'
    imagemProcedimentos.style.display = 'none'
    hidden.style.display = 'block'
    show.style.display = 'none'
    setTimeout(() => {
        procedimentoslistatextoContainer.style.display = 'flex'
        imagemProcedimentos.style.display = 'block'
        procedimentosListaTexto.innerHTML = '<h3>Massagem Facial</h3><p>A massagem facial é uma técnica terapêutica que envolve a aplicação de pressão e movimentos suaves nas áreas do rosto, pescoço e decote. O objetivo principal é promover o relaxamento, melhorar a circulação sanguínea, estimular a produção de colágeno e aliviar a tensão muscular. Além disso, a massagem facial pode ser personalizada para abordar preocupações específicas, como redução de inchaço, tonificação da pele e diminuição de rugas.</p><h4>Como a Massagem Facial Funciona?</h4><p>Durante uma sessão de massagem facial, o terapeuta utiliza técnicas manuais, como pressões, deslizamentos e amassamentos, em pontos-chave do rosto e do pescoço. Isso ajuda a liberar a tensão nos músculos faciais, melhorando a circulação sanguínea e linfática. A massagem também promove o relaxamento, reduzindo o estresse e a ansiedade. Além disso, a estimulação da pele durante a massagem pode aumentar a absorção de produtos para cuidados com a pele, maximizando seus benefícios. A massagem facial é uma abordagem natural e agradável para melhorar a saúde e a aparência da pele, proporcionando uma sensação de rejuvenescimento e bem-estar.</p>'
    }, 0);
    
}));
microagulhamento.forEach((microagulhamentodiv) => microagulhamentodiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentoslistatextoContainer.style.display = 'none'
    imagemProcedimentos.style.display = 'none'
    hidden.style.display = 'block'
    show.style.display = 'none'
    setTimeout(() => {
        procedimentoslistatextoContainer.style.display = 'flex'
        imagemProcedimentos.style.display = 'block'
            procedimentosListaTexto.innerHTML = '<h3>Microagulhamento</h3><p>O microagulhamento, também conhecido como terapia de indução de colágeno, é um procedimento estético minimamente invasivo que utiliza um dispositivo com pequenas agulhas para perfurar a pele. O objetivo principal é estimular a produção de colágeno e elastina, melhorar a textura da pele e reduzir imperfeições como rugas, cicatrizes de acne, estrias e hiperpigmentação. O microagulhamento é uma técnica versátil que pode ser usada em várias áreas do corpo.</p><h4>Como funciona microagulhamento?</h4><p>Durante o procedimento de microagulhamento, um dispositivo com agulhas muito finas é passado sobre a pele, criando microlesões controladas. Essas lesões desencadeiam o processo de cicatrização natural do corpo, estimulando a produção de colágeno e elastina na pele. À medida que a pele se regenera, a textura melhora, e as imperfeições tornam-se menos visíveis. O microagulhamento também aumenta a absorção de produtos para cuidados com a pele, potencializando seus efeitos. O procedimento pode ser personalizado para atender às necessidades individuais e é eficaz na busca por uma pele mais saudável e rejuvenescida.</p>'
    },0);
    
}));



function menuWide() {
    if (window.innerWidth >= 600) {
        
        navbar.style.display = 'block';
        botao.classList.remove('active');
        navbar.classList.remove('active');
        botao.style.display = 'none';
    } else {
       botao.style.display = 'flex';
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