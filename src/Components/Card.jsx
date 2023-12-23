import React, { useState } from "react";
import Slider from "../Components/Slider.jsx"
import Toggle from "./Toggle.jsx";
import Tick from "../images/icon-check.svg";

const Card = () => {
    const [outputPage, setOutputPage] = useState({
        view: 100,
        price: 16.00
      });
    const [checkbox, setCheckbox] = useState(false);
    const [discount, setDiscount] = useState();
    
    const pageOutput = (data, state) => {
        setOutputPage(data);
        setCheckbox(state);
    };

    const checkedValue = (check) => {
        setCheckbox(check);
        const discountPrice = outputPage.price * 0.75;
        setDiscount(discountPrice);    
    }
    

  return (<>
    <div className="card">
        <div className="header">
            <h6>{outputPage.view === 1000 ? 1 : outputPage.view }{outputPage.view === 1000 ? 'm' : 'k'} Pageviews</h6>
            <h6 className="priceA"><span>${checkbox ? discount : outputPage.price}</span>&nbsp;&nbsp;/ month</h6>
        </div>    
        <Slider
            pageOutput = {pageOutput}
        />
        <h6 className="priceB"><span>${checkbox ? discount : outputPage.price}</span>&nbsp;&nbsp;/ month</h6>
        <div className="billing">
            <div className="monthly">
                <div className="monthly-bill">
                    <p>Monthly Billing</p>
                </div>
                <Toggle
                    checkedValue= {checkedValue}
                    state = {checkbox}
                />
            </div>
            <div className="yearly">
                <div className="yearly-bill">
                    <p>Yearly Billing</p>
                </div>
                <div className="year-button">
                    <button className="btnB">-25%</button>
                    <button className="btnA">-25% discount</button>
                </div>
            </div>
        </div>
        <div className="footer">
            <ul>
                <li><img src={Tick} alt="tick"/>&nbsp;&nbsp;&nbsp;&nbsp;Unlimited websites</li>
                <li><img src={Tick} alt="tick"/>&nbsp;&nbsp;&nbsp;&nbsp;100% data ownership</li>
                <li><img src={Tick} alt="tick"/>&nbsp;&nbsp;&nbsp;&nbsp;Email reports</li>
            </ul>
            <button>Start my trial</button>
        </div>
        
    </div>
  </>)
}

export default Card;