import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      lineChartData:props.lineChartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'top'
  }
  componentDidUpdate() {
// console.log('inside')
// console.log(this.props.lineChartData)
// console.log(this.props.lineChartData.labels)
    this.state.lineChartData.labels = this.props.lineChartData.labels
    this.state.lineChartData.datasets[0].data = this.props.lineChartData.datasets[0].data
  }

  
  render(){
    return (
      <div id="lineChart" className="chart-container chart">
        <Line
        data={this.state.lineChartData}
        options={{
        maintainAspectRatio:false,
        title:{
        display:this.props.displayTitle,
        text:'Remaining 5 Teams Funds',
        fontSize:25
        },
        legend:{
        display:this.props.displayLegend,
        position:this.props.legendPosition
        }
    }}
    />


</div>
    )
  }
}

export default LineChart;
