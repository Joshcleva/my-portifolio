import React from 'react';

export default class GoogleAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className="Ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-gk+2d+39-5t+2g"
          data-ad-client="ca-pub-7844539134729812"
          data-ad-slot="8975569481"
        ></ins>
      </div>
    );
  }
}