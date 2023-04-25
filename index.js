console.log
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//meter to kilometer formula 
		result.value = Number(input.value) * 0.001;

	}
	if(option_from === "meter" && option_to==="centimeter"){
		//meter to centimeter formula 
		result.value = Number(input.value) *100;

	}
	else if(option_from === "meter" && option_to==="hectometer"){
		//hectometer to meter formula 
		result.value = Number(input.value)*0.01;
	}
	else if(option_from === "meter" && option_to==="decimeter"){
		//hectometer to meter formula 
		result.value = Number(input.value)*10;
	}
	else if(option_from === "meter" && option_to==="millimeter"){
		//hectometer to meter formula 
		result.value = Number(input.value)*1000;
	}
	else if(option_from === "meter" && option_to==="meter"){
		//meter to meter formula 
		result.value = input.value
	}

	else if(option_from === "kilometer" && option_to==="meter"){
		// kilometer to meter formula 
		result.value = Number(input.value) * 1000;

	}
	else if(option_from === "kilometer" && option_to==="centimeter"){
		// kilometer to centimeter formula 
		result.value = Number(input.value) * 100000;

	}
	else if(option_from === "kilometer" && option_to==="millimeter"){
		// kilometer to millimeter formula 
		result.value = Number(input.value) * 1000000;

	}
	else if(option_from === "kilometer" && option_to==="decimeter"){
		// kilometer to decimeter formula 
		result.value = Number(input.value) * 10000;

	}
	else if(option_from === "kilometer" && option_to==="hectometer"){
		// kilometer to hectometer formula 
		result.value = Number(input.value) * 10;

	}
	
	else if(option_from === "kilometer" && option_to==="kilometer"){
		//kilometer to kilometer formula 
		result.value = input.value
	
    }
	else if(option_from === "millimeter" && option_to==="meter"){
	//millimeter to meter formula 
	result.value = Number(input.value)* 0.001;
    }
    else if(option_from === "millimeter" && option_to==="centimeter"){
		//millimeter to centimeter formula 
		result.value = Number(input.value)* 0.1;
		}
		
else if(option_from === "millimeter" && option_to==="kilometer"){
	//millimeter to kilometer formula 
	result.value = Number(input.value)*0.000001;

}
else if(option_from === "millimeter" && option_to==="hectometer"){
	//millimeter to hectometer formula 
	result.value = Number(input.value)*0.00001;

}
else if(option_from === "millimeter" && option_to==="decimeter"){
	//millimeter to decimeter formula 
	result.value = Number(input.value)*0.01000000;

}
else if(option_from === "millimeter" && option_to==="millimeter"){
	//millimeter to millimeter formula 
	result.value = input.value

}
else if(option_from === "decimeter" && option_to==="kilometer"){
	//decimeter to kilometer formula 
	result.value = Number(input.value)*0.0001;

}
else if(option_from === "decimeter" && option_to==="centimeter"){
	//decimeter to kilometer formula 
	result.value = Number(input.value)*10.00000;

}


else if(option_from === "decimeter" && option_to==="millimeter"){
	//decimeter to millimeter formula 
	result.value = Number(input.value)*100;

}
else if(option_from === "decimeter" && option_to==="hectometer"){
	//decimeter to hectometer formula 
	result.value = Number(input.value)*0.001;

}
else if(option_from === "decimeter" && option_to==="meter"){
	//decimeter to meter formula 
	result.value = Number(input.value)*0.1;

}
else if(option_from === "decimeter" && option_to==="decimeter"){
	//decimeter to decimeter formula 
	result.value = input.value

}

else if(option_from === "hectometer" && option_to==="millimeter"){
	//hectometer to millimeter formula 
	result.value = Number(input.value)*100000;

}
else if(option_from === "hectometer" && option_to==="centimeter"){
	//hectometer to millimeter formula 
	result.value = Number(input.value)*10000;

}
else if(option_from === "hectometer" && option_to==="kilometer"){
	//hectometer to kilometer formula 
	result.value = Number(input.value)*0.1;

}
else if(option_from === "hectometer" && option_to==="decimeter"){
	//hectometer to decimeter formula 
	result.value = Number(input.value)*1000;

}
else if(option_from === "hectometer" && option_to==="meter"){
	//hectometer to meter formula 
	result.value = Number(input.value)*100;

}
else if(option_from === "hectometer" && option_to==="hectometer"){
	//hectometer to hectometer formula 
	result.value = input.value

}
else if(option_from === "centimeter" && option_to==="meter"){
	//centimeter to meter formula 
	result.value = Number(input.value)* 0.01 ;

}
else if(option_from === "centimeter" && option_to==="kilometer"){
	//centimeter to kilometer formula 
	result.value = Number(input.value)*0.00001;

}
else if(option_from === "centimeter" && option_to==="millimeter"){
	//centimeter to millimeter formula 
	result.value = Number(input.value)*10;

}
else if(option_from === "centimeter" && option_to==="decimeter"){
	//centimeter to decimeter formula 
	result.value = Number(input.value)*0.1;

}
else if(option_from === "centimeter" && option_to==="hectometer"){
	//centimeter to hectometer formula 
	result.value = Number(input.value)*0.0001 ;

}
else if(option_from === "centimeter" && option_to==="centimeter"){
	//centimeter to centimeter formula 
	result.value = input.value

}

}