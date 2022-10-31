function Btns({ setIndex }) {
    return (
        <ul className="scroll_navi">
            <li className="on" onClick={() => setIndex(0)}><p>01</p><div></div></li>
            <li onClick={() => setIndex(1)}><p>02</p><div></div></li>
            <li onClick={() => setIndex(2)}><p>03</p><div></div></li>
            <li onClick={() => setIndex(3)}><p>04</p><div></div></li>
        </ul>
    );
}
export default Btns;