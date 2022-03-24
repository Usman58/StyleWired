import React,{ useState} from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/Black.png";
import image5 from "../images/Blue.png";
import image6 from "../images/Brown.png";
import image7 from "../images/Gray.png";
import image8 from "../images/Khaki.png";
import image9 from "../images/Light Blue.png";
import image10 from "../images/Navy.png";
import image11 from "../images/Olive.png";
import image12 from "../images/Pink.png";
import image13 from "../images/Purple.png";
import image14 from "../images/Red.png";
import image15 from "../images/Green.png";
import image16 from "../images/Salmon.png";
import image17 from "../images/white.png";
import image18 from "../images/Yellow.png";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import { HomeStyle } from "../Style/HomeStyle";

function ColorsScreen() {
    const classes=HomeStyle();
    const data = [
        {
            id:1,
            image:image4,
            title:'Black',
            isActive:false
        },
        {
            id:2,
            image:image5,
            title:'Blue',
            isActive:false
        },
          {
            id:3,
            image:image6,
            title:'Brown',
            isActive:false
        },
          {
            id:4,
            image:image7,
            title:'Grey',
            isActive:false
        }
        ,
          {
            id:5,
            image:image8,
            title:'Khaki',
            isActive:false
        }
        ,
          {
            id:6,
            image:image9,
            title:'Light Blue',
            isActive:false
        }
        ,
          {
            id:7,
            image:image10,
            title:'Navy',
            isActive:false
        }
        ,
          {
            id:8,
            image:image11,
            title:'Olive',
            isActive:false
        }
        ,
          {
            id:9,
            image:image12,
            title:'Pink',
            isActive:false
        }
        ,
          {
            id:10,
            image:image13,
            title:'Purple',
            isActive:false
        }
        ,
          {
            id:11,
            image:image14,
            title:'Red',
            isActive:false
        }
        ,
          {
            id:12,
            image:image15,
            title:'Green',
            isActive:false
        }
        ,
          {
            id:13,
            image:image16,
            title:'Salmon',
            isActive:false
        }
        ,
          {
            id:14,
            image:image17,
            title:'White',
            isActive:false
        }
        ,
          {
            id:15,
            image:image18,
            title:'Yellow',
            isActive:false
        }
    ]
    const [colorActive, setcolorActive] = useState(data)
    
    const activeHandler = (item) => {
        const updatedDict = colorActive.map(i =>{
            if(i.id === item.id){
                return  {...item,isActive:!item.isActive}
            }
            return i
        })
        setcolorActive(updatedDict)
        console.log("updated:",updatedDict);
    }
     
  


  return (
    <>
      <Grid container textAlign="center">
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>Any Colors You’d Rather Not?</h4>
          <p style={{color:'gray'}}>Whether you don’t like it or it doesn’t match you best, let us know.</p>
          
          <Grid container textAlign="center" paddingLeft={{xs:0, md:8}} paddingRight={{xs:0, md:8}}  spacing={2} mt={4}>
            {
              colorActive.map((item,index)=>{
                  return <Grid item xs={12} sm={6} md={2} key={index}>
                            <Image src={item.image} fluid alt="No image"  onClick={() => activeHandler(item) } 
                            style={{ 
                             padding:'4px',
                             border:item.isActive ?'1px solid green':'none',
                             borderRadius: '50%',
                            }}  />
                            <h6>{item.title}</h6>
                        </Grid>
              })  
            }
            
           
           
          </Grid><br />
          <Button className={classes.card_btn} component={Link} to="/finalfashioninsight"
            variant="contained"
            size="large"
            color="success"
            style={{ width: "31%"}}
          >
            Next
          </Button>
          
         
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default ColorsScreen;
