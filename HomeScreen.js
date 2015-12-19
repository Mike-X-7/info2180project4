window.onload=function(){
	document.getElementById("Compose").onclick= compose_message;
	document.getElementById("Inbox").onclick= view_messages;
	document.getElementById("Friends").onclick= view_users;
	document.getElementById("logout").onclick = logout;
	document.getElementById("Register").onclick = add_user;
	
	
}


function compose_message(){
	console.log("The on click works");
	var compose_panel=[
		'<div id ="compose_window">',
		'<div id="new_message">',
		'<div id="header"><strong> New Message </strong></div>',
		'</div>',
		'<form>',
		'<fieldset>',
		'<strong>To</strong><br> <input type="text" id ="recipient" name="recipient" class="textfield"> <br>',
		'<strong>Subject</strong><br> <input type="text" id="subject" name="subject" class="textfield"> <br><br>',
		'<strong>Message</strong><br> <textarea  id = "message_content" name="message_content" cols="40" rows="5"></textarea> <br>',
		'<button id="Send"> <strong> Send </strong> </button>',
		'</fieldset>',
		'</form>',
		'</div>',
		'<div id="Response"></div>',
		
	].join('');
	document.getElementById("content").innerHTML= compose_panel;
	document.getElementById("Send").onclick= insert_data;
	
}


	
function add_user(){
	console.log("The on click works");
	var compose_panel=[
		'<div id ="compose_window">',
		'<div id="new_message">',
		'<div id="header"><strong> Register a User </strong></div>',
		'</div>',
		'<form id="logininfo">',
        '<fieldset>',
        '<div id="info">',
        '<strong>Id</strong><br> <input type="text" id ="id" name="id" class="textfield"> <br>',
        '<strong>First Name</strong><br> <input type="text" id ="firstname" name="firstname" class="textfield"> <br>',
        '<strong>Last Name</strong><br> <input type="text" id ="lastname" name="lastname" class="textfield"> <br>',
        '<strong>Password</strong><br> <input type="password" id ="password" name="password" class="textfield"> <br>',
        '<strong>Username</strong><br> <input type="text" id ="username" name="username" class="textfield"> <br>',
        '<button type= "button" id="login" onclick= "validate();"> <strong> Register </strong> </button>',
        '</div>',
        '</fieldset>',
        '</form>',
		'</div>',
		'<div id="Response"></div>',
		
	].join('');
	document.getElementById("content").innerHTML= compose_panel;
	//document.getElementById("Send").onclick= insert_data;
	
}



function insert_data(){
    
    var rec = document.getElementById("recipient").value;
    var sub = document.getElementById("subject").value;
    var bod = document.getElementById("message_content").value;
    var req_mes = "recipient="+rec+"&subject="+sub+"&body="+bod;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST","message.php",true);
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
            //document.getElementById("Response").innerHTML= responseMessage;
            alert(responseMessage);
            view_messages();
        }
    };
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.setRequestHeader("Content-length", req_mes.length);
    xmlHttp.setRequestHeader("Connection", "close");
    
    
    xmlHttp.send(req_mes);
    //var responseMessage = xmlHttp.responseText;
    //alert(responseMessage);
}

function view_messages(){
    console.log("the message list");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
            document.getElementById("content").innerHTML= responseMessage;
        }
    };
    xmlHttp.open("POST","message_list.php",true);
    xmlHttp.send();

}

function view_users(){
    console.log("the user list");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
            document.getElementById("content").innerHTML= responseMessage;
             
        }
    };
    xmlHttp.open("GET","view_users.php",true);
    xmlHttp.send();   
}

function logout(){
    console.log("logging out");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
            alert(responseMessage);
             window.location.href="login.html";
        }
    };
    xmlHttp.open("GET","logout.php",true);
    xmlHttp.send();
    
}
function read(){
    console.log("reading");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
           
            // document.getElementById("content").innerHTML= responseMessage;
        }
    };
    xmlHttp.open("GET","read.php",true);
    xmlHttp.send();
    
}
 
