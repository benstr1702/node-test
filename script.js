// 1. go to link https://israelpost.co.il/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%A1%D7%A0%D7%99%D7%A4%D7%99%D7%9D-%D7%95%D7%96%D7%99%D7%9E%D7%95%D7%9F-%D7%AA%D7%95%D7%A8-%D7%91%D7%A7%D7%9C%D7%99%D7%A7/%D7%96%D7%99%D7%9E%D7%95%D7%9F-%D7%AA%D7%95%D7%A8-%D7%95%D7%91%D7%99%D7%98%D7%95%D7%97?no=910
/**
 * 
 * HEADERS:
 * application-name:PostIL
 * application-api-key:'CA4ED65C-DC64-4969-B47D-EF564E3763E7'
 * authorization:
 * origin:
 * 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
 * 
 * 
 *    var branchData = {
        branchname: היחידה המרכזית נהריה,
        street: שד הגעתון,
        house: 40,
        city: נהריה,
        qnomycode: 183,
        geocode_latitude: 33.007229600,
        geocode_longitude: 35.092213700,
        branchnumber: 910
    };
 * 
 * 
 * 
 */

let maxResults = 30;
let serviceId = 440;
let today = new Date();
let startDate = today.toISOString().split("T")[0];

const headers = {
	"application-name": "PostIL",
	"application-api-key": "CA4ED65C-DC64-4969-B47D-EF564E3763E7",
	authorization:
		"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im92VFc2ckQ4ZmExM1V1cUdKT1BQNkFqa2NMQSJ9.eyJpc3MiOiJodHRwOi8vY2VudHJhbC5xbm9teS5jb20iLCJhdWQiOiJodHRwOi8vY2VudHJhbC5xbm9teS5jb20iLCJuYmYiOjE3NTQyMjQ0MTksImV4cCI6MTc1NTQzNDAxOSwidW5pcXVlX25hbWUiOiI2NWRkNmQyOS01MGZhLTQ3OTEtOWVjYy00NDdlNTVkNmMwN2MifQ.WcELJtdkUuVr7HDn2woEVsl4lm8HzdEipoXp-7k0fgksqycMKM1bf--nPRrmUHzwYeT-Whdqjvj8UhYSe0isN0ezvivdzxI--rpE6odZXDWgTTwO5-iLwnxRmLVH1LgBR6nR3i97Bra8qo3EjgFYg2DRPjDGVDe-X_OojPDZLKrtTsDiOGFCSjunTmRmOWwo-sC6UH7kcENTKfVAJm291vNquJgP8yR7UFPkRkBOmXIWtc1Z6JRgVEXyZLFbE_-Umv8499x8jfwqY9CbKEI1APyBf1M5sbpE-XO4knVeWhuAacfrhjkqS0mKtb4KbxhUX3nFz1b47K56dyloVRoKMA",
	origin: "https://israelpost.co.il",
	"user-agent": "Mozilla/5.0",
};

//get jwt token
function extractJWT() {
	try {
	} catch (error) {}
}
// Get Available Dates */

async function getAvailableDates(maxResults, serviceId, startDate) {
	try {
		console.log("Getting Dates...");

		const res = await fetch(
			`https://central.qnomy.com/CentralAPI/SearchAvailableDates?maxResults=${maxResults}&serviceId=${serviceId}&startDate=${startDate}`,
			{ headers: headers }
		);

		const data = await res.json();
		console.log("available dates: ", data);
		return data;
	} catch (error) {
		console.error("Unable to get available dates", error);
	}
}

// Get all the time slots for the selected date
// note: time slots in the api are counter as minutes from midnight so 8am == 480 , 8:05 == 485 and so on
// note: every date is represented as a calendarId so 11 Aug , 2025 could be 2184560 , we get these from the getAvailableDates function

//function getAvailableSlots(canlendarId) {}

getAvailableDates(maxResults, serviceId, startDate);
