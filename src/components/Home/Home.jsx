import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectActors, setSelectActors] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, []);

    const handleSelectActor = (actor) => {
        const isExist = selectActors.find(item => item.id == actor.id);
        // console.log(isExist);
        const budget = 20000;
        let count = actor.salary;

        if (isExist) {
            return alert('Already booked')
        }
        else {
            selectActors.forEach(item => {
                count = count + item.salary;
            });
            const totalRemaining = budget - count;

            if (count > budget) {
                return alert('You have not enough money. Please check your balance!')
            } else {
                setRemaining(totalRemaining);
                setCost(count);
                setSelectActors([...selectActors, actor])
            }

            // setRemaining(totalRemaining);
            // setCost(count);
            // setSelectActors([...selectActors, actor])
        }
        // console.log(count);
    }
    // console.log(selectActors);
    return (
        <div className='flex w-[1100px] mx-auto mt-20'>

            <div className='w-9/12'>
                {/* <h3 className='text-white text-3xl'>All Actors: {allActors.length}</h3> */}
                <div className='grid grid-cols-3 gap-4'>
                    {/* <div className='border-2 border-gray-500 p-4 rounded text-white'>
                        <img className='w-28 mx-auto rounded-full text-center' src="https://i.ibb.co/QnXmyzf/karen-gillan-1200.jpg" alt="" />
                        <h2 className='text-center my-2'>Karen Gillan</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, minus?</p>
                        <div className='flex justify-between my-2'>
                            <h3>Price: $2440</h3>
                            <h4>Writer</h4>
                        </div>

                        <div className='flex justify-center'>
                            <button className='rounded px-4 py-2 bg-gray-500'>Select</button>
                        </div>
                    </div> */}
                    {
                        allActors.map(actor =>
                            <div key={actor.id} className='border-2 border-gray-500 p-4 rounded text-white'>
                                <img className='w-28 mx-auto rounded-full text-center' src={actor.image} alt="" />
                                <h2 className='text-center my-2 text-2xl'>{actor.name}</h2>
                                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, minus?</p>
                                <div className='flex justify-between my-2'>
                                    <h3>Salary: ${actor.salary}</h3>
                                    <h4>{actor.role}</h4>
                                </div>

                                <div className='flex justify-center'>
                                    <button onClick={() => handleSelectActor(actor)} className='rounded px-4 py-2 bg-gray-500'>Select</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className='w-3/12 ml-6'>
                <Cart cost={cost} remaining={remaining} selectActors={selectActors}></Cart>
            </div>
        </div>
    );
};

export default Home;