const checkLoto = document.getElementById("checkLoto");

checkLoto.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("Form has been submitted")

// Get input field with id=""
firstname = document.getElementById("firstname");
lastname = document.getElementById("lastname");
email = document.getElementById("email");
lotoNumber1 = document.getElementById("lotoNumber1");
lotoNumber2 = document.getElementById("lotoNumber2");
lotoNumber3 = document.getElementById("lotoNumber3");
lotoNumber4 = document.getElementById("lotoNumber4");
lotoNumber5 = document.getElementById("lotoNumber5");
lotoNumber6 = document.getElementById("lotoNumber6");
lotoNumbers = [Number(lotoNumber1.value), Number(lotoNumber2.value), Number(lotoNumber3.value), Number(lotoNumber4.value), Number(lotoNumber5.value)].sort(function(a, b){return a-b});
lotoNumbers.push(Number(lotoNumber6.value))

	if(firstname.value){
		document.getElementById("notice_firstname").innerHTML = ""
		}else{
		alert("Please enter your Firstname")
		notice_firstname = "Please enter your Firstname";
	    document.getElementById("notice_firstname").innerHTML = notice_firstname;
	}

	if(lastname.value){
		document.getElementById("notice_lastname").innerHTML = ""
		}else{
		alert("Please enter your Lastname")
		notice_lastname = "Please enter your lastname";
	    document.getElementById("notice_lastname").innerHTML = notice_lastname;
	}

	if(email.value){
		if(email.value.length > 8){	
			if(email.value.length < 30){
				document.getElementById("notice_email").innerHTML = ""
				let reg_syntax_email = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,3}$/;
				let resultat = reg_syntax_email.test(email.value);
					if(resultat){
						var results = [];
        				for (var i = 0; i < lotoNumbers.slice(0, -1).length - 1; i++) {
        					if (lotoNumbers.slice(0, -1)[i + 1] === lotoNumbers.slice(0, -1)[i]) {
            				results.push(lotoNumbers.slice(0, -1)[i]);
							}
						}
						if (results.length > 0) {
							alert("Common', try different numbers to have a chance 💩")
						}else if (document.getElementById("notice_firstname").innerHTML == "" && document.getElementById("notice_lastname").innerHTML == "" && document.getElementById("notice_email").innerHTML == ""){
							var arr = [];
							while(arr.length < 5){
								var r = Math.floor(Math.random() * 49) + 1;
								if(arr.indexOf(r) === -1) arr.push(r);
							}	
							
							var arrsort = arr.sort(function(a, b){return a-b})
							var s = Math.floor(Math.random() * 9) + 1;
							arrsort.push(s);
							var cheatcode = [1,2,3,4,5,6]
							console.log(lotoNumbers)
							console.log(cheatcode + " Try this if you see it 🙈")
							console.log("The good combination is : [" + arrsort.slice(0, -1) + "] ⭐" + arrsort.slice(-1));
							console.log("Your combination was : [" + lotoNumbers.slice(0, -1) + "] ⭐" + lotoNumbers.slice(-1));
						
								// comparing both arrays using stringify 
								if(JSON.stringify(lotoNumbers)==JSON.stringify(arrsort)){	
									alert("You WIN 1 MILLION DOLLAR BABY\n-CONGRATULATION " + firstname + "- Your winning ticket was : [" + lotoNumbers.slice(0, -1) + "] ⭐" + lotoNumbers.slice(-1))
									}else if (JSON.stringify(lotoNumbers)==JSON.stringify(cheatcode)){
									alert("Little Cheater You WIN " + firstname.value + " 😆😆😆\nHere are your numbers : [" + lotoNumbers.slice(0, -1) + "] ⭐" + lotoNumbers.slice(-1) + "\nBut the  real good combination was: [" + arrsort.slice(0, -1) + "] ⭐" + arrsort.slice(-1) + "\nDon't Expect to Receive Money")
								}else{
								alert("DAMN IT 😫 You loose...sorry " + firstname.value + "\nHere are your numbers : [" + lotoNumbers.slice(0, -1) + "] ⭐" + lotoNumbers.slice(-1) + "\nBut the good combination was: [" + arrsort.slice(0, -1) + "] ⭐" + arrsort.slice(-1) + "\nSORRYY TRY AGAIN 👊")
								}
						}else{
							alert("Fill your information, first !")		
						}	
					}else{
					alert("Please enter a valid Email with a '@', '.' and also 2 or 3 letters after the point")
					notice_email = "Please enter a valid Email with a '@', '.' and also 2 or 3 letters after the point";
		    		document.getElementById("notice_email").innerHTML = notice_email;
					}
			}else{
			alert("Please enter less than 30 characters for your Email")
			notice_email = "Please enter less than 30 characters for your Email";
		    document.getElementById("notice_email").innerHTML = notice_email;
			}
		}else{
		alert("Please enter more than 8 characters for your Email")
		notice_email = "Please enter more than 8 characters for your Email";
		document.getElementById("notice_email").innerHTML = notice_email;
		}
	}else{
	alert("Please enter your Email")
	notice_email = "Please enter your Email";
	document.getElementById("notice_email").innerHTML = notice_email;
	}
	
});


