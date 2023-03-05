let xhr = new XMLHttpRequest()

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

xhr.send()

// adding the event listener

xhr.onload = function () {
    // process the request and server will return the data
    if (xhr.status >= 200 && xhr.status < 300) {
        //conver the data raw data to js notation
        var data = JSON.parse(xhr.response);
        // console.log(data);

        // getting all the asian countries
        let asianCountries = data.filter(country => country.region === "Asia")
        console.log(asianCountries)

        // getting all the countries with population less than 2 lakh
        let lowPopulated = data.filter(country => country.population < 200000)
        console.log(lowPopulated)

        // calculating the total population
        const totalPopulation = data.reduce((accu, country) => accu + country.population, 0)
        console.log("World population is:", totalPopulation)

        // Looping through the data
        data.forEach(country => {
            console.log(`
              Name: ${country.name},
              Capital: ${country.capital}
              Region: ${country.region},
              SubRegion: ${country.subregion},
              Population: ${country.population},  
              Flag: ${country.flag}
              `);
        })

        let usDollorCountries = data.filter(country => {
            let currencies = country.currencies
            const cond = currencies.some(curr => curr.code == "USD")
            return cond
        })
        console.log(usDollorCountries)


    } else {
        
        console.log("Data is not available");
    }}