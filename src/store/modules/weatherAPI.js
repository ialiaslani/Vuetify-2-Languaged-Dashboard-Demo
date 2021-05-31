import axios from "axios"

const state = {
    globalWeather: [{
        flag: 'gb',
        name: 'London',
        data: ''
    }, {
        flag: 'ir',
        name: 'Tehran',
        data: ''
    }, {
        flag: 'us',
        name: 'Washington',
        data: ''
    }, {
        flag: 'jp',
        name: 'Tokyo',
        data: ''
    }, {
        flag: 'es',
        name: 'Madrid',
        data: ''
    }, {
        flag: 'it',
        name: 'Pisa',
        data: ''
    }]
}

const getters = {
    GlobalWeather: state => {
        return state.globalWeather
    }
}

const mutations = {}

const actions = {
    GET_WEATHER: async contaxt => {
        await contaxt.rootState.weatherApiModule.globalWeather.forEach(async element => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${element.name}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`).then(res => {
                element.data = res.data.weather[0].description
            }).catch(e => console.log(e))
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}