var charName = document.getElementById("txtChar");
var charContainer = document.getElementById("mostrar-info");
var btn = document.getElementById("btn");


// when press the button: //
btn.addEventListener("click", function(){
    
    document.getElementById("mostrar-info").innerHTML = "";    


    var ourRequest = new XMLHttpRequest();    
    

    ourRequest.open('GET', 'https://api.tibiadata.com/v2/characters/' + charName.value + '.json');  // se eu quiser enviar requisicao coloco POST em vez de GET

    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourData.characters.data);
        //renderHTML(ourData);

        var htmlString = "";
        htmlString += "<p> Nome: " + ourData.characters.data.name + "</p>";
        htmlString += "<p> Vocacao: " + ourData.characters.data.vocation + "</p>";
        htmlString += "<p> Nivel: " + ourData.characters.data.level + "</p>";
        htmlString += "<p> Mundo: " + ourData.characters.data.world + "</p>";
        htmlString += "<p> Residencia: " + ourData.characters.data.residence + "</p>";
        htmlString += "<p> Pontos de conquistas: " + ourData.characters.data.achievement_points + "</p>";
        htmlString += "<p> Status da Conta: " + ourData.characters.data.account_status + "</p>";
        htmlString += "<p> <strong> Status: </strong> " + ourData.characters.data.status + "</p>";

        var otherChars = ourData.characters.other_characters;

        for (i=0; i < otherChars.length; i++){
            htmlString += "<p> Nome: " + otherChars[i].name + " - <strong> Status: </strong>" + otherChars[i].status + "</p>";
            //htmlString += "<p> Status: " + otherChars[i].status + "</p>";    
        }

        
        charContainer.insertAdjacentHTML('beforeend', htmlString); 

        console.log(otherChars[0].name);
       
    };

    ourRequest.send();

});



// funcao para adicionar html para a pagina para o div elemento 
// function renderHTML(data){
//     var htmlString = "";

//     htmlString += "<p>" + data[i].name + ".</p>";
    

    // for (i=0; i < data.length; i++){
    //     htmlString += "<p>" + data[i].name + ".</p>";
        
    // }

    //charContainer.insertAdjacentHTML('beforeend', htmlString);

// }


// =============== ******************** ============= //
// SO ESSE CODIGO ABAIXO JA FUNCIONA NO CONSOLE, O CODIGO ACIMA E PARA EXIBIR NO BROWSER COM AJAX //

// var ourRequest = new XMLHttpRequest();
// var charName = 'jviga';

// ourRequest.open('GET', 'https://api.tibiadata.com/v2/characters/' + charName + '.json');  // se eu quiser enviar requisicao coloco POST em vez de GET

// ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     //console.log(ourData.characters.data);

//      console.log(ourData.characters.data.name);
//      console.log(ourData.characters.data.vocation);
//      console.log(ourData.characters.data.level);
//      console.log(ourData.characters.data.world);
//      console.log(ourData.characters.data.residence);
//      console.log(ourData.characters.data.achievement_points);
//      console.log(ourData.characters.data.account_status);
//      console.log(ourData.characters.data.status);
// };

// ourRequest.send();