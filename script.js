let row = 3 ;
let table = document.getElementById("sampleTable");
function insert_Row() {
    //Write your code here
	let newRow = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	cell1.innerText = `Row${row} cell1`;
	cell2.innerText = `Row${row} cell2`;
	row++;
	newRow.append(cell1,cell2);
	table.appendChild(newRow);
}
