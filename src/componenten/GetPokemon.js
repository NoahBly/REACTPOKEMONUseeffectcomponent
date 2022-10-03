import React, {useEffect, useState} from "react";
import axios from "axios";



function GetPokemon({endpoint}) {
    const [pokemon, SetPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const {response} = await axios.get(endpoint);
                console.log(response);
                SetPokemon(response);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemon();
    }, [endpoint]);


    return (
<section className="poke-card">
        {pokemon &&
        <>

            <h1>{pokemon.name}</h1>
            <img className="plaatje-poke" src={pokemon.sprites.front_default} alt="plaatje pokemon"/>
            <p> number of moves :{pokemon.moves.length}</p>
            <p>{pokemon.weight} kg</p>
            <ul>
                {pokemon.abilities.map((ability) => {

                    return (
                        <li key={`${ability.ability.name}-${pokemon.name}`}>

                            {ability.ability.name}

                        </li>
                    )
                })

                }

            </ul>

            </>
            }
</section>

                );
}


                export default GetPokemon;