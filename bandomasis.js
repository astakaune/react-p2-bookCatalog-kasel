// let katalogasMas = ["ieva", "tadas", "linas"];
// for (let data in katalogasMas) {
//     console.log(data);
//     console.log(katalogasMas[data]);
// 	// console.log(data, katalogasMas[data]);
// }

// console.log("----------");
// let katalogasObj = { prop1: "ieva", prop2: "tadas", pro3: "linas" };
// for (let data in katalogasObj) {
//     console.log(data);
// 	console.log(katalogasObj[data]);
// }

// console.log(" ");
// console.log("----of------");

// for (let data of katalogasMas) {
//     console.log(data);
//     // console.log(data[katalogasMas]);
// }

// console.log("----------");
// for(let data of katalogasObj){
// console.log(data);
// }

let books = {
	grozine: [
		{
			isbn: "GR1236K",
			year: 2000,
			name: "Mano mintys debesyse",
			pages: 215,
			price: 50,
		},
		{
			isbn: "GR1894P",
			year: 2020,
			name: "Tarp pilku debesu",
			pages: 412,
			price: 200,
		},
		{
			isbn: "GR1252L",
			year: 2021,
			name: "Haris makfloperis",
			pages: 500,
			price: 100,
		},
		{
			isbn: "GR1673T",
			year: 2008,
			name: "Soulino virejas",
			pages: 431,
			price: 80,
		},
	],
	moksline: [
		{
			isbn: "MK8900R",
			year: 2001,
			name: "Marlis ir as",
			pages: 389,
			price: 60,
		},
		{
			isbn: "MK5611R",
			year: 2007,
			name: "Kazkas kazkur",
			pages: 700,
			price: 20,
		},
		{
			isbn: "MK6781R",
			year: 1999,
			name: "SSRS griutis mokslininko akimis",
			pages: 820,
			price: 40,
		},
		{
			isbn: "MK5671L",
			year: 1980,
			name: "Kates vs Sunys",
			pages: 190,
			price: 52,
		},
	],
	fantastine: [
		{
			isbn: "FN6781R",
			year: 2004,
			name: "Paslydes",
			pages: 350,
			price: 50,
		},
		{
			isbn: "FN8767P",
			year: 2021,
			name: "Parpuoles",
			pages: 410,
			price: 50,
		},
		{
			isbn: "FN7451R",
			year: 2008,
			name: "Putino politika",
			pages: 430,
			price: 49,
		},
		{
			isbn: "FN4671L",
			year: 2012,
			name: "Akis uz rankas",
			pages: 500,
			price: 100,
		},
	],
};

for (let kat in books) {
	console.log(kat);
	for (let data of books[kat]) {
		for (let info in data) {
			console.log(info, data[info]);
		}
		console.log("-------");
	}
}
