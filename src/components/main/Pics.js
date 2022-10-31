function Pics({ Scrolled, start }) {
    //변수 = 특정값 || 대체값;
    //변수에 대입되는 특정값이 undefined, NaN 같이 비정상인 값이 들어올때 대신 적용될 대체값을 설정해주는것
    const position = Scrolled - start || 0;
    //position => 전체 스크롤 거리값에서 해당 섹션요소의 세로 위치값을 뺀것으로 , 처음섹션의 초입에는 0이된다
    console.log(position);
    // console.log(Scrolled);
    return (
        <main id="pics" className='myScroll'>
            <p style={{
                left: 50 + position,
            }}
            >
                DISCOVER THE <br />
                WORLD IN A <br />
                NEW WAY
            </p>
            <h3 style={{
                left: 100 + position / 2,
            }}
            >
                DISCOVER THE <br />
                WORLD IN A <br />
                NEW WAY
            </h3>
            <div id="cover">
            </div>
            <img src={process.env.PUBLIC_URL + '/img/community.jpg'} />
        </main>
    );
}
export default Pics;