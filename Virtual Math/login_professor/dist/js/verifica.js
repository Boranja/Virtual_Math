class Usuario{
    
    constructor(){
        this.nome;
        this.telefone;
        this.cpf;
        this.mostrar
        
    }
    cadastro( nome, telefone, cpf ){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.mostrar = true;
    }
}
var banco_vetor = [];

class Banco{
    salvar(contato){
        // console.log(contato)
        if(localStorage.length == 0){
            
           banco_vetor.push(contato);
            localStorage.setItem('Agenda',JSON.stringify(banco_vetor));            
        }else{
            
            banco_vetor = JSON.parse(localStorage.getItem('Agenda'));
            banco_vetor.push(contato);
            localStorage.setItem('Agenda',JSON.stringify(banco_vetor));
            
        }
        

    }
     buscar(cpf){
        banco_vetor = JSON.parse(localStorage.getItem('Agenda'));
        var texto = document.getElementById('lista_busca');
        texto.innerHTML = "";   
        var i;
        var cont = 0;

        for(i=0; i<banco_vetor.length; i++){
            if(cpf == banco_vetor[i].cpf){
        cont = -1;

                texto.innerHTML += "<p>Nome:"+banco_vetor[i].nome+ "</p>";
                texto.innerHTML += "<p>CPF:"+banco_vetor[i].cpf+ "</p>";
                texto.innerHTML += "<p>Telefone:"+banco_vetor[i].telefone+ "</p>";
                texto.innerHTML += "<button onclick = 'excluir()' >Excluir</button>";
                texto.innerHTML += "<button  onclick = 'editar()'>Editar</button>";
            }
        }
        if(cont == 0){
            texto.innerHTML += "<h1>Contato não Cadastrado</h1>";
          }
    }
    
mostrar(){
    banco_vetor = JSON.parse(localStorage.getItem('Agenda'));
    var texto = document.getElementById('listar');
    texto.innerHTML = "";
    var i;

    for(i=0; i<banco_vetor.length; i++){
if(true == banco_vetor[i].mostrar){
    texto.innerHTML +="<p>Nome:"+ banco_vetor[i].nome+ "</p";
    texto.innerHTML +="<p>CPF:"+ banco_vetor[i].cpf+ "</p";
    
}

    }
}
excluir(cpf){
    var banco_vetor = JSON.parse(localStorage.getItem("Agenda"));
    var i;
     for(i=0; i<banco_vetor.length; i++){
        if(cpf == banco_vetor[i].cpf){
              banco_vetor.splice(i,1);
        }          
     
        localStorage.setItem("Agenda", JSON.stringify(banco_vetor));

     }
   
    } 
    editar(cpf, cpf_edicao, nome_edicao, telefone_edicao){
        banco_vetor = JSON.parse(localStorage.getItem("Agenda"));
        var i;
            for(i = 0; i < banco_vetor.length; i++){
                if(cpf == banco_vetor[i].cpf){
    
                        banco_vetor[i].cpf = cpf_edicao;
                        banco_vetor[i].telefone = telefone_edicao;
                        banco_vetor[i].nome = nome_edicao;
                        banco_vetor[i].mostrar = true;


                }
                localStorage.setItem("Agenda", JSON.stringify(banco_vetor));

            }
    }

}
function mostrar(){
    var banco_salvo = new Banco;
    banco_salvo.mostrar();

}

function buscar(){
    var banco_salvo = new Banco();
    banco_salvo.buscar(busca.value);

}


function voltar(){
    document.getElementById('menu').className = 'visivel';
    document.getElementById('Inserir').className = 'invisivel';
    document.getElementById('buscar').className = 'invisivel';
    document.getElementById('mostrar').className = 'invisivel';
    document.getElementById('Enviar_dados').value = ' ' ;
    document.getElementById('Enviar_dados').focus();
}


function salvar(){
    
    var contato = new Usuario();
    contato.cadastro(nome.value,telefone.value,cpf.value);
    document.getElementById('menu').className = "visivel";
    document.getElementById('Inserir').className = "invisivel";
    var banco_salvo = new Banco(); 
    banco_salvo.salvar(contato);
}



function menu(Enviar_dados)
{
 limpar();
switch(Enviar_dados){
    
    case '1': 
    document.getElementById('Inserir').className = 'visivel';
    document.getElementById('menu').className = 'invisivel';
     break;
    case '2':
        mostrar();
        document.getElementById('mostrar').className = 'visivel';
        document.getElementById('menu').className = 'invisivel';
        break;
    case '3':
        if (localStorage.length >0) {
            
        document.getElementById('buscar').className = 'visivel';
        document.getElementById('menu').className = 'invisivel';
        }else{
            alert("Não encontrado");
        }
        break;
    default:
        alert('Opção Invalida');
        break;
    }    
        
}
function editar(){
        document.getElementById('editar').className = 'visivel';
        document.getElementById('buscar').className = 'invisivel';    
}


function salvar_editar(){
        var banco_salvo = new Banco;
        banco_salvo.editar(busca.value, cpf_edicao.value, nome_edicao.value, telefone_edicao.value);
        document.getElementById('editar').className = 'invisivel';
        document.getElementById('menu').className = 'visivel';
}

function excluir(){
    alert("contato excluido!")
    voltar();
    var banco_salvo = new Banco;
    banco_salvo.excluir(busca.value); 
}

function limpar(){
document.getElementById('Enviar_dados').value = "";

document.getElementById('nome').value = "";
document.getElementById('telefone').value = "";
document.getElementById('cpf').value = "";

document.getElementById('nome_edicao').value = "";
document.getElementById('telefone_edicao').value = "";
document.getElementById('cpf_edicao').value = "";

var texto = document.getElementById('listar');
texto.innerHTML = "";

var texto = document.getElementById('lista_busca');
texto.innerHTML = " ";

document.getElementById('busca').value = "";

}

