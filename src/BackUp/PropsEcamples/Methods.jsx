import React from 'react';

function Methods(props){
    return(
        <>
        <pre>{JSON.stringify(props)}</pre>
       <h1>here the menthods:{props.employee}</h1>
      <h1>here the menthods:{props.employee1}</h1>
    <h1>here the menthods:{props.employee2}</h1>
    <h1>here the menthods:{props.employee3}</h1>
    <h2>employee area is:{props.my_Area[1]}</h2>
    <hr />
    <h1>employee deails is:{props.emp_details.fullname}</h1>
    <h1>employee salary:{props.emp_details.sal}</h1>
        </>
    );
}

export default Methods;