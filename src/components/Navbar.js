import React,{Component} from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="active">
            <a href="#barChart">Bar</a>
          </li>
          <li>
            <a href="#topBuy">Top Buy</a>
          </li>
          <li>
            <a href="#doughChart">Dough</a>
          </li>
          <li>
            <a href="#lineChart">Line</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;