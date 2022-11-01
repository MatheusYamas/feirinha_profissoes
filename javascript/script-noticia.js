xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/noticia-conteudo",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
        document.write("<tr>" +
        "<td>"+ x[n].getAttribute("codigo") +"</td>" +
        "<td><a href='postagem.html?noticia="+ n +"'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></td>" +
        "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</td>" +
        "<td><img src='img/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></td>" +
        "</tr>");
    }
}

function funcaoPostagem(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    n = parametro.get("noticia");
        document.write("<tr>" +
        "<td>"+ x[n].getAttribute("codigo") +"</td>" +
        "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</td>" +
        "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td>" +
        "<td><img src='img/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='250'></td>" +
        "</tr>");    
}