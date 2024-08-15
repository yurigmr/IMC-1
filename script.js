function calcular() {
   var tn1 = window.document.getElementById('tex1');
   var tn2 = window.document.getElementById('tex2');
   var res1 = window.document.getElementById('res1');
   var aperta = window.document.getElementById('i1');
   var n1 = Number(tn1.value)
   var n2 =Number(tn2.value)
   
   var con1 = n1 * 1000
   var con2 =  n2 ** 2 
   var con3 = con2 * 1000
   var s =  con1 / con3
   var magreza = 18.5
   var normal = 24.99
   var sp = 29.99
   var obesidade = 39.99
   var arredondado = parseFloat(s.toFixed(2))
   
   if (arredondado < magreza ){
      res1.innerHTML = ` O seu imc: ${arredondado} (Magreza) e grau (0)`
   }
   if (arredondado > magreza && arredondado < normal){
      res1.innerHTML = ` O seu imc: ${arredondado} (Normal) e grau (0)`
   }
   if (arredondado > normal && arredondado < sp){
      res1.innerHTML = ` O seu imc: ${arredondado} (Sobrepeso) e grau (I)`
   }
   if (arredondado > sp && arredondado < obesidade){
      res1.innerHTML = ` O seu imc: ${arredondado} (Obesidade) e grau (II)`
   }
   if (arredondado > obesidade ){
      res1.innerHTML = ` O seu imc: ${arredondado} (Obesidade Grave) e grau (III)`
   }
   else{
      res1.innerHTML = ` insira as informações`
   }
   
   
}