import React from "react"
export default function Footer() {
    return (
        <footer>
            <div className="inner">
            <h1>WERLTON</h1>
            <ul>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Customer</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>

            <address>
                address : 40, Soraeyeongnam-ro, Namdong-gu, Incheon.<br/>
                Tel : +82-10-4402-6623  FAX: +82-2-2100-7999
            </address>

            <p>Copyright &copy; 2022 WERLTON ALL Right reserved</p>
        </div>
        </footer>
    )
}