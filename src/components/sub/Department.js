//npm i axios
import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Department() {
    const path = process.env.PUBLIC_URL;
    const [Members, setMembers] = useState([]);
    const instagram = [faInstagram];
    const twitter = [faTwitter];

    useEffect(() => {
        axios.get(`${path}/DB/members.json`).then((json) => {
            setMembers(json.data.members);
        })
    }, []);

    return (
        <Layout name={'Department'}>
            {Members.map((data, index) => {
                return (
                    <article key={index}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`${path}/img/${data.pic}`} alt={data.name} />
                            </div>
                            <h3>{data.name}</h3>
                            <a src="#" className="instagramicon" > {instagram.map((instagram, idx) => (
                                <li key={idx} className="instagram">
                                    <FontAwesomeIcon icon={instagram} size="2x" />
                                </li>
                            ))}</a>
                            <a src="#" className="twittericon"> {twitter.map((twitter, idx) => (
                                <li key={idx} className="twitter">
                                    <FontAwesomeIcon icon={twitter} size="2x" />
                                </li>
                            ))}</a>
                        </div>
                    </article>
                );
            })}


        </Layout>
    );
}