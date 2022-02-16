import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import DoughChart from './components/DoughChart'
import Sold from './components/Sold';
import Top from './components/Top';
import TopBuys from './components/TopBuys';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      lineChartData:{},
      doughChartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); 
   
    this.getChartData();
    // this.getRandomData();
  }
  componentDidMount(){
    setInterval(()=> {
      this.getChartData()
    }, 5000)
  }


getChartData(){

  
function shuffleArray(array) {
 
  for (var i = array.length -1 ; i > 0; i--) {

      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
     
  }

  return array;
}

var barData = [{
  name:'I Kishan',
  value:15.25,
  old: 6.2
},{
  name:'D Chahar',
  value:14,
  old:0.8
},{
  name:'Shreyas I',
  value:12.25,
  old:7
},{
  name:'L Livingston',
  value:11.5,
  old:0.75
},{
  name:'H Patel',
  value:10.75,
  old:2
}] 
var shuffleData = shuffleArray(barData)
    this.setState({
      chartData:{
        labels:shuffleData.map(n=> n.name),
        datasets:[
          {
            label:'Current Year Price ',
            data:shuffleData.map(n=> n.value),
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.4)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          },{
            
            label:'Previous Year Price ',
            data:shuffleData.map(n=> n.old),
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });

    var lineData = [
      {
        name: 'GL',
        value: 155000
      },{
        name: 'DC',
        value: 45000
      },{
        name: 'LSG',
        value: 100000
      },{
        name: 'PK',
        value: 95000
      },{
        name: 'CSK',
        value: 100000
      }];
  
  var jumbleData = shuffleArray(lineData)
  // console.log(jumbleData )
  
      this.setState({
        lineChartData:{
           // labels: ['new','old','random'],   //arr1.map(n=> n.name)
           labels:jumbleData.map(n=> n.name),
           datasets:[
             {
               label:'Funds Remaining',
               data:jumbleData.map(n=> n.value),
               backgroundColor:[
                 'rgba(255, 99, 132, 0.6)',
                 'rgba(54, 162, 235, 0.6)',
                 'rgba(255, 206, 86, 0.6)',
                 'rgba(75, 192, 192, 0.6)',
                 'rgba(153, 102, 255, 0.4)',
                 'rgba(255, 159, 64, 0.6)',
                 'rgba(255, 99, 132, 0.6)'
               ]
             }
           ]
         }
         
        }
        )
  
  
  var arr3 = [{
    name: 'Royal Challengers Bangalore',
    value: 1550000,
    color: 'rgba(250,0,0, 0.5)'
  },{
    name: 'Kolkata Knight Riders',
    value: 450000,
    color: 'rgba(153, 102, 255, 0.4)'
  },{
    name: 'Mumbai Indians',
    value: 1000000,
    color: 'rgba(54, 162, 235, 0.6)'
  },{
    name: 'Rajasthan Royals',
    value: 950000,
    color: 'rgba(75, 192, 192, 0.6)'
  },{
    name: 'Sunrisers Hyderabad',
    value: 1000000,
    color: 'rgba(255, 159, 64, 0.6)'
  }]
  
  var arr4 = shuffleArray(arr3)
  
  this.setState({
    doughChartData:{
      
        labels:arr4.map(n=> n.name),
        datasets:[
          {
            label:'Current Year Price ',
            data:arr4.map(n=> n.value),
            backgroundColor: arr4.map(n=> n.color),
          }
        ]
      
    }
  })
  }

  render() {
    return (

      <div className="App">
        <Navbar />
        <BarChart chartData={this.state.chartData} legendPosition="top"/>
        <article>
     <Top />
     </article>
     <article>

        <TopBuys />
     </article>
        <DoughChart doughChartData={this.state.doughChartData}/>
        <Sold />
        <LineChart lineChartData={this.state.lineChartData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
