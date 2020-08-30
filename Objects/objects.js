(function () {
    var countriesData = [
        {
            countryName: "Россия",
            citiesData: [
                {cityName: "Москва", cityPopulation: 12678079},
                {cityName: "Санкт - Петербург", cityPopulation: 5398064},
                {cityName: "Новосибирск", cityPopulation: 1625631},
                {cityName: "Екатирнбург", cityPopulation: 1493749}
            ]
        },
        {
            countryName: "Казахстан",
            citiesData: [
                {cityName: "Нур-Султан", cityPopulation: 1136008},
                {cityName: "Алма-Ата", cityPopulation: 1916782},
                {cityName: "Шымкент", cityPopulation: 1036144}
            ]
        },
        {
            countryName: "США",
            citiesData: [
                {cityName: "Лос-Анджелес", cityPopulation: 3928864},
                {cityName: "Нью-Йорк", cityPopulation: 8244910},
                {cityName: "Чикаго", cityPopulation: 2722389},
                {cityName: "Хьюстон", cityPopulation: 2239558}
            ]
        }
    ];

    console.log("----------------------------------------------------------------------------");
    console.log("--------------------- Информация по всем старнам справочника ---------------");
    console.log("----------------------------------------------------------------------------");
    countriesData.forEach(printCountryData);

    console.log("----------------------------------------------------------------------------");
    console.log("------------------ Страны с максимальным количеством городов ---------------");
    console.log("----------------------------------------------------------------------------");
    var countriesDataWithCityMaxCount = getCountriesDataWithCityMaxCount(countriesData);
    countriesDataWithCityMaxCount.forEach(printCountryData);

    console.log("----------------------------------------------------------------------------");
    console.log("------- Суммарная численность населения городов по каждой стране -----------");
    console.log("----------------------------------------------------------------------------");
    var countriesPopulation = getCountriesPopulation(countriesData);

    for (var countryName in countriesPopulation) {
        console.log("Страна: " + countryName + ";  общая численность населения: " + countriesPopulation[countryName].toString());
    }

    function printCountryData(countryData) {
        console.log("Страна: " + countryData.countryName);
        countryData.citiesData.forEach(function (cityData) {
            console.log("   город: " + cityData.cityName + ";  численность населения: " + cityData.cityPopulation.toString());
        });
    }

    function getCountriesDataWithCityMaxCount(countriesData) {
        var cityMaxCount = countriesData.reduce(function (cityMaxCount, countryData) {
            return cityMaxCount < countryData.citiesData.length ? countryData.citiesData.length : cityMaxCount;
        }, 0);

        return countriesData.filter(function (countryData) {
            return countryData.citiesData.length === cityMaxCount;
        });
    }

    function getCountriesPopulation(countriesData) {
        return countriesData.reduce(function (countriesPopulation, countryData) {
            countriesPopulation[countryData.countryName] = countryData.citiesData.reduce(function (populationSum, cityData) {
                return populationSum + cityData.cityPopulation;
            }, 0);

            return countriesPopulation;
        }, {});
    }
})();