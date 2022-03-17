import Api from './services/Api';
import './boxEnterValue.css';

function BoxEnterValue(){

  
    

  function Calcular(){
   
      
    
    var add = '/json/last/';
    console.log(add);
    var x = document.getElementById("value1").options[document.getElementById("value1").selectedIndex].value.toString();
    var y = document.getElementById("value2").options[document.getElementById("value2").selectedIndex].value.toString();
    


    Api.get(add+x+'-'+y).then(res=>{
      const y = document.getElementById("value1").options[document.getElementById("value1").selectedIndex].value;
    const x = document.getElementById("value2").options[document.getElementById("value2").selectedIndex].value;
      var zar = y+x;
    var z = res.data[zar].ask; 
   
    
     var ValueF= (z*parseFloat(document.getElementById('result').value)).toFixed(4);
      document.getElementById('valor').innerText=ValueF;
       
      
 }
    )

  }
  
    return(
        <div >
                    <div id='container2'>

<input id="result" type="number" onKeyPress={Calcular}></input>
<div id='container3'>
<select id="value1">
<option value="BTC">BITCOIN</option>
  <option value="BRL" >REAL</option>
  <option value="USD" selected>DOLAR</option>
  <option value="GBP" >LIBRA</option>
  <option value="JPY">IENE</option>
  <option value="CNY">Renminbi</option>



</select>

<h2 id='converter'>
  Converter to 
</h2 >
<select id="value2">
<option value="BTC">BITCOIN</option>
  <option value="BRL" selected>REAL</option>
  <option value="USD">DOLAR</option>
  <option value="GPB" >LIBRA</option>
  <option value="JPY">IENE</option>
  <option value="CNY">Renminbi</option>
  


</select>
</div>
<h1 id='valor'>Valor</h1>

</div>

        </div>

    );

}




export default BoxEnterValue;