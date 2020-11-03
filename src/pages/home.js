import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './home.css';

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import HomeStart from "../components/HomeStart";
import SearchBar from "../components/SearchBar";
import Spinner from "../util/spinner/spinner";
import ShopContent from "../components/ShopContent";

// import store from "../redux/store";
// import { fetchShopsByAddress } from "../redux/actions/dataActions";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
  SearchBar: {
    margin: "24px 0 28px 360px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.data);
  const {
    account: { role },
    authenticated,
  } = useSelector((state) => state.auth);
  const [locationStatus, setLocationStatus] = useState(
    localStorage.getItem("location") ? true : false
  );

  // let latlng = localStorage.getItem("latlng");

  // if (latlng) {
  //   const latlngArray = latlng.split(", ");
  //   dispatch(fetchShopsByAddress(latlngArray[0], latlngArray[1]));
  // }

  let shopMarkup = loading ? <Spinner /> : <ShopContent />;
  return (
    <>
      {authenticated && role === "ROLE_SELLER" ? (
        <Redirect to="/seller/dashboard" />
      ) : (
        <>
            <HomeStart />
            <div className="searhShop">
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5" className={classes.center} noWrap>
                Start Shopping from  nearby Stores&nbsp;&nbsp;
                <span style={{ fontSize: 40 }}></span>
              </Typography>
            </Grid>
            <Grid item className={classes.SearchBar}>
              <SearchBar page="home" action={setLocationStatus} />
            </Grid>
            <Grid item container>
              <Grid item xs={false} sm={1} />
              <Grid item xs={12} sm={10}>
                {locationStatus ? (
                  shopMarkup
                ) : (
                  <Typography variant="body1" className={classes.center} noWrap>
                    Enter your location to view nearby available stores
                  </Typography>
                )}
              </Grid>
              <Grid item xs={false} sm={1} />
            </Grid>
            </Grid>
            </div>
        </>
      )}
    </>
  );
};

export default Home;
