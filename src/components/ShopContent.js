import React from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ShopCard from "./ShopCard";

const ShopContent = () => {
  const {shops } = useSelector((state) => state.data);
  const shopArray = shops.shops;

  const getShopCard = (shopObj) => {
    return (
      <Grid item xs={12} sm={3} key={shopObj._id}>
        <ShopCard {...shopObj} />
      </Grid>
    );
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
        Order from your favourite Eatery -
      </Typography>
      <br />
      <Grid container spacing={2}>
        {shopArray ? (
          shopArray.length > 0 ? (
            shopArray.map((shop) => getShopCard(shop))
          ) : (
            <p>
              No Shops currently available in your area, come back Later.
            </p>
          )
        ) : (
          <p>Server Error, come back Later.</p>
        )}
      </Grid>
    </>
  );
};

export default ShopContent;
