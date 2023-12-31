import React from "react";


const Names = ({ setForm, formData, navigation }) => {
  
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <h3>Enter Your Basic Details</h3>
    
      <table  > 
      <tr>
          <td>First Name</td>
          <td><input placeholder="Enter Your First Name" type="text"  name="firstName" value={firstName} onChange={setForm} /></td> 
      </tr>
      
      <tr>
          <td>Last Name</td>
          <td><input placeholder="Enter Your Last Name" type="text"  name="lastName" value={lastName} onChange={setForm} /></td> 
      </tr>
      
      <tr>
          <td>Nick Name</td>
          <td><input placeholder="Enter Your Nick Name" type="text"  name="nickName" value={nickName} onChange={setForm} /></td> 
      </tr>
      
      <tr>
         <td></td>
         <td><button onClick={next}>Next</button></td>
      </tr>
      
      </table>
    </div>
  );
};

export default Names;
