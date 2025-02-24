import React, { FC } from 'react';
import { IPokemon } from "../modules/IPokemon";

type IProps = {
    likes: IPokemon[];
};

const LikesComponent: FC<IProps> = ({ likes }) => {
    return (
        <div>
            {likes.map((item) => (
                <div className="border rounded-lg p-4 shadow-lg text-center ">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <div className='flex justify-center'>
                        <img src={item.image} alt={item.name} className='text-center'/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LikesComponent;
