import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
// import PieChart from './PieChart';

class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

componentDidUpdate() {
  // console.log('inside')
  // console.log(this.props.lineChartData.labels)
      this.state.chartData.labels = this.props.chartData.labels
      this.state.chartData.datasets[0].data = this.props.chartData.datasets[0].data
    this.state.chartData.datasets[1].data = this.props.chartData.datasets[1].data
    }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div id="barChart" className="chart-container chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio:false,
            title:{
              display:this.props.displayTitle,
              text:'Top 5 Players Sold in IPL Auction 2022 ',
              fontSize:20,
              fontColor: 'black'
            },
            legend:
            {
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        

      </div>
    )
  }
}

export default BarChart;
