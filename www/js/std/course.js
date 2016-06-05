var course = {
    // Application Constructor
    initialize: function() {
        
    },
	
	courseData: function() { 
	
	
	 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
			$('#load').html("there is no internet connection");
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		$('#Load').html("<h1>Loding ......</h1>");
		}
	 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/reg_report.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },


secdualData: function() { 


	 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
			$('#load').html("there is no internet connection");
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		$('#Load').html("<h1>Loding ......</h1>");
		}
	 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/Time_Table.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	
	SemesterGradeData: function() { 
	
	
 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
			$('#load').html("there is no internet connection");
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		$('#Load').html("<h1>Loding ......</h1>");
		}
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/results.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	progressData: function() { 
			 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
			$('#load').html("there is no internet connection");
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		$('#Load').html("<h1>Loding ......</h1>");
		}
	 
	   
	   /*Using ajax*/
		 var std_id=window.localStorage.getItem("std_id");
		$.ajax({
		  dataType:'html',
		  type:'POST',
		  url:'http://www.must.edu.eg/studentszone/android/progress_report.php',
		  data: { std_id: std_id }, 
		  success:function(data) {
			$('#ajax').html($(data).children());   
		  }
		});
    },
	
	initialize2: function() {
        
    },
	
	
};
