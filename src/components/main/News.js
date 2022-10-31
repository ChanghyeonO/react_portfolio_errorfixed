import { useEffect, useState } from "react";
import { Member1, Member2, Member3, Member4, Member5 } from '../../asset/index'


const Posts = [
    {imageSrc: Member1},
    {imageSrc: Member2},
    {imageSrc: Member3},
    {imageSrc: Member4},
    {imageSrc: Member5},
];

function News() {
    return (
        <main id="news" className='myScroll'>
            <h1>POPULAR TOUR</h1>
            <h2>There will be a small title here</h2>
            {Posts.map(({ title, content, imageSrc}) =>
                (
                    <article key={title}>
                        <img src={imageSrc} alt="PopularTourImg" style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "fill"
                        }}/>
                    </article>
                )
            )}
        </main>
    );
}
export default News;