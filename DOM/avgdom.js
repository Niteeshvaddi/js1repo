function doavg()
{
   let A= document.getElementById('t1').value = 10
   let B= document.getElementById('t2').value = 10
   let C= document.getElementById('t3').value = 10
   let D= document.getElementById('t4').value = 10
   let E= document.getElementById('t5').value = 10
   let F= document.getElementById('t6').value = 10
   let avg= (eval(A)+ eval(B)+ eval(C)+ eval(D)+ eval(E)+ eval(F))/6
   alert(avg)
}

function erasedata()
{
  document.getElementById('t1').value =""
  document.getElementById('t2').value =""
  document.getElementById('t3').value =""
  document.getElementById('t4').value =""
  document.getElementById('t5').value =""
  document.getElementById('t6').value =""
}