
        let boton =document.getElementById("btn2")
        let button = document.getElementById("btn1")
        let newPala = "";
        let textarea = document.querySelector("textarea")
        let newPalas="";
        let textarea2 = document.getElementById("mensaje");
        let btnCopiar = document.getElementById("btn3")


        function ingreso(){
             if (textarea.value){
              let palabra = textarea.value    
              newPala = palabra.replaceAll("i", "imes").replaceAll("e", "enter").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
           
             //return texto2 = document.write(newPala)

             document.getElementById("mensaje").textContent= newPala
            

            }
        }

            
        function egreso(){
             if (textarea.value){
              let palabra = textarea.value    
              newPalas = palabra.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u").replaceAll("imes", "i");
           
             //return texto3 = document.write(newPalas)
             document.getElementById("mensaje").textContent= newPalas
            

            }
            
        }
        
        function copiarClipboard(){
            let copyText =document.getElementById("mensaje");
      

            console.log(copyText);
            copyText.select();
            copyText.setSelectionRange(0,99999);

            navigator.clipboard.writeText(copyText.value);
            
        }
            button.onclick =ingreso;
            boton.onclick = egreso;
            btnCopiar.onclick = copiarClipboard; 

        
        
   