import renderGroup from "./renderGroup";
import renderBooks from "./renderBooks";

const showBook = (data) => {
	for (let type in data) {
		let category = document.createElement("div");
		category.className = "card";
		// category.innerHTML = renderGroup(type); //reikia prideti parametra ir issiusti funkcijai apie suskaiciuotas knygas. zr.zemiau
		category.innerHTML = renderGroup(type, data[type].length);
		document.querySelector(".accordion").appendChild(category);
		console.log(" ");
		console.log(`${type}:`);
		for (let book of data[type]) {
			// console.log(book);
			for (let data in book) {
				if (book[data] === 2021) {
					book.name += " (Nauja knyga)";
				}
				console.log(`${data}:${book[data]}`);
				document.querySelector(`#${type} .card-body`).innerHTML +=
					renderBooks(data, book[data]);
			}
			console.log("------------");
			document.querySelector(`#${type} .card-body`).innerHTML += "<hr>";
		}
	}
};
export default showBook;
