import React, {useEffect, useState} from 'react';
import './App.css';

import GetPokemon from "./componenten/GetPokemon";
import axios from "axios";

function App() {

    const [pokemonz, SetPokemonz] = useState([]);
    const [endpoint, SetEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, ToggleLoading] = useState(false);
    const [error, SetError] = useState(false);

    useEffect(() => {

        async function fetchPokemonz() {
            ToggleLoading(true);
            SetError(false);

            try {
                const {response} = await axios.get(endpoint);
                console.log(response);
                SetPokemonz(response);
            } catch (e) {
                console.error(e);
                SetError(true);
            }
            ToggleLoading(false);
        }

        fetchPokemonz();
    }, [endpoint]);


    return (
        <div>
            {pokemonz &&
                <>
                    {pokemonz.results && pokemonz.results.map((pokemon) => {
                        return <GetPokemon endpoint={pokemon.url}/>
                    })}

                </>
            }
            {loading && <p> de pagina is aan het laden!</p>}
            {error && <p>oeps, er is iets misgegaan!</p>}
        </div>
    );
}

export default App;
