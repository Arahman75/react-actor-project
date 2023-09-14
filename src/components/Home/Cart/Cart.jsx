import React from 'react';

const Cart = ({ selectActors, remaining, cost }) => {
    // const [name] = selectActors;
    // console.log(selectActors);

    return (
        <div className='border-2 border-gray-500 p-4 rounded text-white text-2xl'>
            <h3>Total actors: {selectActors.length}</h3>
            <h2 className='py-4'>Remaining: {remaining}</h2>
            <h2>Total Cost: {cost}</h2>

            {
                selectActors.map(actor =>
                    <p className='py-4 flex items-center rounded bg-green-400 p-2 mb-3' key={actor.id}> <span><img className='w-14 rounded-full mr-4' src={actor.image} alt="" /></span> {actor.name}</p>
                )
            }

        </div>
    );
};

export default Cart;