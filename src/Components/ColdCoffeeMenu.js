import React, { useEffect, useState } from 'react';
import "../Styles/MenuStyles.css";
import msthreelogo from "../photos/ms3_logo2.png";


function ColdCoffeeMenu(props) {
    const { heading } = props;
    const [respDataArray, setRespDataArray] = useState(null);

    const redirectToPay1 = () => {
        window.location.href = 'https://tez.google.com/pay';
    };
    const redirectToPay2 = () => {
        window.location.href = 'https://p.paytm.me/xCTH/adpai';
    };
    const redirectToPay3 = () => {
        window.location.href = 'https://ppe.onelink.me/rPjp/2kk1w03o';
    };

    useEffect(() => {
        const apiLink = "https://api.npoint.io/7a0859d52effd777419c";

        const fetchData = async () => {
            try {
                const response = await fetch(apiLink);
                const data = await response.json();
                const dataArray = data[heading] ? Object.entries(data[heading][0]).map(([key, value]) => ({ name: key, value })) : [];
                const sortedArray = dataArray.sort((a, b) => {
                    var nam1 = a.name;
                    nam1 = nam1.split(".");
                    nam1 = nam1[0];
                    var nam2 = b.name;
                    nam2 = nam2.split(".");
                    nam2 = nam2[0];
                    var temp1 = nam2.match(/\d+/);
                    var temp2 = nam1.match(/\d+/);
                    var extractedNumber1 = temp1 ? parseInt(temp1[0], 10) : 999;
                    var extractedNumber2 = temp2 ? parseInt(temp2[0], 10) : 999;
                    return extractedNumber2 - extractedNumber1;
                });
                setRespDataArray(sortedArray);
                console.log(respDataArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [heading]);

    return (
        <>
            <center>    <img src={msthreelogo} alt="LOGO" style={{ height: "100px", marginTop: "20px" }} />    </center>
            <div className="container">
                <h1 className="subHeading">{heading}</h1>
                <div className="div_subclasses">
                    {
                        respDataArray &&
                        respDataArray.map((item, index) => {
                            return (
                                <div className="menuItem" key={index}>
                                    <p className="item">{item.name}_________<strong>{item.value}/-</strong></p>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <center>
                <button class="pulsating-button" onClick={redirectToPay1}>GPay</button>
                <button class="pulsating-button" onClick={redirectToPay2}>Paytm</button>
                <button class="pulsating-button" onClick={redirectToPay3}>PhonePe</button>
            </center>
        </>
    )
}

export default ColdCoffeeMenu