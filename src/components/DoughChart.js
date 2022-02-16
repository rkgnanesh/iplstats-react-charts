import React, {Component} from 'react';
import { Doughnut} from 'react-chartjs-2';

class DoughChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      doughChartData:props.doughChartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom'
  }

componentDidUpdate() {

  this.state.doughChartData.labels = this.props.doughChartData.labels
  this.state.doughChartData.datasets[0].data = this.props.doughChartData.datasets[0].data
}
    

  render(){
    return (
      <div id="doughChart" className="chart-container chart dough">
        <Doughnut
        data={this.state.doughChartData}
        options={{
            maintainAspectRatio: false,
        title:{
        display:this.props.displayTitle,
        text:'Funds remaining of 5 Teams',
        fontSize:16
        },
        legend:{
        display:this.props.displayLegend,
        position:this.props.legendPosition
        }
    }}
    />
        <p className="text-center">
            <small>
              (Spent / Remaining funds)
            </small>
          </p>

</div>
    )
  }
}

export default DoughChart;
