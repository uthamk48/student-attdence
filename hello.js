  const  myText=document.getElementById("mytext");
          const mysubmit=document.getElementBYId("my subkit");
          const resultElement=document.getElementById("result");
          let age;


       mysubmit.onclick=function(){
        age=myText.value; 
          age=Number(age);
         if(age>=18){
         
          resultElement.textContent="you are   right to get licence";
         }
       else if(age>=0){
        

        resultElement.textContent="you are born now so you didn't get licence";
       }




       else{
         
        resultElement.textContent="ou are not 18+ so you didnt get licence";
       }

    }

  
    