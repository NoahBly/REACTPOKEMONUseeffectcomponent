import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./componenten/Button";

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
                const {data} = await axios.get(endpoint);
                console.log(data);
                SetPokemonz(data);
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
                    <Button
                        ClickHandler={()=> SetEndpoint(pokemonz.previous)}
                        Disabled={!pokemonz.previous}
                        >
                        Vorige
                    </Button>

                    <Button
                        ClickHandler={()=> SetEndpoint(pokemonz.next)}
                        Disabled={!pokemonz.next}
                        >
                        Volgende
                    </Button>

                    {pokemonz.results && pokemonz.results.map((pokemon) => {
                        return <GetPokemon key={pokemon.name} endpoint={pokemon.url}/>
                    })}

                </>
            }
            {loading && <p> de pagina is aan het laden!</p>}
            {error && <p>oeps, er is iets misgegaan!</p>}
        </div>
    );
}

export default App;
