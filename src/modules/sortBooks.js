const sortBooks = (data) => {
	for (let category in data) {
		data[category] = data[category].sort((element1, element2) => {
			// console.log(data[category]);
			if (element1.name < element2.name) {
				return -1;
			}
			if (element1.name > element2.name) {
				return 1;
			}
			return 0;
		});
	}
};

export default sortBooks;
