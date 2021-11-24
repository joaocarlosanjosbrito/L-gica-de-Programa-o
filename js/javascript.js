let caixa = document.getElementById('caixa');
// Definir variável caixa

// Adicionar eventos com o mouse na variável caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter',entrar);
caixa.addEventListener('mouseout',sair);

// Criar função da variável clicar (Ativa quando o usuário clicar dentro da div)

function clicar(){
    caixa.innerHTML = 'Você clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white'
    

}

// Criar função da variável entrar (Ativa quando o mouse passar dentro da div)
function entrar(){
    caixa.innerHTML = 'Você entrou'
    caixa.style.background = 'orange';
   
}

function sair(){
    caixa.innerHTML = 'Passe o mouse'
    caixa.style.background = 'blue'
    caixa.style.color = 'red'
    
}

// Pegar a data atual do computador
let agora = new Date();
// Pegar o dia da semana em valores numéricos
let diaSemana = agora.getDay();
Pegar o ID da div
let data = document.getElementById('data');

switch(diaSemana){
    case 0:
        data.innerHTML ='Domingo';
        data.style.background = 'purple';


    break;

    case 1:
        data.innerHTML ='Segunda-feira';
        data.style.background = 'pink';

    break;

    case 2:
        data.innerHTML ='Terça-feira';
        data.style.background = 'gray';
    break;
    
    case 3:
        data.innerHTML ='Quarta-feira';
        data.style.background = 'green';

    break;

    case 4:
        data.innerHTML ='Quinta-feira';
        data.style.background = 'orange';
    break;

    case 5:
        data.innerHTML = 'Sexta-feira';
        data.style.background = 'yellow';
    break;

    case 6:
        data.innerHTML = 'Sábado'
        data.style.background = 'black';


    default:
        data.innerHTML ='Dia inválido';

    break;
}

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = ('black');

} else if (diaSemana == 1){
    data.innerHTML = ('Segunda-feira');
    data.style.background = ('blue');
}else if (diaSemana ==2){
    data.innerHTML = ('Terça-feira');
    data.style.background = ('orange');
}else if (diaSemana ==3){
    data.innerHTML = ('Quarta-feira');
    data.style.background ('yellow');
}else if (diaSemana ==4){
    data.innerHTML = ('Quinta-feira');
    data.style.background ('green');
}else if (diaSemana ==5){
    data.innerHTML = ('Sexta-feira');
    data.style.background ('purple');
}else if (diaSemana ==6){
    data.innerHTML = ('Sábado');
    data.style.background ('gray')
} else {
    data.innerHTML = ('Data inválida');
    data.style.background = ('white');
    data.style.color = ('black');
}

let contador = 0;
let numeros = document.getElementById('numeros');

while(contador < 300){
    contador++;
    numeros.innerHTML = (contador);
}
