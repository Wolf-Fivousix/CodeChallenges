fetch(temperatureUrl)
  .then((response) => {
    updateTheFancyTemperatureUI(response.json());
});

temperatureUrlArray = [
	"https://.../best-data.json",
      "https://.../average-data.json" ,
      "https://.../worst-data.json"
];

// Update your app to display the best available temperature.
// assume returns error if no data back?

// fetch("https://.../best-data.json") => error
// fetch("https://.../best-data.json") => 69

Promise.all([promiseA, promiseB])
  .then(handleFulfilled) // if all fulfilled
  .catch(handleRejected); // if any failed

Promise.allSettled([promiseA, promiseB])
	.then((result))

result: [
	{status: 'fulfilled', data: ...}, // promiseA
	{status: 'reject', data: ...}, // promiseB
]
// make our promise array with all fetch request to each link.
// call allSettled and pass in this array.
// inside .then
// 	iterate through our result array and find the first object that has "status" as "fulfilled".

function updateTemperature(temperatureUrlArray) {
	const promises = makePromises(temperatureUrlArray);

	Promise.allSettled(promises)
		.then(result => {
			// result: [
			// 	{status: 'reject', data: error}, // promiseA
			// 	{status: 'fulfilled', data: 76}, // promiseB
			// 	{status: 'fulfilled', data: 80}  // promiseC
			// ]
		for (let i = 0; i < result.length; ++i) {
			if (result.status === 'fulfilled') {
				const { data } = result[i];
				updateTheFancyTemperatureUI(data.json());
				return;
			}
		}
	});
}

function makePromises(array) {
	const result = [];
	const controller = new AbortController();
	const signal = controller.signal;
	setTimeout(() => controller.abort(), 5000);

	for (let i = 0; i < array.length; ++i) {
		// Raw promises, to be executed.
		// result.push(fetch(array[i]));
		// result.push(createFetch(array[i]));
		result.push(fetch(array[i], { signal }));
	}
	return result;
}

fetch(temperatureUrl)
  .then((response) => {
    updateTheFancyTemperatureUI(response.json());
});

temperatureUrlArray = [
	"https://.../best-data.json", => error
      "https://.../average-data.json" , => 76
      "https://.../worst-data.json" => 80
];

function blah() {
	const controller = new AbortController();
	const signal = controller.signal;
	setTimeout(() => controller.abort(), 5000);
	fetch(url, { signal }).then(...);
}