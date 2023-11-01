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


const procedimentosContainer1 = document.querySelector('section.procedimentos-container');
const procedimentosContainer2 = document.querySelector('section.procedimentos-container-show');
const procedimentosListaTexto = document.querySelector('div.procedimentos-lista-texto');
const limpezadePele = document.querySelectorAll('.limpeza-de-pele');
const massagemFacial = document.querySelectorAll('.massagem-facial');
const microagulhamento = document.querySelectorAll('.microagulhamento');
const peeling = document.querySelectorAll('.peeling');

peeling.forEach((peelingdiv) => peelingdiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentosListaTexto.innerHTML = '<h3>Peeling</h3><p>A palavra peeling é originada do inglês to peel, que significa descamar ou descascar. O objetivo do procedimento, que é um método seguro e eficaz, é renovar as células da pele por meio da descamação, além de ser um dos procedimentos estéticos mais procurados no Brasil.</p>'
}));
limpezadePele.forEach((limpezadePelediv) => limpezadePelediv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentosListaTexto.innerHTML = "<h3>Limpeza de pele</h3> <p>Um dos tratamentos estéticos mais realizados no mundo, a limpeza de pele tem como objetivo remover os cravos e as impurezas, desobstruir os poros e melhorar a capacidade de absorção da pele. Além disso, a limpeza de pele também auxilia na oxigenação, hidratação, nutrição e clareamento, podendo ser aplicada em qualquer tom de pele.</p><h4>Como funciona a limpeza de pele?<h4><p>A limpeza começa com a higienização para remover substâncias como a maquiagem, as impurezas e a gordura da pele. Em seguida, é realizada uma esfoliação para remover as células mortas e facilitar a eliminação dos cravos.  Após a dilatação dos poros, são removidos os cravos e os cistos de queratina e sebo. Para finalizar a limpeza de pele, é aplicada uma máscara, a fim de amenizar a vermelhidão.</p>"
}));
massagemFacial.forEach((massagemFacialdiv) => massagemFacialdiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentosListaTexto.innerHTML = '<h3>Massagem Facial</h3><p>Massagens são fundamentais para quem trabalha com estética. Seja em uma clínica, estúdio de beleza ou em atendimento à domicílio, esse tipo de serviço, além de ser bastante procurado e um dos favoritos dos clientes, está comumente atrelado ao bem estar, na saúde física e mental.</p>'
}));
microagulhamento.forEach((microagulhamentodiv) => microagulhamentodiv.addEventListener('click', () => {
    procedimentosContainer1.style.display = 'flex';
    procedimentosContainer2.style.display = 'none';
    procedimentosListaTexto.innerHTML = '<h3>Microagulhamento</h3><p>Também conhecido como indução percutânea do colágeno ou terapia de indução do colágeno, o microagulhamento é (como o próprio nome já diz) uma técnica feita por meio de um cilindro com microagulhas, que promove múltiplas perfurações na pele, induzindo a formação de colágeno e elastina.</p>'
}));

procedimentosContainer1.addEventListener('mouseenter', scrollprocedimentos);

function scrollprocedimentos(){
    procedimentosContainer1.style.backgroundColor = '#B8D9D0';
}