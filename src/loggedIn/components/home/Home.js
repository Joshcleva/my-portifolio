import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import PortfolioSection from "./PortfolioSection";
import Helmet from "react-helmet";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
             <Helmet>
          <title>Josh Creative Programer, Kasese, Uganda</title>
          <meta
            name="description"
            content="Stand Out from the competition and get the stunning mobile friendly website | App now at extremely cheap prices
                            and promote Your Company | Organisation | Business
                            across the Globe. If you're seeking a web presence or are looking to hire,
                            contact me here"
          />
          <meta
            name="keywords"
            content="Stand Out from the competition and get the stunning mobile friendly website | App now at extremely cheap prices
                            and promote Your Company | Organisation | Business
                            across the Globe. If you're seeking a web presence or are looking to hire,
                            contact me here"
          />
          <link rel="apple-touch-icon" href="/jcp.png" />
          <style type="text/css"></style>
        </Helmet>
      <HeadSection />
      <FeatureSection />
      <PortfolioSection/>
      <PricingSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
