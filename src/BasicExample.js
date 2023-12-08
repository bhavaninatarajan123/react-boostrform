
import Card from 'react-bootstrap/Card';

import React ,{useContext}from "react";
import { Logincontext } from "./Logincontext";

function BasicExample() {

  const{productname,productprice,productquality,productdescription}=useContext(Logincontext)
  return (
    <Card style={{ width: '35%',marginLeft:"30%" , marginTop:'5%',padding:"10px"  ,backgroundColor:"pink" ,borderRadius:"20px 80px" }}>
      
      <Card.Body>
        <Card.Title  style={{width:"30%",marginLeft:"35%",padding:"10px"  ,backgroundColor:"pink" }}>product Details</Card.Title>

        <Card.Img variant="top" src="4.jpg" height={"150px"} width={"200px"}  style={{ padding:"10px"   }}/>

        <Card.Text  style={{ padding:"10px"}}>
          product name :{productname}
        </Card.Text >
        <Card.Text  style={{ padding:"10px"}}>
          product price : {productprice}
        </Card.Text>
        <Card.Text  style={{ padding:"10px"}}>
          product quantity : {productquality}
        </Card.Text>
        <Card.Text  style={{ padding:"10px"}}>
          product description : {productdescription}
        </Card.Text>

        

       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;