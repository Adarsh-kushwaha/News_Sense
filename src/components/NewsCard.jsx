import React from 'react';
import "./NewsCard.css"

const NewsCard = ({image, title, author, desc, topic, date }) => {
    return <>
        <div className='newsCard'>
            <img src={image } />
            <div className='newsMeta'>
                <h4>{topic}</h4>
                <p>{date}</p>
            </div>
            <div className='title'>
                <h2>{title.slice(0,30)}...</h2>
            </div>
            <div className='description'>
                <p>{desc.slice(0,200)}...</p>
            </div>
            <div className='author'>
                <p>Written By - {author}</p>
            </div>

        </div>

    </>;
};

export default NewsCard;
