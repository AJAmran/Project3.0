import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';
import { CartContext } from '../../App';
import { addToDb } from '../../Utils/FeakDb';

const Job = () => {
    const obid = useParams();
    const id = parseInt(obid.id);
    const {allJobs} = useLoaderData()
    console.log(id, allJobs);
    const matchObjects = allJobs.filter(obj => obj.id ===id);
    console.log(matchObjects)

    const [cart, setCart] = useContext(CartContext);
    

    //handels add to cart
    const handelAddToCart = (item) =>{
        console.log("Hello")
        let newCart = [];
        const exists = cart.find(
            exsistingJob => exsistingJob.id === item.id
        )
        if(!exists){
            newCart = [...cart, item]
        }
        else{
            const rest = cart. filter(
                exsistingJob => exsistingJob.id !== item.id
            )
            newCart = [...rest, exists]
        }
        
        setCart(newCart)
        addToDb(item.id)
    }
    return (
        <div>
            {
                matchObjects.map(item =><SingleJob key={item.id} item={item} handelAddToCart={handelAddToCart}></SingleJob>)
            }
        </div>
    );
};

export default Job;