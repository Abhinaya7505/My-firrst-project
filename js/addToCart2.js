{
	
	let prodArray=localStorage.getItem("productsArray").split(",")
	
	let len=prodArray.length		
	
	let qtyArr=new Array()

	
	for(let k=0;k<len;k++)
	{
		
	if(document.getElementById(`i${prodArray[k]}`).value!="")
	{
	qtyArr[k]=document.getElementById(`i${prodArray[k]}`).value	
	}
	else{
		
	qtyArr[k]=1
	}	
	}
	
	
	localStorage.setItem("qty",qtyArr)
	}