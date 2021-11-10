import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import {NavLink} from 'react-router-dom';
import Helmet from "react-helmet";

const width = 100;

const features = [
  {
    color: "#00C853",
    headline: "Web Design + Development",
    text: "Clean, modern designs - optimized for performance, search engines, and converting users to customers.",
    icon: (
      <NavLink to="/pricing">
        <img src="/images/webDesign.png" alt="ico" style={{ width: width }} />,
      </NavLink>
    ),
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Software | App Development",
    text: "Get a responsive design Software + App that is accessible to all users, regardless of their device.",
    icon: (
      <NavLink to="/pricing">
        <img src="/images/appDev.png" alt="ico" style={{ width: width }} />,
      </NavLink>
    ),

    mdDelay: "400",
    smDelay: "300",
  },
  {
    color: "#0091EA",
    headline: "E-commerce",
    text: "Market your Business Online and reach millions of buyers across the Globe.",
    icon: (
      <NavLink to="/pricing">
        <img
          src="/images/onlineShopping.png"
          alt="ico"
          style={{ width: width }}
        />
      </NavLink>
    ),
    mdDelay: "420",
    smDelay: "10",
  },
  {
    color: "#d50000",
    headline: "DB Analytics",
    text: "Build database management App / software with JCP today at negotiable price",
    icon: (
      <NavLink to="/pricing">
        <img
          src="/images/graphicDesigner.png"
          alt="ico"
          style={{ width: width }}
        />
      </NavLink>
    ),
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C00",
    headline: "Electricity",
    text: "Light your house / Industry with all the latest and durable equipments and you will have no regrets at all.",
    icon: (
      <NavLink to="/pricing">
        <img src="/images/electrical.png" alt="ico" style={{ width: width }} />
      </NavLink>
    ),
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#304FFE",
    headline: "Web Hosting",
    text: "Host your website with us at extremely cheap prices and your self a free domain for your website.",
    icon:(
      <NavLink to="/pricing">
      <img src="/images/e-comm.png" alt="ico" style={{ width: width }} />,
      </NavLink>
    ),
    mdDelay: "500",
    smDelay: "240",
  },
  {
    color: "#64DD17",
    headline: "Logo Designing | illustion",
    text: "Create a Basic and attractive Logo for your business | organisation with us.",
    icon: (
      <NavLink to="/pricing">
      <img src="/images/logoDesigner.png" alt="ico" style={{ width: width }} />
      </NavLink>

    ),
    mdDelay: "30",
    smDelay: "10",
  },

  {
    color: "#C51162",
    headline: "Laptop/Phone Repair",
    text: "Troubleshoot & Repair your laptop / phone quickly and reliably fast",
    icon: (
      <NavLink to="/pricing">
        <img src="/images/phoneRepair.png" alt="ico" style={{ width: width }} />
      </NavLink>
        
    ),
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#00B8D4",
    headline: "Advertisements",
    text: "We are the king of advertising your business or product or events very fast and relaible on net.",
    icon: (
      <NavLink to="/pricing">
      <img src="/images/Advertise.png" alt="ico" style={{ width: width }} />
      </NavLink>
    ),
    mdDelay: "400",
    smDelay: "0",
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Helmet>
        <title>Josh Creative Programer</title>
        <meta
          name="description"
          content="Find my services for kasese, fort portal, bwera, bundibugyo, mbarara, uganda and across the whole world here at joshcreativeprogramer, joshcreativeprograma.netlify.app"
        />
        <meta
          name="keywords"
          content="Web designing, web hosting, word press, gaming, laptop and phone repair and many other tech solutions"
        />
        <link rel="apple-touch-icon" href="/jcp.png" />
        <style type="text/css"></style>
      </Helmet>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Services
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
