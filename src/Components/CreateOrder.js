import React,{useState,useEffect} from "react";

import Grid from "@mui/material/Grid";
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Autocomplete from "@mui/material/Autocomplete";
import { HomeStyle } from "../Style/HomeStyle";
import { FormHelperText } from '@mui/material';

const rates1 = [
    { label: "$40-$80" },
    { label: "$80-$150" },
    { label: "$150-$300" },
    { label: "$300-$500" },
    { label: "$500-open end" },
  ];
  const rates2 = [
    { label: "$40-$80" },
    { label: "$80-$150" },
    { label: "$150-$300" },
    { label: "$300-$500" },
    { label: "$500-open end" },
    { label: "No need" },
  ];
  const rates3 = [
    { label: "$40-$80" },
    { label: "$80-$150" },
    { label: "$150-$300" },
    { label: "$300-$500" },
    { label: "$500-open end" },
    { label: "No need" },
  ];
  
  
function CreateOrder({val}) {
  const classes = HomeStyle();
  const [selectDropdown, setSelectDropdown] = useState([])
  const [text, setText] = useState(null)


  useEffect(() => {
    console.log(text,'selectDropdown',selectDropdown);
    if(selectDropdown.length === 2){
      setText('Bag and Shoes')
    }else if(selectDropdown.includes('bag')){
        setText('Bag')
    }else if(selectDropdown.includes('shoe')){
      setText('Shoes')
    }else{
      setText(null)
    }
  }, [selectDropdown,text])

  const handleChange=(e)=>{
    var ID = (e.target.id).split('-')
    if(e.target.innerHTML === 'No need'){
      if(!selectDropdown.includes(ID[0])){
        setSelectDropdown([...selectDropdown,ID[0]])
      }
    }else{
        setSelectDropdown(selectDropdown.filter(v=> v !== ID[0]))
    }
  };

  return (
    <>
       
      <Form>
      
        <Grid container px={2}  justifyContent="center" alignItems='center' spacing={2} mt={2}>
          
          <Grid item xs={12} lg={4} md={6} >
          <h5 >Outfit{val}</h5>
            <Form.Group controlId="name">
              <Form.Label style={{ color: "gray" }}>Occasion</Form.Label>
              <br />
              <Form.Control
                rows="6"
               
                placeholder="Please Describe"
                as="textarea"
              ></Form.Control>
            </Form.Group>
          </Grid>
          <Grid item xs={12} lg={4} md={6} mt={1}>
            <Form.Group controlId="name">
              <Form.Label>Minimum Spending on clothing </Form.Label>
              <br />
              <Autocomplete size="small"
              className={classes.textFieldContainer}
                disablePortal
                id="combo-box-demo"
                options={rates1}
                renderInput={(params) => (
                  <TextField {...params} />
                )}
              />
            </Form.Group><br />
            <Form.Group controlId="name" >
              <Form.Label>Minimum Spending on Bag</Form.Label>
              <Autocomplete size="small" className={classes.textFieldContainer}
                disablePortal
                id="bag"
                options={rates2}
                value={rates2.label}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params}  />
                )}
              />{" "}
            </Form.Group>
          </Grid>
          <Grid item xs={12} lg={4} md={6} mt={1}>
          <Form.Group controlId="name">
              <Form.Label>Minimum Spending on Shoes</Form.Label>
              <br />
              <Autocomplete size="small" className={classes.textFieldContainer}
                disablePortal
                id="shoe"
                options={rates3}
                value={rates2.label}
                onChange={handleChange}
               
                renderInput={(params) => (
                  <TextField {...params} />
                )}
              />
            </Form.Group><br />
            <Grid container mt={3}>
            {text}
              <Grid item xs={12}>
          
            <label htmlFor="contained-button-file" style={{width:"100%"}}>
                <Input accept="image/*" id="contained-button-file" hidden type="file"  />
                <Button  style={{ width: "100%" }} variant="outlined" color="success" size="large" component="span"  className={classes.card_btn1} >
                <i class="bi bi-upload"> Upload Picture</i>
                </Button>
            </label>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
     
    </>
  );
}

export default CreateOrder;
