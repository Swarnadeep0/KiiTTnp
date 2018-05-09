$.getJSON("./personal_details.json",function(data){
		 $.each(data.Personal,function(i,f){
			$("#personal").append("<h1 style='display:block;color: #cf8a05'>"+f.Name+"</h1><p style='margin-bottom:1px;margin-top:0.5px;'>"+f.Email+"</p><p>"+f.Mobile_number+"</p>");
		 })
	});

$.getJSON("./Academic.json",function(data){
			$.each(data.Academics.Performance,function(i,f){
				$("#education").append("<article><h2>"+f.education_topic+"</h2><h4 style='margin-top:1px;margin-bottom:2px;'>"+f.Institution+"</h4><p class='subDetails'>"+f.Year+"</p><p>"+f.format+" :"+f.Percentage+"</p></article>");
				})
			});
$.getJSON("./Extracurricular.json",function(data){
			$.each(data.Extracurricular.Activity,function(i,f){
				$("#extracurricular").append("<li style='margin-bottom:0.2pc'>"+f.Activity_name+"</li>");
			}),
			$.each(data.Extracurricular.Achievements,function(i,f){
				$("#extracurricular").append("<li style='margin-bottom:0.2pc'>"+f.Achievement_name+"</li>");
			})
		});
$.getJSON("./Seminar_Project.json",function(data){
		 $.each(data.Student_Project_Seminar.Seminar,function(i,f){
			$("#seminar").append("<li>"+f.Seminar_name+"</li>");
			}),
			$.each(data.Student_Project_Seminar.Certification,function(i,f){
				$("#seminar").append("<li>"+f.Certificate_name+"</li>");
			}),
			$.each(data.Student_Project_Seminar.Training_and_Internship,function(i,f){
				$("#internship").append("<article><h2>"+f.tr_name+"</h2><p class='subDetails'>Summary</p><p>"+f.tr_info+"</p><p class='subDetails'>Duration</p><p>"+f.tr_duration+"</p></article>");
			}),$.each(data.Student_Project_Seminar.Project,function(i,f){
				$("#project").append("<article><h2>"+f.Project_name+"</h2><p class='subDetails'>Summary</p><p>"+f.Project_info+"</p></article>");
			})
	});
$.getJSON("./Skill_Set.json",function(data){
	$.each(data.Skill_Set.Skills,function(i,f){
		$("#skill").append("<li>"+f.Skill_name+"</li>");
	})
});