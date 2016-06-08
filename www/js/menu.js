var menu = {
    // Application Constructor
    initialize: function() {
        
    }, 
	
	fillMenu: function() {
       
	 // alert("fsadfadsfsdafsadfsad");
	   		
		 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
		 setTimeout(function () {  

		if (isOffline ) {
			
		  k="     <ul><li><a href=\"index.html\"><img src=\"images/icons/white/home.png\" alt=\"\" title=\"\" /><span>Home</span></a></li><li><a href=\"about.html\"><img src=\"images/icons/white/aboutus.png\" alt=\"\" title=\"\" /><span>About</span></a></li><li><a href=\"photos.html\"><img src=\"images/icons/white/photos.png\" alt=\"\" title=\"\" /><span>Gallery</span></a></li><li><a  href=\"\" onclick=\"news.getNews();\"><img src=\"images/icons/white/contact.png\" alt=\"\" title=\"\" /><span>News</span></a></li><li>";
		  
		   if(window.localStorage.getItem("loggedIn") == 1) {
		  k +="<a href=\"studentData.html\" id=\"aaa\" ><img src=\"images/icons/white/team.png\" alt=\"\" title=\"\" /><span>Student Zone</span></a>"
		   }
		   else
		   {
			   k +="<a href=\"#\" data-popup=\".popup-login\" class=\"open-popup\" ><img src=\"images/icons/white/team.png\" alt=\"\" title=\"\" /><span>Student Zone</span></a>"
		   }
		  
		  k +="</li><li><a href=\"#\" data-popup=\".popup-social\" class=\"open-popup\"><img src=\"images/icons/white/heart.png\" alt=\"\" title=\"\" /><span>Social</span></a></li><li><a href=\"contact2.html\" ><img src=\"images/icons/white/contactus.png\" alt=\"\" title=\"\" /><span>Contact</span></a></li></ul>";
 		//   alert("offfffffffffffff");
		 document.getElementById("menudata").innerHTML =k;
		
		}
		else
		
		{
		  k="     <ul><li><a href=\"index.html\"><img src=\"images/icons/white/home.png\" alt=\"\" title=\"\" /><span>Home</span></a></li><li><a href=\"about.html\"><img src=\"images/icons/white/aboutus.png\" alt=\"\" title=\"\" /><span>About</span></a></li><li><a href=\"photos.html\"><img src=\"images/icons/white/photos.png\" alt=\"\" title=\"\" /><span>Gallery</span></a></li><li><a  href=\"blog.html\" onclick=\"news.getNews();\"><img src=\"images/icons/white/contact.png\" alt=\"\" title=\"\" /><span>News</span></a></li><li>";
		  
		   if(window.localStorage.getItem("loggedIn") == 1) {
		  k +="<a href=\"studentData.html\" id=\"aaa\" ><img src=\"images/icons/white/team.png\" alt=\"\" title=\"\" /><span>Student Zone</span></a>"
		   }
		   else
		   {
			   k +="<a href=\"#\" data-popup=\".popup-login\" class=\"open-popup\" ><img src=\"images/icons/white/team.png\" alt=\"\" title=\"\" /><span>Student Zone</span></a>"
		   }
		  
		  k +="</li><li><a href=\"#\" data-popup=\".popup-social\" class=\"open-popup\"><img src=\"images/icons/white/heart.png\" alt=\"\" title=\"\" /><span>Social</span></a></li><li><a href=\"contact2.html\" ><img src=\"images/icons/white/contactus.png\" alt=\"\" title=\"\" /><span>Contact</span></a></li></ul>";
		//  alert("onnnnnnnnnnnn");
		 document.getElementById("menudata").innerHTML =k;
		};}, 100); 	 
		
		 
		
    }, 
	
	
	};
