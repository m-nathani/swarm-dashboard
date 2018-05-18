import React, { Component } from 'react';
import './node-stats.css';
import * as R from 'ramda'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class NodeStats extends Component {

  state = {
    averageTime: 0,
    options: {}
  };

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps
      this.setState({
        averageTime: (R.sum(R.pluck("AvgCycleTime", data))) / data.length});
        this.setData(R.pluck("AvgCycleTime", data))
  }

  setData(value){
    console.log(this.refs.chart.chart)
    let chart = this.refs.chart.chart;
    chart.addSeries({
        data: value
    });
}

  renderStats() {
    return R.map(val => {
      return <tr key={val.Timestamp}>
      <td>{val.NodeId}</td>
      <td>{val.Cycles}</td>
      <td>{val.AvgCycleTime}</td>
    </tr>
    }, this.props.data)
  }

  render() {
    return (
      <div>
        <header className="node-stats-header">
          <h1 className="node-stats-title">Node Statistics</h1>
          <table className="node-stats-table">
            <tbody>
              <tr>
                <th>Node Id</th>
                <th>Cycles</th>
                <th>AvgCycleTime</th>            
              </tr>
              {this.renderStats()}
              </tbody>
          </table>
          <p>Average Time of Nodes: {this.state.averageTime}</p>
          <HighchartsReact
                highcharts={Highcharts}
                options={this.state.options}
                ref="chart" />
        </header>
      </div>
    );
  }
}

export default NodeStats;
