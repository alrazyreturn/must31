var loginJs = {
    // Application Constructor
    initialize: function() {
        
    },
	
	alertFun: function() {
       alert('welcome click'); 
    },
	
	initialize2: function() {
        
    },
	
	
	updateIndexSlider :function (){
	//	alert("test");
		
	
			 if(window.localStorage.getItem("loggedIn") == 1) {
				 
				 var name= window.localStorage.getItem("name");
		  k="<div class=\"user_thumb\"><img src=\"images/profile.jpg\" alt=\"\" title=\"\" /><div class=\"user_details\"><p>Hi, <span>"+name+"</span></p></div>  </div><nav class=\"user-nav\"><ul><li><a  href=\"studentData.html\"><img src=\"images/icons/white/team.png\" alt=\"\" title=\"\" /><span>Student Zone</span></a></li><li><a  href=\"contact.html\" onclick=\"loginJs.getInfo();\" class=\"close-panel\"><img src=\"images/icons/white/aboutus.png\" alt=\"\" title=\"\" /><span>student Info</span></a></li><li><a  href=\"inbox.html\" onclick=\"inbox.getInbox()\" class=\"close-panel\"><img src=\"images/icons/white/message.png\" alt=\"\" title=\"\" /><span>Messages</span><strong  id='message_count' class=\"green\"></strong></a></li><li><a href='std/course.html' onclick=\"course.progressData();\" class=\"close-panel\"><img src=\"images/icons/white/download.png\" alt=\"\" title=\"\" /><span>progress Report</span></a></li><li><a href=\"index.html\" class=\"close-panel\"><img src=\"images/icons/white/lock.png\" onclick=\"loginJs.logout();\"  alt=\"\" title=\"\" /><span>Logout</span></a></li></ul></nav>";
		  
		//  alert(k);
		  document.getElementById("userdata").innerHTML =k;
		  
		 
		/*  document.addEventListener("online", function() {
			   app.alertmessage("online");
			   loginJs.getMessageCount(); 
			   },false);*/
		 
			 }
			 else
			 {
				 
			 }
		
		
		  
	},
	
	
	 
  logout :function()
  {
	  
	  	function onConfirm(buttonIndex) {
 	   alert('You selected button ' + buttonIndex);
	   if(buttonIndex == 1)
	   {
		     window.localStorage.removeItem("loggedIn");
		  window.localStorage.removeItem("std_id");
	  window.localStorage.removeItem("name", name);
	  var k="<div class=\"user_login_info\" id=\"userdata\"><div class=\"user_thumb\"><img src=\"images/profile.jpg\" alt=\"\" title=\"\" /><div class=\"user_details\"><p>Hi, <span>Welcome At MUST</span></p></div>  </div><nav class=\"user-nav\"><ul><li><a  href=\"studentData.html\"><img src=\"images/icons/white/aboutus.png\" alt=\"\" title=\"\" /><span>about</span></a></li><li><a   href=\"contact2.html\"   class=\"close-panel\"><img src=\"images/icons/white/contactus.png\" alt=\"\" title=\"\" /><span>student Info</span></a></li><li><a  href=\"blog.html\" onclick=\"news.getNews()\;\" class=\"close-panel\"><img src=\"images/icons/white/contact.png\" alt=\"\" title=\"\" /><span>Messages</span><strong class=\"green\"></strong></a></li><li><a  href=\"#\" data-popup=\".popup-login\" class=\"open-popup\"><img src=\"images/icons/white/lock.png\" alt=\"\" title=\"\" /><span>Login</span></a></li></ul></nav></div>";
	  
	    document.getElementById("userdata").innerHTML =k;
	   }
	}
	
	navigator.notification.confirm(
		'Are you sure you want to logout', // message
		 onConfirm,            // callback to invoke with index of button pressed
		'Warnning',           // title
		['NO','YES']     // buttonLabels
	);
	
	
	 
	  
  },

  getInfo :  function ()
			{
			//	alert("welcome1");
			
		var std_id= window.localStorage.getItem("std_id");
	//	alert("welcome");
        $.ajax({ 
        type: 'POST', 
        url: 'http://www.must.edu.eg/studentszone/ios/info.php', 
        data: { std_id: std_id }, 
        dataType: 'json',
        success: function (data) { 
 

 			 var news_output=   "";
            $.each(data.info, function(index, element) {
                 
                   
                  // alert(element.title);
                   
				  var success= element.success;
				 
				  
				  
                   if(success!=0)
				   {
					//   alert(success);
					   
					    var college= element.college;
				  var cgpa= element.cgpa;
				  var earn_hrs= element.earn_hrs;
				  var level= element.level;
				  var major= element.major;
				  var advisor= element.advisor; 
				  
				  
					   var name= window.localStorage.getItem("name");
					  // alert(name);
					   document.getElementById("std_college").innerHTML ="<h4><font color='blue' >"+college+"</font></h4>";
					   document.getElementById("std_id").innerHTML ="<h4><font color='blue' >"+std_id+"</font></h4>";
					   document.getElementById("std_cgpa").innerHTML ="<h4><font color='blue' >"+cgpa+"</font></h4>";
					   document.getElementById("std_earnedHours").innerHTML ="<h4><font color='blue' >"+earn_hrs+"</font></h4>";
					   document.getElementById("std_level").innerHTML ="<h4><font color='blue' >"+level+"</font></h4>";
					   document.getElementById("std_major").innerHTML ="<h4><font color='blue' >"+major+"</font></h4>";
					   document.getElementById("std_name").innerHTML ="<h4><font color='blue' >"+name+"</font></h4>";
					   document.getElementById("studentImage").innerHTML ="<img src=\"http://must.edu.eg/intranet/pics/"+std_id+".jpg\" width=\"35%\" height=\"35%\" frameborder=\"10\" style=\"border:10\"></img>";
					   
					   
					   document.getElementById("std_advisor").innerHTML ="<h4><font color='blue' >"+advisor+"</font></h4>";
					   
				   }
            
			
		
                    }  );
					  
                    document.getElementById("news_data").innerHTML =news_output;
            }

         });
		 
		 
}
	,
	
	login:  function ()
		{
			
			var user_name=41703;// document.getElementById("Lusername").value;
			var password='0129997254';// document.getElementById("Lpassword").value;
			
			$.ajax({ 
			type: 'POST', 
			   url: 'http://www.must.edu.eg/studentszone/ios/check_login.php', 
			data: { user_name: user_name,password:password  }, 
			dataType: 'json',
			success: function (data) { 
				alert(data);
				 
				 /*
				$.each(data, function(index, element) {
					$('body').append($('<div>', {
						text: element.name
						alert(element.name);
						 }));
				 });
				   */ 
				   
				   
	
				$.each(data.user, function(index, element) { 

						alert(element.success);
						alert(element.Message);
						var name=element.name;
						alert(name);
						 if( element.success== 1)
						 {
							  window.localStorage.setItem("loggedIn", 1);
							  window.localStorage.setItem("std_id", user_name);
							  window.localStorage.setItem("name", name);
							  
							  loginJs.updateIndexSlider();
							  
							//  alert ("welcome");
							  
							 // inbox.getnotify();
				             //	alert("check notify");
							 
						 }
						 else
						 {
							 window.localStorage.removeItem("loggedIn");
							 window.localStorage.removeItem("std_id");
							 window.localStorage.removeItem("name", name);
						 }
						 
						 
						   
						 
						 if(window.localStorage.getItem("loggedIn") == 1) {
							// app.test('test');
							// app.localNotificationTest();
							// alet("welcome");
							//inbox.getnotify();
						//	alert("loginnng");
						  // alert("welcome");
						     app.getLocalNotification();
							}
							else
							{
							// Redirect to login page.
							} 
							
							 
						});
			   
				}
	
			 });
		} ,
		
			   getMessageCount :  function ()
			
			{
			//	alert("welcome1");
			var std_id=window.localStorage.getItem("std_id");
			//alert(std_id);
			var count=0;
			var inbox_count=0;
        $.ajax({ 
        type: 'POST', 
        url: 'http://www.must.edu.eg/studentszone/ios/std_inbox_undread.php', 
        data: { std_id: std_id }, 
        dataType: 'json',
        success: function (data) { 
  
			  var count=0;
          		  $.each(data.inbox, function(index, element) {
                     
					 if(element.success==1)
					 {
					  count = element.inbox_count;
					 }
					} 
				  ); 
				  
				 if(count !=0)
				 {
					 alert("kindly check your inbox you have = "+count +" unread message");
					 document.getElementById("message_count").innerHTML=count;
				 }
			 
					 
          	  }
			
			 

        		 });
		  }

};
