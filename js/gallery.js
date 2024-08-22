function showPaintings(){
    t = document.getElementById("table");
    var table = document.createElement('table');
    var index = 1;

    for(var r=0; r < 5;r++){
        var tr = document.createElement('tr');        
        for(var c=0; c < 5;c++){
            var img = document.createElement('img');
            var td = document.createElement('td');
            var image;
            if (index < 10){
                image = "img/bild00" + (index) + ".jpg";
            } else if (index >= 10 && index < 30) {
                image = "img/bild0" + (index) + ".jpg";
            }            
            img.setAttribute("src",image);
            td.style.width ="25px";
            td.style.height = "25px";
            td.appendChild(img);
            tr.appendChild(td);
            index++;
        }
        table.appendChild(tr);
    }    
    t.appendChild(table);
}

showPaintings();