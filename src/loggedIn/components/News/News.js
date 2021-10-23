import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core";
import NewsCard from "./NewsCard";

const styles = (theme) => ({
  newsContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function getVerticalNewsPosts(width, newsPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUp("md", width)) {
    rows = 3;
    xs = 4;
  } else if (isWidthUp("sm", width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  newsPosts.forEach((newsPost, index) => {
    gridRows[index % rows].push(
      <Grid key={newsPost.id} item xs={12}>
        <Box mb={3}>
          <NewsCard
            src={newsPost.src}
            title={newsPost.title}
            snippet={newsPost.snippet}
            date={newsPost.date}
            url={newsPost.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function News(props) {
  const { classes, width, newsPosts, selectNews } = props;

  useEffect(() => {
    selectNews();
  }, [selectNews]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.newsContentWrapper}>
        <Grid container spacing={3}>
          {getVerticalNewsPosts(width, newsPosts)}
        </Grid>
      </div>
    </Box>
  );
}

News.propTypes = {
  selectNews: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  NewsPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withStyles(styles, { withTheme: true })(News));
