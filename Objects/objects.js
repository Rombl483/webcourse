(function() {
    var cities = [];
    var countries = [];
    var populationCountries = {};

    cities.push(createCity("Москва", 12678079));
    cities.push(createCity("Санкт - Петербург", 5398064));
    cities.push(createCity("Новосибирск", 1625631));
    cities.push(createCity("Екатирнбург", 1493749));

    countries.push(createCountry("Россия", cities.slice(0)));

    cities.length = 0;
    cities.push(createCity("Алма-Ата", 1916782));
    cities.push(createCity("Нур-Султан", 1136008));
    cities.push(createCity("Шымкент", 1036144));

    countries.push(createCountry("Казахстан", cities.slice(0)));

    cities.length = 0;
    cities.push(createCity("Лос-Анджелес", 3928864));
    cities.push(createCity("Нью-Йорк", 8244910));
    cities.push(createCity("Чикаго", 2722389));
    cities.push(createCity("Хьюстон", 2239558));

    countries.push(createCountry("США", cities.slice(0)));


    countries.forEach(printCountryData);

    console.log("----------------------------------------------------------------------------");
    console.log("------------------ Страны с максимальным количеством городов ---------------");
    console.log("----------------------------------------------------------------------------");
    var countriesFiltered = countries
        .sort(function (a, b) {
            return (a.cities.length - b.cities.length) * (-1);
        })
        .filter(function (a) {
            return a.cities.length >= countries[0].cities.length;
        });

    countriesFiltered.forEach(printCountryData);

    countries.forEach(function (country) {
        populationCountries[country.name] = country.cities.reduce(function (sumPopulation, city) {
            return sumPopulation + city.population;
        }, 0)
    });

    console.log("----------------------------------------------------------------------------");
    console.log("------- Суммарная численность населения городов по каждой стране -----------");
    console.log("----------------------------------------------------------------------------");
    for (var propertyName in populationCountries) {
        console.log("Страна: " + propertyName + ";  общая численность населения: " + populationCountries[propertyName].toString());
    }

    function createCountry(countryName, countryCities) {
        return {
            name: countryName,
            cities: countryCities
        };
    }

    function createCity(name, population) {
        return {
            name: name,
            population: population
        };
    }

    function printCountryData(country) {
        console.log("Страна: " + country.name);
        country.cities.forEach(function (city) {
            console.log("   город: " + city.name + ";  численность населения: " + city.population.toString());
        });
    }
})();