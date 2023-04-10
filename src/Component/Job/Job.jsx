import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const Job = () => {
    const obid = useParams();
    const id = parseInt(obid.id);
    const alljobs = useLoaderData()
    console.log(id, alljobs);
    const matchObjects = alljobs.filter(obj => obj.id ===id);
    console.log(matchObjects)

    return (
        <div>
            {
                matchObjects.map(item =><SingleJob key={item.id} item={item}></SingleJob>)
            }
        </div>
    );
};

export default Job;