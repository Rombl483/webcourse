(function () {
    var countries = [
        {
            name: "Россия",
            cities: [
                {name: "Москва", population: 12678079},
                {name: "Санкт - Петербург", population: 5398064},
                {name: "Новосибирск", population: 1625631},
                {name: "Екатирнбург", population: 1493749}
            ]
        },
        {
            name: "Казахстан",
            cities: [
                {name: "Нур-Султан", population: 1136008},
                {name: "Алма-Ата", population: 1916782},
                {name: "Шымкент", population: 1036144}
            ]
        },
        {
            name: "США",
            cities: [
                {name: "Лос-Анджелес", population: 3928864},
                {name: "Нью-Йорк", population: 8244910},
                {name: "Чикаго", population: 2722389},
                {name: "Хьюстон", population: 2239558}
            ]
        }
    ];

    console.log("----------------------------------------------------------------------------");
    console.log("--------------------- Информация по всем старнам справочника ---------------");
    console.log("----------------------------------------------------------------------------");
    countries.forEach(printCountryData);

    console.log("----------------------------------------------------------------------------");
    console.log("------------------ Страны с максимальным количеством городов ---------------");
    console.log("----------------------------------------------------------------------------");
    var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countries);
    countriesWithMaxCitiesCount.forEach(printCountryData);

    console.log("----------------------------------------------------------------------------");
    console.log("------- Суммарная численность населения городов по каждой стране -----------");
    console.log("----------------------------------------------------------------------------");
    var countriesPopulation = getCountriesPopulation(countries);

    for (var country in countriesPopulation) {
        console.log("Страна: " + country + ";  общая численность населения: " + countriesPopulation[country]);
    }

    function printCountryData(country) {
        console.log("Страна: " + country.name);
        country.cities.forEach(function (city) {
            console.log("   город: " + city.name + ";  численность населения: " + city.population);
        });
    }

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = countries.reduce(function (maxCitiesCount, country) {
            return Math.max(maxCitiesCount, country.cities.length);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function getCountriesPopulation(countries) {
        var countriesPopulation = {};
        countries.forEach(function (country) {
            countriesPopulation[country.name] = country.cities.reduce(function (populationSum, city) {
                return populationSum + city.population;
            }, 0);
        });

        return countriesPopulation;
    }
})();