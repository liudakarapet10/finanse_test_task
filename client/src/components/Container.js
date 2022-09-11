import React, {useState, useEffect} from 'react';
import './Container.css';
// import tickers from '../tickers_data.json';
import moment from "moment";
import Ticker from '../new_page_component/Ticker';
import Chart from '../new_page_component/Chart';


const Container = (props) => {
  let isPricePositive = false;
  const tickers= props.tickers;
  

  tickers.forEach((el) => {
    if(el.change >= 0){
      isPricePositive = true;
    }else if (el.change < 0) {
     isPricePositive = false;
    }else {
      console.log('error')
    }
  });

  const [div, setDiv] = useState();
  const [chart, setChart] = useState();



    const addDivHandler = (item) => {
      const name = item.ticker;
      const price = item.price;
      const change = item.change;
      const change_percent = item.change_percent;
      const last_trade_time = moment(item.last_trade_time).utc().format('DD-MM-YYYY');
      setDiv(<Ticker name={name} price={price} change={change} change_percent={change_percent}/>)
      setChart(<Chart price={price} time={last_trade_time} />)
    };

    return <div className='container' >
        {
            tickers.map(item => {
                return(
                    <div className='box' key={Math.random()} onClick={() => addDivHandler(item)}>
                        <div className='title'>
                          {item.ticker}
                        </div> 
                        <div>
                          {item.exchange}  
                        </div>
                        <div id='price'>
                          {item.price} $
                        </div> 
                        <div className={isPricePositive ? 'color-green' : 'color-red'}>
                          {item.change} $
                        </div>   
                        <div className={isPricePositive ? 'color-green' : 'color-red'}>
                          {item.change_percent}%
                        </div>
                        <div>
                          {moment(item.last_trade_time).utc().format('DD-MM-YYYY')}
                        </div>      
                    </div> 
                )
            })
        }
        <div>
          {div}
        </div>
        {/* <div>
          {chart}
        </div> */}
    </div>
}

export default Container;