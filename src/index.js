import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { render } from '@testing-library/react';


const CurrencyConverter = () => {
  const [uSDAUD, setUSDAUD] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [rate, setRate] = useState("");
  const [enter, setEnter] = useState("");
  


 

  const getRate = (first, second) => {
    axios({
      method:'GET',
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=62a339e38f98603eb8be`
    })
      .then((response) => {
        console.log(response.data);
        
        setRate(response.data[`${first}_${second}`]);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  return (
  <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70px',
      width: '100%',
      backgroundColor: 'khaki',
      fontSize: '30px',
      color: 'black',
    }}>
      Simple Currency Converter
    </div>
    <div style={{
      height: '5px',
      width: '100%',
      backgroundColor: 'pink',
    }}>
    </div>
    <div style={{alignItems: 'center', justifyContent:'center', marginLeft: '33%', marginRight: '33%' }}>
      <div style={{ 
        height: '150px',
        width:  'auto',
        backgroundColor: 'lemonchiffon',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px',
       }}>
         1 {first} = {rate} {second}
      </div>
      <br />
      <input type='text' value={first} maxLength={3} onChange={(e) => setFirst(e.target.value)} onInput={(e) => e.target.value =  ("" + e.target.value).toUpperCase()} />
      =
      <input type='text' value={second} maxLength={3} onChange={(e) => setSecond(e.target.value)} onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()}  />
      <button onClick={() => {getRate(first, second);}} onKeyPress={(e) => e.key ==='Enter'}>Convert</button>
      <div style={{
        fontSize: '35px',
        paddingTop: '10px', 
      }}>
        Top Currencies to Convert
      </div>
        <li style={{
          fontSize: '15px',
        }}>
          USD
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          AUD
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          GBP
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          SGD
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          CHF
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          EUR
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          KYD
        </li>
        <li style={{
          fontSize: '15px',
        }}>
          KWD
        </li>
    </div> 
    <footer style={{
        bottom: '0',
        position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'khaki',
        width: '100%',
      }}>
        &copy; Luis Ramos      
      <div style={{
      height: '5px',
      width: '100%',
      backgroundColor: 'pink',
    }}>
    </div>
      </footer>
  </div>
  );
};

render(<CurrencyConverter />,
  document.querySelector('#root'));



