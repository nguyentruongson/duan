import React from 'react';
 

class FooterCom extends React.Component {   
  
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
    
    render()  {
        return (
        <div style={{width: '100%',
           
          bottom: '0'}}>
            <nav className="navbar navbar-expand-sm bg-light" style={{marginBottom:0,marginTop:'1%'}} >
                <div>
                    Thời gian hiện tại: {this.state.time}
                </div>
            </nav>
        </div>
        );
    }
}
export default FooterCom;