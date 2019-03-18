 var xhr=new XMLHttpRequest();
function t1000(){
     xhr.open("POST","https://dog.ceo/api/breeds/image/random");
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send();
    
    
    
    xhr.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
            var a=JSON.parse(this.responseText);
            var b=a.message;
            var c=document.createElement("img");
            c.setAttribute("src",b);
            c.setAttribute("width","350px");
            c.setAttribute("height","240px");
            
            document.getElementById("pics").innerHTML="";
            
            document.getElementById("pics").appendChild(c);
        }
        else
            {
                document.getElementById("pics").innerHTML="Please wait while the image loads";
            }
    };
    
   
}
            function reload1(){
                location.reload();
            }