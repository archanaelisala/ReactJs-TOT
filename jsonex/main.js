function loadjson(file,callback){
	// need to create object
	var xhr = new XMLHttpRequest(); 
	// need to mention file type like json/xml 
	xhr.overrideMimeType("application/json");

	xhr.open("GET",file,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	let data = JSON.parse(text);
	console.log(data);
	displayData(data.details);
})

function displayData(info){
	var bodyElement = document.querySelector("body");

	var row = document.createElement("div");
	row.classList.add("row");
	bodyElement.appendChild(row);

	for(i=0;i<info.length;i++){
		var column = document.createElement("div");
		row.appendChild(column);

		var card = document.createElement("div");
		card.classList.add("cardbody1");
		column.appendChild(card);

		var img1 = document.createElement("img");
		img1.src = info[i].image;
		img1.alt = "Picture";
		card.appendChild(img1);


		var name = document.createElement("h2");
		name.textContent = info[i].name;
		card.appendChild(name);

		var productdes = document.createElement("u");
		productdes.textContent = "Product Description";
		card.appendChild(productdes);

		var br = document.createElement("br");
		card.appendChild(br);

		var oprice = document.createElement("s");
		oprice.textContent = info[i].price;
		card.appendChild(oprice);

		var offerprice = document.createElement("p");
		offerprice.textContent = info[i].offerprice;
		card.appendChild(offerprice);


		var btn1 = document.createElement("button");
		btn1.textContent = "BuyNow";
		card.appendChild(btn1);

		var btn2 = document.createElement("button");
		btn2.textContent = "AddTocart";
		card.appendChild(btn2);


	}
}


