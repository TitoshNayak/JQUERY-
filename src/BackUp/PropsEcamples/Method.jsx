import React from 'react';
import Methods from './Methods';

let Method=()=>{
 
 
    var name='Nayak';
     var age=12;
      var  loc="Bangalore";
       var std="twelth";

       <hr />

       let userloc=['chennai','mumbai','noida'];
       let emp={fullname:"Titosh",sal:5000};
    

 return(
     <>

     <h1>One page here</h1>
    
    <Methods  employee={name}
              employee1={age} 
              employee2={loc} 
            employee3={std} 
            my_Area={userloc}
            emp_details={emp}
            />
           

           
     </>
 );      

}

export default Method;