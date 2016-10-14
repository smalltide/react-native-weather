import _ from 'lodash';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=275179b5c3e832f8d547608146b48027';

const kelvinToC = function(kelvin) {
  return Math.round((kelvin - 273.15)) + ' C';
}

export function api(latitude, longitide) {
  const url = `${rootUrl}&lat=${latitude}&lon=${longitide}`;

  return fetch(url)
    .then((response) => {
       return response.json();
    })
    .then((json) => {
      return {
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}
