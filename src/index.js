/* constants */
const resultsDiv = document.querySelector("#results");
const apiSearchForm = document.querySelector("#search-form");
const googleSearchForm = document.querySelector("#google-search-form")
const apiRoot = "https://api.tvmaze.com";

//✅ 1. on tv maze api search form submit
apiSearchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let query = encodeURI(e.target.search.value);

	//✅ 1a. send search value to API

	fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			//✅ 1b. render title, image, summary of show
			// data.forEach(curShow => {
			// 	const showTitle = document.createElement("h2");
			// 	const showImg = document.createElement("img");
			// 	const showSum = document.createElement("div");

			// 	showTitle.textContent = curShow.show.name
			// 	showImg.src = curShow.show.image.original
			// 	showImg.width = "400";
			// 	showSum.innerHTML = curShow.show.summary
			// 	showSum.style.width = "400px";

			// 	resultsDiv.append(showTitle, showImg, showSum)
			// })

			const curShow = data[0]

			const showTitle = document.createElement("h2");
			const showImg = document.createElement("img");
			const showSum = document.createElement("div");

			showTitle.textContent = curShow.show.name;
			showImg.src = curShow.show.image.original;
			showImg.width = "400";
			showSum.innerHTML = curShow.show.summary;
			showSum.style.width = "400px";

			resultsDiv.append(showTitle, showImg, showSum);

			const id = data[0].show.id;
			//✅ 1c. render first episode of show
			fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
				.then((res) => res.json())
				.then((data) => {
					//✅ 1d. render all episodes of show

					data.forEach(epi => {
						let epiSeason = document.createElement("p");
						let epiImage = document.createElement("img");
						epiSeason.textContent = `Season ${epi.season} Episode ${epi.number}`;
						epiImage.src = epi.image.original;
						epiImage.style.width = "400px";
	
						resultsDiv.append(epiSeason, epiImage);
					})
					
				});

		});
});

//✅ 2. create keys.js file to hold API key for Google books

//✅ 3b. make fetch request to google books

//✅ 3c. display data on page for one book

//✅ 3d. iterate over all items and display data on page
