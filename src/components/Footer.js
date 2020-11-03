import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor:" #94BBF6",
    marginTop: 40,
    height: "20vh",
    textAlign: "center",
    alignItems: "center",
    flex: 0.7,
    display: "flex",
    fontColor:"#ffcd4d",
  },
  /*innerCont: {
  margin: "74px 40px 40px 40px",
    
},*/
  resources: {
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#B0B9DF",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
}));

export default function Footer() {
  const { authenticated } = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.innerCont}>
        {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                Company
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - About <br />
                - Blog <br />
                - Careers <br />
                - Contact <br />
                - Report Fraud <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="p">
                For You
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Privacy <br />
                - Terms <br />
                - Security <br />
                - Sitemap <br />
                - Code of conduct <br />
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            <Typography variant="h5" component="p">
              Gro-Pal for Business
            </Typography>
            <Typography variant="body1" component="p">
            Start earning by Adding your shop at Gro-Pal
            </Typography>
            <br />
            <Link to="/addshop">
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.innerCont}>
        <Typography variant="h5" component="p">
          Gro-Pal  NewsLetter
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 0 }}>
          Grab the  best deals at the earliest 
        </Typography>
        <TextField label="Your Email address" variant="outlined" />
        <Button className={classes.buttonStyleTwo}>SEND</Button>
      </Grid>
        
    </Grid>
  );
}
