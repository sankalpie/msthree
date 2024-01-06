import React, { useEffect, useState } from 'react';
import '../App.css';
import Scroll from "./Scroll";
import msthreelogo from "../photos/ms3_logo2.png";
import arrow from "../photos/arrow.png";

function Home(props) {
    const { food } = props;
    const [logoStyle, setLogoStyle] = useState({
        opacity: 1,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const logoShift = Math.min(0, scrollPosition - 200); // Adjust the threshold and speed

            setLogoStyle({
                opacity: Math.abs(logoShift / 200),
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////

    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            let opacity = Math.max(0, Math.min(1, scrollPosition / 400)); // Adjust the threshold as needed
            setScrollOpacity(1 - opacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    return (
        <div className="MOTHER">
            <div className='coffeeImage' style={{ opacity: scrollOpacity }}>
                <div className='div1'>

                </div>
                <div className='div2'>
                    <img className='msthreelogo' src={msthreelogo} alt="LOGO_MS3" style={logoStyle} />
                </div>
                <div className='div3'>
                    <button className='button-in-div3'>Scroll Down</button>
                    <img className={`arrow bounce`} src={arrow} alt="Arrow" />
                </div>
            </div>


            <div className='framerMotion'>
                <Scroll food={food} />
            </div>

            <footer className="footer">
                Made with ❤️ by <a href="https://github.com/sankalpie" style={{textDecoration:"none", color:"blue"}}> @sankalpie </a>
            </footer>
        </div>
    )
}

export default Home