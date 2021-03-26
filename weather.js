class Weather{
    constructor(city){
        this.apiKey = 'dadab2f22fa3ec43dd5ae1efc6b3f47c';
        this.city = city;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData
    }

    //Change weather location
    changeLocation(city){
        this.city = city;;
    }
}