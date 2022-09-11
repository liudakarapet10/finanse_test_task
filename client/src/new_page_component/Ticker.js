import React, {useState} from 'react';
import './Ticker.css';

const Ticker = (props) => {
    const price = props.price;
    const change_price= props.change;
    let ticker;  
    let isChangePricePositive = false;
    
    if(change_price >= 0){
        isChangePricePositive = true;
    }

 const [input, setInput] = useState('');
 const [yourTitker,setYourTitcker] = useState('');

  

 const changeInputHandler = (e) => {
    setInput(e.target.value);
 };

 const countHadler = () => {
    const amount = input;
    ticker = (amount/price).toFixed(2);
    setInput('');
    setYourTitcker(<p className='par_titcker'>Your titcker: {ticker}</p>)
 }

  

    return(
        <div className="titcker-box">
          <h2 className='titcker_name'>{props.name}</h2>
          <hr/>
          <div className='description-box'>
            <p className='titcker_price'>{price} $</p>
            <p className={isChangePricePositive ? 'color-green' : 'color-red'}>{change_price}</p>
            <p className={isChangePricePositive ? 'color-green' : 'color-red'}>{props.change_percent}%</p>  
          </div>
          <div className='input-box'>
            <label htmlFor='amount'>Please enter your amount: </label>
            <input type='number' name='amount'  id="amount" placeholder='Amount' value={input} onChange={changeInputHandler} className='input_amount'/>
            <button onClick={countHadler}>Count</button>
          </div>
          <div>
            {yourTitker}
          </div>
       </div>   
    )
}

export default Ticker;