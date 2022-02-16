import React from "react";

class Top extends React.Component {
  render() {
    return (
      <section id="topBuy" className="center">
        <p></p>
        <h1>IPL AUCTION 2022</h1> Complete Detials of Sold & Unsold Players in IPL
        <p />
        <p
          style={{
            textAlign: "left"
          }}
        >
         204 players were sold and INR 5,51,70,00,000 was splurged amongst the ten franchises during the two-day TATA Indian Premier League (IPL) 2022 Auction in Bengaluru. Young Indian cricketers dominated the proceedings at the auction.
        </p>
        <div className="flex">
          <div className="grid-1-3 content">
            <br />
            <small>
             Sold Players
              <br />
              <em>204</em>
              <br />
              Final Day 2 Auction
            </small>
          </div>
          <div className="grid-1-3 content">
           <br />
            <small>
              Overseas Players
              <br />
              <em>67</em>
              <br />
              From all over the world
            </small>
          </div>
          <div className="grid-1-3 content">
           <br />
            <small>
              Top Buy
              <br />
              <em>15.25</em>{" "}
              <span>
              <strong>Ishan Kishan</strong>
                <br />
               
              </span>
              <br />
              
            </small>
          </div>
        </div>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Ishan Kishan attracting the topmost bid of INR 15.25 Crore which saw him return to MI. Meanwhile, Deepak Chahar, who returned to CSK for INR 14 Crore, became the most expensive Indian pace bowler to be ever bought at the IPL Auction. KKR broke the bank for Shreyas Iyer and bought the stylish right-handed batter for INR 12.25 Crore. Liam Livingstone, Wanindu Hasaranga, Nicholas Pooran, Shardul Thakur and Lockie Ferguson also made merry at the Auction while Avesh Khan became the most expensive uncapped player in the history of the IPL, with INR 10 Crore against his name.
          <a href="https://www.iplt20.cpm">(IPL T20)</a>
        </p>
        <br />
        <a className="btn" href="https://iplt20.com">
          Visit IPL Official Website
        </a>
      </section>
    );
  }
}

export default Top;
