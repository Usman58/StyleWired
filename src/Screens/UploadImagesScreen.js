import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Previews from '../Components/ImageDrop';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { HomeStyle } from "../Style/HomeStyle";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";

function UploadImagesScreen() {
  const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const classes = HomeStyle();
  return (
    <>
      <Grid container textAlign="center" >
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>Got Pictures To Show Us? </h4>
          <p style={{ color: "#848484" }}>Whether it’s your own pics on Instagram or a specific style you love, we’re all eyes.
</p>
          
          <Grid container textAlign="center" paddingLeft={{xs:0, md:15}} paddingRight={{xs:0, md:15}} mx='auto'>

          <Grid item xs={12} sm={6} lg={3} mt={5}><Previews /></Grid>
          <Grid item xs={12} sm={6} lg={3} mt={5}><Previews /></Grid>
          <Grid item xs={12} sm={6} lg={3} mt={5}><Previews /></Grid>
          <Grid item xs={12} sm={6} lg={3} mt={5}><Previews /></Grid>
          </Grid>
          <br />
          <Grid container textAlign="center" justifyContent="center">
            
          <p className={classes.l1}><span className={classes.l2}>OR</span></p>
          
          </Grid>
          <br />
         
          <FormControl variant="outlined" color="success" size="small" style={{width:small?'50%':'40%'}}>
          <InputLabel >Instagram Profile</InputLabel>
            <OutlinedInput
              id="outlined-adornment-weight"
              className={classes.textFieldContainer}
              endAdornment={
                <InputAdornment position="end"><i class="bi bi-instagram" style={{color:'rgba(233, 89, 80)'}}></i></InputAdornment>
              }
              

            />
          </FormControl>

          <br />
          
          <br />
          <Button className={classes.card_btn} component={Link} to="/signuppage"
            variant="contained"
            color="success"
            size="large"
            style={{width:small?'50%':'30%'}}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default UploadImagesScreen;
