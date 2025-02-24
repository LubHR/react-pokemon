import React, {useEffect, useRef, useState} from "react";
import {PokemonService} from "../services/api.pokemon"; // Імпортуємо сервіс
import {IPokemon} from "../modules/IPokemon"; // Імпортуємо типи для покемонів
import image from '../image/img.png'

const PokemonsComponent = () => {

    const limit = 20

    const [pokemonDetails, setPokemonDetails] = useState<IPokemon[]>([]);
    const [offSet, setofSet] = useState(0)

    const lastElement = useRef(null);

    useEffect(() => {
        loadpokemons();
    }, [offSet]);

    const loadpokemons = () => {
        PokemonService.getAllPokemon(limit.toString(), offSet.toString()).then((value) => {
            const pokemonData = value.results.map((poke: { name: string; url: string }, index: number) => ({
                ...poke,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offSet + index + 1}.png`,
            }));

            setPokemonDetails((prev) => [...prev, ...pokemonData]);
        });
    }

    const observseCall = (enteries:any) => {
        const entry = enteries[0];
        if(entry.isIntersecting) {
            setofSet((prev) => prev + limit)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observseCall,{
            root:null,
            rootMargin: "0px",
            threshold: 0.2,
        })

        if(lastElement.current){
            observer.observe(lastElement.current);
        }

        return () => {
            if(lastElement.current){
                observer.unobserve(lastElement.current);
            }
        }
    }, [lastElement.current]);

    const addLikes = (pokemon: IPokemon) => {
        const storeLikes = localStorage.getItem("likes");
        let likes = storeLikes ? JSON.parse(storeLikes) : [];
        const IsPokemon = likes.some((like: IPokemon) => like.name === pokemon.name);
        if (!IsPokemon) {
            likes.push(pokemon);
            localStorage.setItem("likes", JSON.stringify(likes));
        }
    }

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {pokemonDetails.map((poke, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-lg text-center">
                    <h3 className="text-xl font-semibold">{poke.name}</h3>
                    <div className='flex justify-center'>
                        <img src={poke.image} alt={poke.name} className='text-center'/>
                    </div>
                    <button onClick={() => {
                        addLikes(poke);
                    }}>
                        <img src={image} alt={'like'}
                             className='w-10 h-10 object-cover rounded-full border-4 border-red-500 hover:border-amber-600'/>
                    </button>
                </div>
            ))}
            <div ref={lastElement} className='h-10'></div>
        </div>
    );
};

export default PokemonsComponent;
