import { useState, useEffect } from "react";
import axios from "axios";

const CharacterList = () => {
    const[heroes, setHeroes] = useState([]);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
            const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=622d9d65b9313973e25890e52cfc48de&hash=18cc4ba93b6ceb6009e066300b4bd121');
            console.log(response.data.data.results);
            setHeroes(response.data.data.results);
            } catch (error) {
            console.error("Error fetching heroes:", error);
            }
        }
        fetchHeroes();

}, []); 
// useEffect will run once

    return (
        <div>
            <h3>Marvel Heroes</h3>
            <ul>
                {heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
