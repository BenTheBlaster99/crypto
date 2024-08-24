import axios from 'axios';

function FetchCryptos(props) {
    
    const API_KEY = ""; //api key from the website
    const crypto = async () =>{
        try{
            const response = await axios.get("https://rapidapi.com/Coinranking/api/coinranking1",{
                headers: {
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                    'X-RapidAPI-Key': API_KEY
                }
            });
            return response.data.data.coins;
        } catch (error){
            console.error("error fetching cyrpotcurrenceies",error);
            return[]
        }
    }

}

export default FetchCryptos;