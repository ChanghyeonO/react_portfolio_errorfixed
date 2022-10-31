import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Menu from './Menu';

export default function Header(props) {
    const menu = useRef(null);
    let active = { color: 'forestgreen'};

    let url = '';
    props.type === 'main'
        ? (url = process.env.PUBLIC_URL + '/img/logo_redball.png')
        : (url = process.env.PUBLIC_URL + '/img/logo_bigredball.png');


    return (
        <header className={props.type}>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={url} alt="logo" />
                        <p>WERLTON</p>
                    </Link>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/department' activeStyle={active}>
                            About
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/community' activeStyle={active}>
                            Q&A
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' activeStyle={active}>
                            Gallery
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/member' activeStyle={active}>
                            Member
                        </NavLink>
                    </li>
                </ul>
                {/* 토글 버튼 클릭시 참조된 토글함수 호출 */}
                <FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} />
            </div>

            {/*menu.current에 담기는 값은 자식컴포넌트에서 useImperativeHandle이 내보내주고 있는 toggle함수*/}
            <Menu ref={menu} />
        </header>
    )
}

