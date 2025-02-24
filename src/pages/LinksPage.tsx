import React from 'react';
import {Link} from "react-router-dom";

const LinksPage = () => {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full p-4 bg-white shadow-lg z-10">
            <h1 className='text-4xl text-yellow-400 text-center font-bold'>Pokedex</h1>
            <ul className= 'list-disc pl-5'>
                <li className=''>
                    <Link to={'/pokemon'} className=' text-2xl text-green-500 hover:text-blue-500 mr-3'>pokemons</Link>
                </li>
                <li className=''>
                    <Link to={'/likes'} className='text-2xl text-purple-500 hover:text-red-500 mr-3'>likes</Link>
                </li>
            </ul>
                </div>
        </div>
    );
};

export default LinksPage;