import React, { useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import FreightSendInput from "./buttons";
import ContainerCheckbox from "./containerCheckBox";

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: "1.68rem",
    marginLeft: "5.5rem",
  },
  bookingHeader: {
    fontSize: "26px",
    color: "#303030",
    marginBottom: "9px",
  },
  helperText: {
    color: "#81868c",
    marginBottom: "13px",
  },
  headerText: {
    paddingTop: "1.9rem",
    marginBottom: "1rem",
    color: "#303030",
    fontSize: "20px",
  },
  servicesContainer: {
    backgroundColor: "#fff",
    width: "100%",
    paddingLeft: "45px",
    marginBottom: "1rem",
  },
  service: {
    height: "85px",
    width: "211px",
    border: "1px solid #888d93",
    borderRadius: "4px",
    margin: "0 15px ",
  },
  serviceContainer: {
    paddingBottom: "1.5rem",
    width: "100%",
    margin: 0,
  },
  contactDetailsHeader: {
    color: "#0746a6",
    paddingTop: "1.9rem",
    marginBottom: "1rem",
    fontSize: "20px",
  },
  inputsContainer: {},
  labelText: {
    color: "#303030",
    marginBottom: ".5rem",
    fontSize: "14.4px",
  },
  inputField: {
    height: "44px",
    backgroundColor: "#f3f3f3",
    marginRight: "1rem",
    border: 0,
    marginBottom: "2rem",
    "&:focus": {
      border: 0,
    },
  },
  checkBox: {
    backgroundColor: "#fff",
    border: "1px solid green",
    cursor: "pointer",
    color: "#0746a6",

    borderRadius: "4px",
    alignContent: "center",
  },
}));
export default function Form() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  return (
    <Box className={classes.formContainer}>
      <Typography className={classes.bookingHeader}>New Booking</Typography>
      <Typography className={classes.helperText}>
        Fill in the information below get a quote or create a new booking.
      </Typography>

      {/* Start of the form */}
      <Box>
        <Box className={classes.servicesContainer}>
          <Typography className={classes.headerText}>
            Select a Service
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            className={classes.serviceContainer}
          >
            <div className={classes.service}></div>
            <div className={classes.service}></div>
            <div className={classes.service}></div>
            <div className={classes.service}></div>
          </Box>
        </Box>
      </Box>

      {/* Contact details start */}
      <Box className={classes.servicesContainer}>
        <Typography className={classes.contactDetailsHeader}>
          Your Contact Details
        </Typography>

        <Grid container>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="businessName">
                (Business) Name {"  "} <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" className={classes.inputField} required />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="mobileNumber">
                Mobile Number {"  "} <span style={{ color: "red" }}>*</span>
              </label>
              <input type="tel" className={classes.inputField} required />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="email">
                Your Email
              </label>
              <input type="email" className={classes.inputField} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/*Start of container particulars */}
      <Box className={classes.servicesContainer}>
        <Typography className={classes.headerText}></Typography>

        <Box
          display="flex"
          flexDirection="row"
          className={classes.serviceContainer}
        >
          <Box display="flex" flexDirection="row">
            <ContainerCheckbox
              className={classes.checkBox}
              label="Full Container (FCL)"
            />
            <ContainerCheckbox
              className={classes.checkBox}
              label="Less than Container (LCL)"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
