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
    caixa.style.background = 'green'
    caixa.style.color = 'red'
    
}