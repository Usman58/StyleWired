import React from "react";
import Grid from "@mui/material/Grid";
import { Image, Table, Dropdown } from "react-bootstrap";
import total from "../images/totalO.png";
import active from "../images/activeO.png";
import pending from "../images/pendingO.png";
import cancelled from "../images/cancelledO.png";
import MC from "../images/Master Card.png";
import VC from "../images/Visa Card.png";
import Paypal from "../images/Paypal.png";
import CC from "../images/Credit Card.png";
import { HomeStyle } from "../Style/HomeStyle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import YourStyleProfile from "../Components/YourStyleProfile";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
function DashboardScreen() {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const classes = HomeStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container px={2} direction="column" style={{paddingLeft:small?'15px':'auto'}}>
        <h4>Dashboard</h4>
        <p style={{ color: "#848484" }}>Check all your stats in one dashboard</p>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item lg={8} sm={12}>
              <Grid container spacing={2}>
                <Grid item md={3} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#21BDCA" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Total
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125{" "}
                      <span
                        style={{ borderColor: "#21BDCA" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={total} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#5372E7" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Active
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#5372E7" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={active} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#64CBB2" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Pending
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#64CBB2" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={pending} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#FF9f24" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Cancelled
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#FF9F24" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={cancelled} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <br />
              <Grid container style={{ display: large ? "block" : "none" }}>
                <h4>Payment Options</h4>
                <Grid container spacing={1}>
                  <Grid item xs={3} lg={2} mt={1}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={MC}
                        fluid
                        alt="No image"
                        style={{width:'15%'}}
                      />{" "}
                      <span style={{ fontSize: "11px" }}>Master Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={3} lg={2} mt={1}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={VC}
                        fluid
                        alt="No image"
                        style={{ width: "22%" }}
                      />
                      <span style={{ fontSize: "11px" }}> Visa Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={3} lg={2} mt={1}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={Paypal}
                        fluid
                        alt="No image"
                        style={{ width: "22%" }}
                      />
                      <span style={{ fontSize: "11px" }}> Paypal</span>
                    </Button>
                  </Grid>
                  <Grid item xs={3} lg={2} mt={1}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={CC}
                        fluid
                        alt="No image"
                        style={{ width: "20%" }}
                      />
                      <span style={{ fontSize: "11px" }}> Credit Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={4} lg={4} >
                    <Button style={{fontSize:'13px'}}
                      variant="contained"
                      color="success"
                      component="span"
                      className={classes.card_btn}
                    >
                      <i class="bi bi-plus-circle">
                        Add Another Payment method
                      </i>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <br />
              <h4 style={{ display: large ? "block" : "none" }}>My Orders</h4>
            </Grid>
            <Grid item lg={4} sm={12}>
              <YourStyleProfile />
            </Grid>
            <Grid
              container
              style={{ display: large ? "none" : "block", marginTop: "15px" }}
            >
              <Grid item>
                <h4>Payment Options</h4>
                <Grid container spacing={1}>
                  <Grid item xs={6} md={3} lg={2}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={MC}
                        fluid
                        alt="No image"
                        style={{ width: "28%" }}
                      />{" "}
                      <span style={{ fontSize: "16px" }}>Master Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={3} lg={2}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={VC}
                        fluid
                        alt="No image"
                        style={{ width: "20%" }}
                      />
                      <span style={{ fontSize: "16px" }}> Visa Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={3} lg={2}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={Paypal}
                        fluid
                        alt="No image"
                        style={{ width: "22%" }}
                      />
                      <span style={{ fontSize: "17px" }}> Paypal</span>
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={3} lg={2}>
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      className={classes.card_btn1}
                    >
                      <Image
                        src={CC}
                        fluid
                        alt="No image"
                        style={{ width: "20%" }}
                      />
                      <span style={{ fontSize: "15px" }}> Credit Card</span>
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Button
                      variant="contained"
                      color="success"
                      component="span"
                      className={classes.card_btn}
                    >
                      <i class="bi bi-plus-circle">
                        Add Another Payment method
                      </i>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container >
          <h4 style={{ display: large ? "none" : "block" }}>My Orders</h4>
         
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.tabContainer}
            >
              <Tab label="Total" className={classes.tab_btn} />
              <Tab label="Active" className={classes.tab_btn} />
              <Tab label="Pending" className={classes.tab_btn} />
              <Tab label="Cancelled" className={classes.tab_btn} />
            </Tabs>
          </Grid>
        </Grid>
        <br />
        <Grid pb={10} item className="w-100">
          <Grid className="shadow rounded" fullWidth p={2}>
            <Table
              style={{ height: "90%" }}
              responsive
              className="manage-table"
              borderless
            >
              <thead>
                <tr style={{ color: "#5AB27E", fontSize: "13px" }}>
                  <th>Order Id</th>
                  <th>Request Date</th>
                  <th>Style Profile</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td style={{fontSize:'14px'}}>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#828282" }}>Pending</td>
                  <td>
                    Credit Card
                  </td>
                  <td> <Dropdown>
                      <Dropdown.Toggle style={{border:'1px solid',borderRadius:'50%'}}
                        variant="success"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </Dropdown></td>
                </tr>

                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td style={{fontSize:'14px'}}>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#5372E7" }}>Confirmed</td>
                  <td>Paypal</td>
                  <td><Dropdown >
                      <Dropdown.Toggle style={{border:'1px solid',borderRadius:'50%'}}
                        variant="success"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </Dropdown></td>
                </tr>
                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td style={{fontSize:'14px'}}>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#E04141" }}>cancelled</td>
                  <td>Master Card</td>
                  <td><Dropdown>
                      <Dropdown.Toggle style={{border:'1px solid',borderRadius:'50%'}}
                        variant="success"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                    </Dropdown></td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardScreen;
