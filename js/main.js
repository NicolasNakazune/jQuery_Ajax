// 14802120
function consultaCep(){
    //Mostrando a barra de progresso
    $(".bar-progress").show();
    /*Pegando o input do HTML*/
    var cep = document.getElementById("cep").value;
    $.ajax({
        url:"https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            //Formato JavaScript: document.getElementById("logradouro").innerHTML = response.logradouro;
            //Formato JQuery/Ajax
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titleCEP").html("CEP: "+ response.cep);
            $(".cep").show(); // Mostrar a tabela
            $(".bar-progress").hide(); // Escondendo a barra de progresso
        }
    })
}
$(function(){ //Esconder a tabela quando não tiver nenhum CEP
    $(".cep").hide();
    $(".bar-progress").hide();
});