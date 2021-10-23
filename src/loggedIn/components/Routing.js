import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import FeatureSection from "./home/FeatureSection";
import PortfolioSection from "./home/PortfolioSection";
import PricingSection from "./home/PricingSection";
import Blog from "./blog/Blog";
import News from "./News/News";
import Contact from "./contact/Contact";
import About from "./about/About";
import BlogPost from "./blog/BlogPost";
import NewsPost from "./News/NewsPost";
import PrivacyPolicy from "./PrivacyPolicy";
import Construction from "./Construction";
import TermsOfService from "./TermsOfService";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const {
    blogPosts,
    newsPosts,
    selectBlog,
    selectHome,
    selectNews,
    selectContact,
    selectAbout,
    selectFeatureSection,
    selectPortfolioSection,
    selectPricingSection,
    selectPrivacyPolicy,
    selectTermsOfService,
    selectConstruction,
  } = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      {newsPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={NewsPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={newsPosts.filter(
            (newsPost) => newsPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        exact
        path="/news"
        component={News}
        selectNews={selectNews}
        newsPosts={newsPosts}
      />
      <PropsRoute
        exact
        path="/contact"
        component={Contact}
        selectContact={selectContact}
      />
      <PropsRoute
        exact
        path="/about"
        component={About}
        selectAbout={selectAbout}
      />
      <PropsRoute
        exact
        path="/services"
        component={FeatureSection}
        selectFeatureSection={selectFeatureSection}
      />
      <PropsRoute
        exact
        path="/portfolio"
        component={PortfolioSection}
        selectPortfolioSection={selectPortfolioSection}
      />
      <PropsRoute
        exact
        path="/pricing"
        component={PricingSection}
        selectPricingSection={selectPricingSection}
      />
      <PropsRoute
        exact
        path="/privacy-policy"
        component={PrivacyPolicy}
        selectPrivacyPolicy={selectPrivacyPolicy}
      />
      <PropsRoute
        exact
        path="/terms-of-service"
        component={TermsOfService}
        selectTermsOfService={selectTermsOfService}
      />
      <PropsRoute
        exact
        path="/construction"
        component={Construction}
        selectConstruction={selectConstruction}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectNews: PropTypes.func.isRequired,
  selectContact: PropTypes.func.isRequired,
  selectTermsOfService: PropTypes.func.isRequired,
  selectPrivacyPolicy: PropTypes.func.isRequired,
  selectConstruction: PropTypes.func.isRequired,
};

export default memo(Routing);
