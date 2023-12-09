import React from "react";

export const Hiring = () => {
  return (
    <section className="hiring">
<img src={require('../images/hiringLeft.png')} alt="" height={319} />
<div className="hiringContentWrap">
<h2 className="hiringTitle">We are hiring!</h2>
        <p className="hiringText">
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </p>
        <button type="button" className="hiringBtn">See current openings</button>
</div>
      <img src={require('../images/hiringRight.png')} alt="" height={319}/>
    </section>
  );
};
