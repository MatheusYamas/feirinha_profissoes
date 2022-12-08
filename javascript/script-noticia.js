xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/noticia-conteudo",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n = 2; n >= 0; n--){
        document.write(
        "<div class='card mb-3 reveal' id='blog'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-4 justify-content-center align-items-center d-flex'>"+
                    "<img src='img/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +

                "<div class='col-md-8'>" + 
                    "<div class='card-body'>"+
                        "<h5 class='card-title'><a href='postagem.html?noticia=" + n + "' class='text-black' style='text-decoration:none;'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) +"...</p>" +
                        "<a href='postagem.html?noticia=" + n + "' class='btn btn-primary'>+ Saiba Mais</a>"+
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>");
    }
}