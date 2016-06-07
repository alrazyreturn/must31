var course = {
    // Application Constructor
    initialize: function() {
        
    },
	
	courseData: function() { 
	
	//$("#Pagetitle").html("Course Report"); 
	setTimeout(function () { $("#Pagetitle").html("Course Report"); }, 100);
	
	 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
		setTimeout(function () { $('#loadcourse').html("there is no internet connection");}, 100);
			//alert("kindly check your internet connection");
			
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		 
		setTimeout(function () { $('#loadcourse').html("<h1>Loding ......</h1>");}, 100);
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
			setTimeout(function () { $('#loadcourse').html("");}, 120);  
		  }
		});
    },


secdualData: function() {
	
	
	
	setTimeout(function () { $("#Pagetitle").html("SecdualData Report"); }, 100);
	
	 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
					setTimeout(function () { $('#loadcourse').html("there is no internet connection");}, 100);
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		setTimeout(function () { $('#loadcourse').html("<h1>Loding ......</h1>");}, 100);
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
			setTimeout(function () { $('#loadcourse').html("");}, 120);
		  }
		});
    },
	
	
	SemesterGradeData: function() {  
	setTimeout(function () { $("#Pagetitle").html("Semester Grade Report"); }, 100);
	
 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 

		if (isOffline ) {
			alert("kindly check your internet connection");
			setTimeout(function () { $('#loadcourse').html("there is no internet connection");}, 100);
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
				setTimeout(function () { $('#loadcourse').html("<h1>Loding ......</h1>");}, 100);
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
			setTimeout(function () { $('#loadcourse').html("");}, 120);
		  }
		});
    },
	
	progressData: function() { 
			 var isOffline = 'onLine' in navigator && !navigator.onLine;
		     app.alertmessage("isOffline ="+isOffline);
			 
       // $("#Pagetitle").html("Progress Report");
		setTimeout(function () { $("#Pagetitle").html("Progress Report"); }, 100);
		if (isOffline ) {
			alert("kindly check your internet connection");
			//$('#load').html("there is no internet connection");
			setTimeout(function () { $("#loadcourse").html("there is no internet connection"); }, 100);
			//document.getElementById("ajax").innerHTML="there is no internet connection";
			//alert("wwwwwwwwwwww");
			return;
		}
		else
		
		{
		//	document.getElementById("ajax").innerHTML="<h1>Loding ......</h1>";
		//alert("there is inter");
		//$('#Load').html("<h1>Loding ......</h1>");
		setTimeout(function () { $("#loadcourse").html("<h1>Loding ......</h1>"); }, 100);
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
			setTimeout(function () { $('#loadcourse').html("");}, 120);
		  }
		});
    },
	
	initialize2: function() {
        
    },
	
	
};
