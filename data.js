class Countries{
    constructor(){

    }

    async getData(){
        const response = await fetch('https://restcountries.com/v3.1/all')

        const data = await response.json()

        return data
    }
}