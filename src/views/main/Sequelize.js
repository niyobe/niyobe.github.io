import React from 'react';


class Sequelize extends React.Component {
  constructor (props) {
    super(props);

    this.is_mounted = false;
    this.state = {
      host: '',
      params: {},
      response: ''
    }

    this.fetchAllTopics = this.fetchAllTopics.bind(this);
  }
  async fetchAllTopics () {
    try {
      var res = await (await fetch(
        this.state.host + '/topics', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(this.state.params),
          mode: 'cors'
        })).json();

        console.log(res);

      this.setState({
        response: JSON.stringify(res, ' ', 2)
      })
    } catch (e) {
      console.log('error');
      this.setState({
        response: 'server error'
      })
    }
  }


  render () {
    return (
      <div className="row no-gutters" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "480px"}}>
        <div className="col-4">
          <div className="h-100 d-inline-block" style={{ verticalAlign: "middle"}} />
          <label htmlFor="host" className="w-100 text-right mb-0 pr-2">server host :</label>
        </div>
        <div className="col-8">          
          <input className="w-100 p-2" type="text" name="host" value={this.state.host}
            onChange={(e) => this.setState({ host: e.target.value })} onBlur={this.fetchAllTopics} />
        </div>
        
        <div className="col-12 my-1" />

        <div className="col-12">
          <textarea rows="5" className="w-100 p-2" value={this.state.response} disabled />
        </div>
      </div>
    );
  }
}

export default Sequelize;