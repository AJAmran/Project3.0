import React from 'react';

const JobCatogory = ({job}) => {
    const {name, logo, total} = job
    return (
        <div className='card w-75 md-w-25 p-3 shadow-sm' style={{height: "200px"}}>
            <div className=''>
                <img src={logo} alt="" height="40px"/>
                <h5 className='mt-1'>{name}</h5>
                <p>{total}  Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCatogory;
