import React from 'react';

export default function Contact({name, img, telf, email}) {
    return (
    <div className='card'>
    <div className='top'>
        <h2 className=''>{name}</h2>
        <img src={img} alt='avatar-img' className='circle-img' />
        </div>
        <div className='bottom'>
        <p className='info'>{telf}</p>
        <p className='info'>{email}</p>
        </div>
    </div>
    );
}
