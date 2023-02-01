let requestCountryInfo = async(countrieCode) =>{
    let makecall = await fetch(`https://restcountries.com/v3.1/alpha/${countrieCode}`);
    let result = await makecall.json();
    console.log(`The requested country is: ${result[0].name.common}`)
    console.log(result);
    console.log("Neighbours: ", result[0].borders);
}

requestCountryInfo("mkd");
requestCountryInfo("nl");
requestCountryInfo("slo");