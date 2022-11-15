
export default function Visual() {
    return (
        <figure id="visual" className='myScroll'>
            <div className="text">
                <h1>TRAVEL TIME</h1>
                <p>
                    bon't let the loud noise scare you,<br />
                    Let the rhythms of the dance amuse you.<br />
                    You are given a very rare chance<br />
                    Feel the movement of our ancestors
                </p>
            </div>
            <div id="cover">
            </div>
            <video src={process.env.PUBLIC_URL + '/img/vid3.mp4'} loop autoPlay muted playsInline></video>
        </figure>
    )
}