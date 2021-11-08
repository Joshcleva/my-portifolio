import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Box, withStyles } from "@material-ui/core";
import NewsCard from "./NewsCard";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomImage from "../../../shared/components/ZoomImage";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

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
  img: {
    width: "100%",
    height: "auto",
  },
  card: {
    boxShadow: theme.shadows[4],
  },
});

function NewsPost(props) {
  const { classes, title, src, content, otherArticles, date } = props;

  useEffect(() => {
    document.title = `News - ${title}`;
    smoothScrollTop();
  }, [title]);

  return (
    <Box
      className={classNames("lg-p-top", classes.wrapper)}
      display="flex"
      justifyContent="center"
    >
      <div className={classes.newsContentWrapper}>
        <Grid container spacing={5}>
          <Grid item md={9}>
            <Card className={classes.card}>
              <Box pt={3} pr={3} pl={3} pb={2}>
                <Typography variant="h4">
                  <b>{title}</b>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <p>{date}</p>
                </Typography>
              </Box>
              <ZoomImage className={classes.img} src={src} alt="" />
              <Box p={3}>
                {content}
                <Box pt={2}>
                  <Grid spacing={1} container>
                    {["Facebook", "Twitter", "WhatsApp", "Tumblr"].map(
                      (type, index) => (
                        <Grid item key={index}>
                          <ShareButton
                            type={type}
                            title="JCP"
                            description="Josh Creative Programer, A full stack web developer"
                            disableElevation
                            variant="contained"
                            className="text-white"
                            classes={{
                              label: "text-white",
                            }}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
            crossorigin="anonymous"
          ></script>
          <Grid item md={3}>
            <Typography variant="h6" paragraph>
              "Don't Miss !!!"
            </Typography>
            {otherArticles.map((newsPost) => (
              <Box key={newsPost.id} mb={3}>
                <NewsCard
                  title={newsPost.title}
                  snippet={newsPost.snippet}
                  date={newsPost.date}
                  url={`${newsPost.url}${newsPost.params}`}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

NewsPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  otherArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(NewsPost);
