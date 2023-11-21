const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);



async function getQuote() {

    const url = 'https://shakespeare1.p.rapidapi.com/shakespeare/generate/lorem-ipsum';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e195192d7msh5982a173b4b8838p1e1107jsndf269ff3c4ea',
		'X-RapidAPI-Host': 'shakespeare1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  
   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Fetched quote")

        displayQuote(data.quoteText);     
    } 
    catch (error) {
        console.error("Error fetching quote:", error);
        alert("Failed to fetch quote. Please try again.");
    }
        

}

function displayQuote(quoteText) {
    const quoteElement = document.getElementById("js-quote-text");
    quoteElement.textContent = quoteText;
}


getQuote();