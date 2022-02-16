import React, {Component} from "react";
// import Chart1 from "./Chart1";
// import Chart2 from "./chart2";

class TopBuys extends Component {
 
  
  render() {
    return (
      <section id="topbuy">
        <div className="segment-title">
          <h2>New IPL</h2>
          <blockquote>
          The new IPL entrant LSG. All and all, the ten franchises had two fruitful days at the mega auction and that sets up for a fascinating TATA IPL 2022. We can not wait!
          
          </blockquote>
        </div>
        <div className="grid-2-3" style={{display:'none'}}>
        
        </div>
        <div className="grid-1-3 content" style={{display:'none'}}>
          <h3>Total amount spent by all teams 5,51,70,00,000</h3>
          <p>
            
            <small>(Funds Remaining)</small>
          </p>
        
        </div>
        <div>
          <div
            style={{
              display:'none',
              height: "80vh"
            }}
            className="chart-container"
          >
          </div>
          <p className="text-center">
            
          </p>
        </div>
        <div>
          <p style={{textAlign:'center'}}>
          <em>Spent and Remaining Funds of each team</em> 
          </p>
  
        </div>
      </section>
    );
  }
}

export default TopBuys;
