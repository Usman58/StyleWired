import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/TJJ.png";
import image5 from "../images/BS.png";
import image6 from "../images/TSaJ.png";
import image7 from "../images/SaD.png";
import { Card} from "react-bootstrap";
import $ from 'jquery';
import { HomeStyle } from '../Style/HomeStyle';
import {Link} from "react-router-dom";

const GData = [
  {
    id:1,
    image:image4,
    title:'Leather Jacket and Jeans',
    subTitle:'Edgy'
  },
  {
    id:2,
    image:image5,
    title:'Blouse and Skirt',
    subTitle:'Feminine'
  },
  {
    id:3,
    image:image6,
    title:'T-Shirt and Jeans',
    subTitle:'Casual'
  },
  {
    id:4,
    image:image7,
    title:'Sweater and dress/chino pants',
    subTitle:'Smart Casual'
  }
]


 
function OutFitFreeTime() {
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState(null)
 
  const [catData, setCatData] = useState(GData)
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
    console.log(cardActive,'cardActive');
  }

  return (
    <>
      <Grid container textAlign="center">
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>When You're Hanging About In Your Free Time, What Do<br />You Like To Wear?</h4>
          <p style={{ color: "#848484" }}>Not for those special occasions, just your day-to-day.</p>
         
          
          <Grid container textAlign="center" spacing={10} px={10}>
          {
               catData.map(item => {
                    return  <Grid item xs={12} sm={6} lg={3} mt={5}>
                                <Card id={item.id} style={{ padding:'20px',
                                  borderColor: parseInt(cardActive) === item.id ? 'green' : 'rgba(0,0,0,.125)'
                              }} className='custom_cards' onClick={activeHandler}>
                                  <Card.Img src={item.image} height='350' />
                                
                                </Card>
                                <h6 style={{paddingTop:'5px',fontSize:'15px'}}>{item.title}</h6>
                                <span style={{ color: "#848484" }}>{item.subTitle}</span>
                              </Grid>
               })
            }
           </Grid> 
          <br />
          <Button 
            variant="contained" className={classes.card_btn} component={Link} to="/worktime"
            color="success"
            size="large"
            style={{ width: "31%" }}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default OutFitFreeTime;
