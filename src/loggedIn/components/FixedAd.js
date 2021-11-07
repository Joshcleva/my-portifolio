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
          style={{ display: "inline-block", width: "190px", height: "50px" }}
          data-ad-client="ca-pub-7844539134729812"
          data-ad-slot="8456694735"
        ></ins>
      </div>
    );
  }
}