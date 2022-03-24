import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/image 4 (1).png";
import image5 from "../images/image 4 (2).png";
import image6 from "../images/image 4 (3).png";
import image7 from "../images/image 4 (4).png";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import { HomeStyle } from "../Style/HomeStyle";
import {Link} from "react-router-dom";
function HeelHeightScreen() {
    const classes=HomeStyle();
    const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("lg"));
  const [cardActive, setcardActive] = useState('')
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
  }

  return (
    <>
      <Grid container textAlign="center">
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>Subdued Or Flaunting? </h4>
          <p style={{ color: "#848484" }}>Well, when it comes to heel height, every lady has a preference. </p>
          
          <Grid container textAlign="center"  spacing={4} px={12} mt={2} justifyContent="center">
            <Grid item xs={12}  lg={3} md={6}>
                    <Card id='Flat' style={{padding:'8px',
                      borderColor: cardActive === 'Flat' ? 'green' : 'rgba(0,0,0,.125)'
                  }}  onClick={activeHandler}>
                      <Card.Img src={image4} />
                      <Card.Body>
                        <br />
                        <Card.Title style={{fontSize:'14px'}}>Flat</Card.Title>
                      </Card.Body>
                    </Card>
            </Grid>
            <Grid item xs={12}  lg={3} md={6} >
                  <Card id='Low' style={{padding:'8px',
                      borderColor: cardActive === 'Low' ? 'green' : 'rgba(0,0,0,.125)'
                  }}  onClick={activeHandler}>
                      <Card.Img src={image5}  />
                      <Card.Body>
                        <br />
                        <Card.Title style={{fontSize:'14px'}}>Low</Card.Title>
                      </Card.Body>
                    </Card>
            </Grid>
            <Grid item xs={12}  lg={3} md={6} >
                  <Card id='Medium' style={{padding:'8px',
                      borderColor: cardActive === 'Medium' ? 'green' : 'rgba(0,0,0,.125)'
                  }}   onClick={activeHandler}>
                      <Card.Img src={image6} height='70' />
                      <Card.Body>
                        <br />
                        <Card.Title style={{fontSize:'14px'}}>Medium</Card.Title>
                      </Card.Body>
                    </Card>
            </Grid>
            <Grid item xs={12}   lg={3} md={6} >

              <Card id='High' style={{ padding:'8px',
                  borderColor: cardActive === 'High' ? 'green' : 'rgba(0,0,0,.125)'
              }}   onClick={activeHandler}>
                  <Card.Img src={image7} />
                  <Card.Body>
                   
                    <Card.Title style={{fontSize:'14px'}}>High</Card.Title>
                  </Card.Body>
                </Card>

            </Grid>

          </Grid>
          <br />
          <Button className={classes.card_btn}
            variant="contained"
            size="large"
            style={{ width:small? "85%" : "31%",backgroundColor:'#838383' }}
          >
            Select your favourite footwear type
          </Button> <br /><br /><br />
          <Button className={classes.card_btn}  component={Link} to="/preferredshowstyle"
            variant="contained"
            size="large"
            color="success"
            style={{ width:small? "85%" : "31%"}}
          >
            Next
          </Button>
         
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default HeelHeightScreen;
