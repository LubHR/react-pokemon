import React, {useEffect, useState} from 'react';
import {IPokemon} from "../modules/IPokemon";
import LikesComponent from "../components/LikesComponent";

const LikesPage = () => {

    const [likepsokemons, setLikepsokemons] = useState<IPokemon[]>([])

    useEffect(() => {
        const store = localStorage.getItem("likes");
        if (store) {
            setLikepsokemons(JSON.parse(store))
        }
    }, []);

    return (
        <div >
            {likepsokemons.length === 0 ? (<p>У вас немає улуюблених покемонів</p>) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-[10rem]" >{likepsokemons.map((item) => <LikesComponent key={item.name} likes={[item]}/>)} </div>
            )}
        </div>
    );
};

export default LikesPage;