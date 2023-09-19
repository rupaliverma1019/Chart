
import './App.css';
import BarChartExample from './BarChart';
import Card from './Card';
import LineChartExample from './LineChartEx';
import PieChartExample from './Piechart';
import PieChart2 from './Piechart2';
import PieChart3 from './Piechart3';
// import HalfDonutChart from './Piechart';
import StackedBarChartExample from './Stackbarchart';


function App() {
  
  return (
    <div className="App">
      <div className='container1'>
        <div>
          <Card/>
    <div className='piechart'>
      <PieChartExample/>
      <PieChart2/>
      <PieChart3/>
      </div>
      </div>
      <div>
      <BarChartExample/>

      </div>
      </div>

      <div className='container2'>
        <div className='line'>
      <LineChartExample/>
      </div>
      <div className='stack'>
      <StackedBarChartExample/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
