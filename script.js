const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".price");
	let totalp=0;
	prices.forEach((price)=>{
		totalp=totalp+parseInt(price.innerText);
	});
	const newRow=document.createElement("tr");
	const newCell=document.createElement("td");
	newCell.id="ans";
	newCell.colSpan="2";
	newCell.innerText="Total Price" + totalp;
	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
	
  
};

getSumBtn.addEventListener("click", getSum);

