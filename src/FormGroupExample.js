import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React ,{useContext} from 'react';
import { Logincontext } from './Logincontext';

function FormGroupExample() {

  const{setProductname,setproductprice,setproductquality,setproductdescription,setshowprofile}=useContext(Logincontext)
  return (
    <Form  style={{width: '40%',marginLeft:"30%",marginTop:'10%', padding:"10px",backgroundColor:"blue "   ,borderRadius:"20px 80px" }}>
      <Form.Group className="mb-4" controlId="formGroupEmail" >
        
        <Form.Control type="text" placeholder="Enter the product name" style={{marginTop:'5%', width:"50%",padding:"15px" ,marginBottom:"20px"  }}
           onChange={(event)=>(
          setProductname(event.target.value)
      )} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formGroupEmail" >
          
        <Form.Control type="text" placeholder="Enter the product price" style={{ padding:"15px" ,marginBottom:"20px",  width:"50%" }}
         onChange={(event)=>(
          setproductprice(event.target.value)
                         )}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail" >
          
        <Form.Control type="text" placeholder="Enter the product quantity" style={{ padding:"15px"  ,marginBottom:"20px",  width:"50%" }} 
        onChange={(event)=>(
          setproductquality(event.target.value)
              )}  />
      </Form.Group>



      <Form.Group className="mb-3"controlId="formGroupEmail" >
        
        <Form.Control type="text" placeholder="Enter product description " style={{ padding:"15px"  ,marginBottom:"20px",  width:"50%"   }}
        onChange={(event)=>(
          setproductdescription(event.target.value)
               )}  />
      </Form.Group>



      <Button variant="success" style={{ padding:"10px" ,backgroundColor:"gray" ,borderRadius:"20px 20px"  ,border:"none"}}
      onClick={()=>(
        setshowprofile(true)
    )}  >Submit</Button>{' '}
    </Form>
  );
}

export default FormGroupExample;