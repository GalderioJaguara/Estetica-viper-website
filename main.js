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


        