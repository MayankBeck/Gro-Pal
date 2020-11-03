import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import cover from "../images/cover_img.jpg";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft:40,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 300,
    color: "#EF4C8B",
  },
  delivery: {
    
    fontSize: 64,
   // fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
    color:" #9C6BFF",
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex:1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
    objectFit: "contain",
    backgroundColor:"#ffebce",

  },
  coverImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    paddingRight:0,
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#ffcd4d",
    marginTop: 30,
  },
}));

const HomeStart = () => {
  const classes = useStyles();
  return (
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          All Essentials Delivered
        </Typography>
        <Typography className={classes.delivery} noWrap>
          With Safety And Care 
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Gro-Pal is un ultimate solution to all your essential needs. <br/>
            Order anything and we will bring it  to your door steps with all caution for your convinience.
        </Typography>
        <Button variant="outlined" className={classes.ctaOrder}>
          GET STARTED
        </Button>
      </div>
      <div className={classes.cover}>
        <img src={cover} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
  );
};

export default React.memo(HomeStart);
