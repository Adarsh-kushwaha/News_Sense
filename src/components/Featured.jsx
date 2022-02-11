import React from 'react'
import { useNewsApi } from '../useHooks/useNewsApi'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Featured = () => {
    const { news } = useNewsApi("bollywood", 3)
    return (

        <><Swiper navigation={true} modules={[Navigation]} className="slider">

            {news?.articles?.map((item) =>
                <SwiperSlide className='featured' key={Math.random()}>
                    <div style={{backgroundColor:"#D4D5D7", width: "440px",height: "380px", borderRadius:"15px"}}>
                        <img src={item.media} alt={item.title} />
                    </div>
                    <div className='featuredContent'>
                        <p className='cat'><strong>{item.topic}</strong><span>{item.published_date.slice(0, 10)}</span></p>
                        <h2>{item.title.slice(0,60)}...</h2>
                        <p>{item.summary.slice(0, 200)}</p>
                        <div className='fauthor'>
                            <p>Written By - {item.author == null ? "Anonoymus" : item.author}</p>
                        </div>
                    </div>
                </SwiperSlide>

            )}
        </Swiper>

        </>
    )
}

export default Featured