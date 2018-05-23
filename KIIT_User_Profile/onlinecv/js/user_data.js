$.getJSON("./Skill_Set.json",function(data){
			$.each(data.Skill_Set.Skills,function(i,f){
				$("#Skills").append("<div class='progress-item'><span class='progress-title'>"+f.Skill_name+"</span><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow="+f.Proficiency+"aria-valuemin='0'aria-valuemax='100' style='width:"+f.Proficiency+"%;'><span class='progress-percent'>"+f.Proficiency+"</span></div></div></div>");	
			})
		});
$.getJSON("./Academic.json",function(data){
			$.each(data.Academics.Performance,function(i,f){
				$("#education").append("<div class='content-item'><small>"+f.Year+"</small><h3>"+f.education_topic+"</h3><h4>"+f.Institution+"</h4><p>"+f.format+": "+f.Percentage+"</p></div>");	
			})
		});
$.getJSON("./Seminar_Project.json",function(data){
			$.each(data.Student_Project_Seminar.Training_and_Internship,function(i,f){
				$("#internship").append("<div class='col-md-6'><div class='content-item'><h3>"+f.tr_name+"</h3><p>"+f.tr_info+"</p></div></div>");	
			}),
			$.each(data.Student_Project_Seminar.Certification,function(i,f){
				$("#certificates").append("<div class='col-md-6'><div class='content-item'><h3>"+f.Certificate_name+"</h3><p>"+f.Certificate_info+"</p></div></div>");	
			}),
			$.each(data.Student_Project_Seminar.Project,function(i,f){
				$("#project").append("<div class='expertise-item'><h3>"+f.Project_name+"</h3><p>"+f.Project_info+"</p></div>");
			}),
		    $.each(data.Student_Project_Seminar.Seminar,function(i,f){
				$("#seminar").append("<div class='expertise-item'><h3>"+f.Seminar_name+"</h3><p>"+f.Seminar_info+"</p></div>");
			})
		});
$.getJSON("./Extracurricular.json",function(data){
				$.each(data.Extracurricular.Activity,function(i,f){
				$("#activity").append("<div class='content-item'><h3>"+f.Activity_name+"</h3><p>"+f.Activity_info+"</p></div>");	
			}),
			$.each(data.Extracurricular.Achievements,function(i,f){
				$("#activity").append("<div class='content-item'><h3>"+f.Achievement_name+"</h3><p>"+f.Achievement_info+"</p></div>");	
			})
});
$.getJSON("./personal_details.json",function(data){
			$.each(data.Personal,function(i,f){
				$("#personal_front").append("<h1>Hi, I'm "+f.Name+"!</h1><p class='lead'>"+f.Institute+"</p><ul class='social-icon'><li><a href="+f.linkedin+"><i class='fa fa-linkedin' aria-hidden='true'></i></a></li><li><a href="+f.mail+"><i class='fa fa-envelope' aria-hidden='true'></i></a></li><li><a href="+f.github+"><i class='fa fa-github' aria-hidden='true'></i></a></li></ul>");
				$("#address").append(f.Address);
				$("#mobile").append(f.Mobile_number);
				$("#mail").append(f.Email);
				$("#user_img").append("<img src="+f.img+">");
				$("#objective").append(f.Objective);
				var a=parseInt(f.Status_completion);
				switch(a){
				case 4:
					document.getElementById("1st_Year").classList.add("activated");
					document.getElementById("2nd_Year").classList.add("activated");
					document.getElementById("3rd_Year").classList.add("activated");
					document.getElementById("4th_Year").classList.add("activated");
					document.getElementById("1st_fa").classList.add("fa-spin");
					document.getElementById("2nd_fa").classList.add("fa-spin");
					document.getElementById("3rd_fa").classList.add("fa-spin");
				break;
				case 3:
					document.getElementById("1st_Year").classList.add("activated");
					document.getElementById("2nd_Year").classList.add("activated");
					document.getElementById("3rd_Year").classList.add("activated");
					document.getElementById("1st_fa").classList.add("fa-spin");
					document.getElementById("2nd_fa").classList.add("fa-spin");
					document.getElementById("3rd_fa").classList.add("fa-spin");
				break;
				case 2:
					document.getElementById("1st_Year").classList.add("activated");
					document.getElementById("2nd_Year").classList.add("activated");
					document.getElementById("1st_fa").classList.add("fa-spin");
					document.getElementById("2nd_fa").classList.add("fa-spin");
				break;
				case 1:
				    document.getElementById("1st_Year").classList.add("activated");
					document.getElementById("1st_fa").classList.add("fa-spin");
				break;
				}
			})
});