// const inputTarefa=document.getElementById("input-tarefa")
// const botaoAdicionar = document.getElementById("botao-adicionar")
// const listaTarefa= document.getElementById("lista-tarefa")
// //criando uma lista vazia 
// let tarefa =[];
// //função para salvar tarefas no local storage
// function salvarTarefa(){

//     /*  localStorage -> armazenamento local do navegador
//         setItem -> salva no armazenamento o conteúdo recebido
//         JSON. stringify (tarefa) -> pega a lista de tarefa, converte para texto (string)
//         e armazena esse texto
//     */ 
//     localStorage.setItem("tarefa",JSON.stringify(tarefa));
// }
// //função para mostrar tarefas na tela 
// function mostrarTarefas(){
//     listaTarefa.innerHTML=""; // limpa a lista de tarefa na tela 
//         //para cada elemento, cria um li
//     for (let i=0; i< tarefa.length; i++){

//         //cada vez que criar o li, passa o valor que está na lista de tarefa na posição i
//         const li =document.createElement("li");

//         li.innerText=tarefa[i];

//         const botaoRemover=document.createElement("button");
//         botaoRemover.innerText="🗑️";
//         botaoRemover.className="botao-remover";

//         botaoRemover.addEventListener("click",() =>{
//             //chamar funcao para remover tarefa
//             removerTarefa(i);

//         })

//         li.appendChild(botaoRemover);
//         listaTarefa.appendChild(li);
        
//     }

// }
// function removerTarefa(posicaoTarefa){
//     //splice -> (posicaoInicial,quantidadeItems)
//     tarefa.splice(posicaoTarefa, 1);

//     //depois de remover, chamo a funcao de salavar no localstorage
//     //atualiza localstorage com array de tarefas atualizado
//     salvarTarefa();

//     //mostra as tarefas atualiza, sem as tarefas que foram removidos
//     mostrarTarefas();


// }
// function adicionartarefa(){
//     const valorTarefa=inputTarefa.value;

//     if(valorTarefa.trim()===""){
//         alert("Digite uma tarefa!");
//         return// nao deixa a tarefa vazia aparecer na tela 
//     }

//     //adicionar tarefa dentro do array
//     tarefa.push(valorTarefa);
//     inputTarefa.value="";

//     salvarTarefa();
//     mostrarTarefas();
// }

// //funcao para carregar as tarefas salvas no localstorage 
// function carregarTarefa(){
//     const tarefasSalvas=localStorage.getItem("tarefa");


//     //se existir  alguma coisa dentro de tarefasSalvas 
//     //entao converte a tarefa e mostra na tela
//     if (tarefasSalvas) {

//         //transforma o texto que esta no localstorage em array novamente 
//         tarefa=JSON.parse(tarefasSalvas)
//         mostrarTarefas();
//     }

// }

// botaoAdicionar.addEventListener("click", adicionartarefa);

// carregarTarefa();



