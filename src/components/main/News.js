import { useEffect, useState } from "react";
import { News1, News2, News3, News4, News5 } from '../../asset/index';


const Posts = [
    { imageSrc: News1 },
    { imageSrc: News2 },
    { imageSrc: News3 },
    { imageSrc: News4 },
    { imageSrc: News5 },
];

function News() {
    return (
        <main id="news" className='myScroll'>
            <h1>POPULAR TOUR</h1>
            <h2>There will be a small title here</h2>
            {Posts.map(({ title, content, imageSrc }, index) =>
            (
                <article key={index}>
                    <div className="inner">
                        <img src={imageSrc} alt="PopularTourImg" style={{
                            position: "absolute",
                            width: "100%",
                            height: "250px",
                            objectFit: "cover"
                        }} />
                    </div>
                </article>
            )
            )}
        </main>
    );
}
export default News;