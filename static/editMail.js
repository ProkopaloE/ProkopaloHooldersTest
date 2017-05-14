	var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               

    var button = document.getElementById("Mybtn");
	button.addEventListener("click",function(event){
		var globaldiv = document.createElement("DIV");
	    globaldiv.setAttribute("id", "divcenter");
    	var formdiv = document.createElement("DIV");
    	formdiv.setAttribute("id", "Mymodal");
    	formdiv.setAttribute("class", "modal-fade")
    	var div1 = document.createElement("DIV");
    	div1.setAttribute("class", "modal-dialog");
    	var div2 = document.createElement("DIV");
    	div2.setAttribute("class", "modal-content");
    	var div3 = document.createElement("DIV");
    	div3.setAttribute("class", "modal-body");
        div3.setAttribute("margin", "15px");
    	
        var h = document.createElement("h4");
    	h.setAttribute("class", "modal-title");
    	var title = document.createTextNode("email : ");
    	h.appendChild(title);
      
        var input = document.createElement("input");
        input.setAttribute("id","newMail");
        input.setAttribute("align","left");
        input.setAttribute("form","MyForm");
        input.setAttribute("maxlength","75");
        input.setAttribute("type","email");
       
        div3.appendChild(h).append(input);

 	  var d5 = document.createElement("DIV");
        d5.setAttribute("class","modal-footer");
  
            var exitDiv = document.createElement('DIV');
            exitDiv.setAttribute("class","modal-header");
            var exitSpan = document.createElement("span");
            var exitText = document.createTextNode("X")
            exitSpan.setAttribute("class","close");
            exitSpan.appendChild(exitText); 
            exitDiv.appendChild(exitSpan);
            exitDiv.onclick = function(){
                    $(globaldiv).remove();
            }

            
            var a = document.createElement("a");
            
            a.setAttribute("text","Submit");
            var text1 = document.createTextNode("Submit ");
            a.appendChild(text1);

            a.onclick = function(e){
                
                if ($("#hint")) {
                    $("#hint").remove();         
                }                   
                var email = $.trim($("#newMail").val());

                if (regExp.test(email))
                {
                    var text = "/change_email/?email=" + email;
                    a.setAttribute("href",text);         
                }
                else
                {

                    var hint=document.createElement("h4");
                    hint.setAttribute("id","hint");
                    hint.setAttribute("class","modal-title");
                    hint.setAttribute("style","color: red;font-style: italic;");
                    var hinttext = document.createTextNode("Invalid email");
                    hint.appendChild(hinttext);
                    div3.appendChild(hint);
                }
            }
            


                                 
    d5.appendChild(a);
    //div3.appendChild(d5);
    div2.appendChild(exitDiv);
    div2.appendChild(div3);
    div1.appendChild(div2);
    div2.appendChild(d5);
    formdiv.appendChild(div1);
    globaldiv.appendChild(formdiv);
   
    document.getElementById("border").appendChild(globaldiv);
    
    return;




	});
