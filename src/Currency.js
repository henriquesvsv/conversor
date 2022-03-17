import Api from './services/Api'
import React, { useEffect } from "react";
import './Currency.css';

function Currency(){

    function y(){
        Api.get('/json/last/BTC').then(res=>{
            
            document.getElementById('btc').innerText='BTC: '+(res.data.BTCBRL.ask)
       
       }
       
       )
       Api.get('/json/last/USD').then(res=>{
           
           document.getElementById('usd').innerText='USD: '+(res.data.USDBRL.ask)
       }
       
       )
       Api.get('/json/last/EUR').then(res=>{
       
       document.getElementById('eur').innerText='EUR: '+(res.data.EURBRL.ask)
       }
       )
       Api.get('/json/last/GBP').then(res=>{
       
       document.getElementById('gbp').innerText='GBP: '+(res.data.GBPBRL.ask)
       }
       )
       Api.get('/json/last/JPY').then(res=>{
       
       document.getElementById('jpy').innerText='JYP: '+(res.data.JPYBRL.ask)
       }
       )
       Api.get('/json/last/CNY').then(res=>{
       console.log(res.data)
       document.getElementById('cny').innerText='CNY: '+(res.data.CNYBRL.ask)
       }
       
       )
       }
    
    useEffect(() => {

        y()
        setInterval(()=>{
            y()
        }
  ,30000)
    }
)

return(
    <div>
        <div id='container'>
        <h2 id ='btc'></h2>
        <h2 id ='usd'></h2>
        <h2 id='eur'></h2>
        <h2 id='gbp'></h2>
        <h2 id='jpy'></h2>
        <h2 id='cny'></h2>
        </div>
    </div>
)
}


export default Currency;