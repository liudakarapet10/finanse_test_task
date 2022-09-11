import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Container from './components/Container';


const socket = io('http://localhost:4000');

function App(props) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [tickersArray, setTickerArray] = useState([]);

  const ticker = tickersArray;
  
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.emit('start');

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('ticker', (data) => {
      setTickerArray(data);
    });
  
  }, []);

  return (
    <div>
      <h2 className='title_tickers'>Тickers</h2>
      <Container tickers={ticker} />
    </div>
  );
}

export default App;