import React,{useState} from "react";
import { Image, Form } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import clothes from "../images/Trip-amico 1.png";
import $ from 'jquery'
import { HomeStyle } from "../Style/HomeStyle";
import {Link} from "react-router-dom";
 
 

function ThirdCreateOrderScreen() {
  const classes = HomeStyle();
  const [btnActive, setbtnActive] = useState('')
  const [focus, setFocus] = useState(true)
  const changTypeToText = (e) =>{
    setFocus(true)
  }
  const changTypeToDate = (e) =>{
    setFocus(false)
  }
  const activeHandler = (a) => {
    var ins = $(a.target)
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setbtnActive(ID)
  }

  return (
    <>
      <Grid container px={2} spacing={6}>
        <Grid item xs={12} md={5}>
          <h4 style={{ color: "#194B2D" }}>Complete Your Special Order</h4>
          <p style={{ color: "#848484" }}>
          Fill us in with all your travel details so we can get your
            <br />
            outfit delivered to you
          </p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Select your Arrival Date</Form.Label>
              <br />
              <Form.Control onFocus={(e) => changTypeToDate(e)}
                            onBlur={(e) => changTypeToText(e)}
                            type={focus?'text':'date'}
                            size="lg" placeholder="Select Date" style={{fontSize:'15px'}}
                            >
                   
              </Form.Control>
                   
                
            </Form.Group>
            <br />
            <p>Do you have a flight booked already?</p>
            <Grid container spacing={2}>
              <Grid item sm={6}>
              <Button className={classes.card_btn} id='Yes'  size="large" onClick={activeHandler}
              
             
                  style={{ width: "100%",borderColor:'gray',border:'1px solid',
                  backgroundColor: btnActive === 'Yes' ? '#585858' : 'white',
                  color:btnActive==='Yes' ? 'white' : 'gray'
                  }} 
  
              >
                Yes
              </Button>
              </Grid>
              <Grid item sm={6}>
              <Button className={classes.card_btn} id='No' size="large" onClick={activeHandler}
              
              style={{ width: "100%",borderColor:'gray',border:'1px solid',
              backgroundColor: btnActive === 'No' ? '#585858' : 'white',
              color:btnActive==='No' ? 'white' : 'gray',
              }} 
  
              >
                No
              </Button>
              </Grid>
            </Grid>
            <br  />
            <br />
           
            
            <Button
              className={classes.card_btn} component={Link} to="/focreateorder"
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Next
            </Button>
          </Form>
        </Grid>
        <Grid item xs={12} md={7}  style={{height:'70vh',width:'100%'}}>
          <Image src={clothes} fluid alt="No image"  className='h-100 w-100 ' />
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdCreateOrderScreen;
