
/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
	// Complete the function
	let response;
	entries.forEach((e) => {
	  if (
		new Date(e.date).toDateString() === new Date("2022-04-01").toDateString()
	  ) {
		if (response) response += "," + e.name;
		else response = e.name;
	  }
	});
	console.log(response);
  }
  
  // module.exports = todaysEntries;
  todaysEntries([
	{ name: "Harry", date: "2022-04-01T02:53:42+05:30" },
	{ name: "Hermione", date: "2022-04-02T02:53:42+05:30" },
	{ name: "Ron", date: "2022-04-01T03:53:42+05:30" },
  ]);