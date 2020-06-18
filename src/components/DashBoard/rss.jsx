import React from 'react';

const a1={
  width:'100px', height:'80px' 
};
const a2={
  fontSize: 'small'
};

const a3={
  fontSize: 'small'
};


class FetchDataFromRSSFeed extends React.Component {
    constructor() {
      super();
      this.state = {
        recentBlogPost1: {
          name: '',
          url: '',
          thumbnail: '',
          description:''
        },
        recentBlogPost2: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
        recentBlogPost3: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
        recentBlogPost4: {
          name: '',
          url: '',
          thumbnail: '',
          description:''
        }
      }
    }
  
    FetchDataFromRssFeed() {
      var request = new XMLHttpRequest();
       
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            var myObj = JSON.parse(request.responseText);
            
        
            this.setState({
              recentBlogPost1: {
                name: myObj.items[0].title,
                url: myObj.items[0].link,
                thumbnail: myObj.items[0].thumbnail,
                description: myObj.items[0].description
              },
              recentBlogPost2: {
                name: myObj.items[1].title,
                url: myObj.items[1].link,
                thumbnail: myObj.items[1].thumbnail,
                description: myObj.items[1].description
              }
            });
          
        }
      }
      request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fsuc-khoe.rss", true);
      request.send();
    }

    FetchDataFromRssFeed1() {
      var request = new XMLHttpRequest();
       
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            var myObj1 = JSON.parse(request.responseText);
            
        
            this.setState({
              recentBlogPost3: {
                name: myObj1.items[0].title,
                url: myObj1.items[0].link,
                thumbnail: myObj1.items[0].thumbnail,
                description: myObj1.items[0].description
              },
              recentBlogPost4: {
                name: myObj1.items[1].title,
                url: myObj1.items[1].link,
                thumbnail: myObj1.items[1].thumbnail,
                description: myObj1.items[1].description
              },
            });
          
        }
      }
      request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fsuc-khoe.rss", true);
      request.send();
    }
  
    componentDidMount() {
      this.FetchDataFromRssFeed();
      this.FetchDataFromRssFeed1();
    }
  
    render() {
      return (
        <div className="row" style={{paddingTop:'8%',borderRadius:'6px',width:'170%',overflow:'auto',background:'white',height:'700px', paddingLeft:'inherit',paddingRight:'inherit'}}>
           <div style={{width:'100%',top:'2%', textAlign:'justify'}}>
                 <div>
                    <div>
                        <a href={this.state.recentBlogPost1.url}>
                    <img alt='1' style={a1} src={this.state.recentBlogPost1.thumbnail} />
                    </a>
                    </div>
                    <div style={a2}>
                        <a  href={this.state.recentBlogPost1.url}>{this.state.recentBlogPost1.name}</a>
                    </div>
                    <div style={a3}> 
                        {this.state.recentBlogPost1.description}
                    </div>
                    </div>
                  <hr/>
                  <div>
                    <div>
                        <a href={this.state.recentBlogPost2.url}>
                        <img alt='2' style={a1} src={this.state.recentBlogPost2.thumbnail} />
                        </a>
                    </div>
                    <div style={a2}>
                        <a   href={this.state.recentBlogPost2.url}>{this.state.recentBlogPost2.name}</a>
                    </div>
                    <div style={a3}>
                        {this.state.recentBlogPost2.description}
                    </div>
                    </div>
                    <hr/>
                    <div>
                    <div>
                        <a href={this.state.recentBlogPost3.url}>
                    <img alt='1' style={a1} src={this.state.recentBlogPost3.thumbnail} />
                    </a>
                    </div>
                    <div style={a2}>
                        <a  href={this.state.recentBlogPost3.url}>{this.state.recentBlogPost3.name}</a>
                    </div>
                    <div style={a3}>
                        {this.state.recentBlogPost3.description}
                    </div>
                    </div>
                    <hr/>
                    <div>
                    <div>
                        <a href={this.state.recentBlogPost4.url}>
                    <img alt='1' style={a1} src={this.state.recentBlogPost4.thumbnail} />
                    </a>
                    </div>
                    <div style={a2}>
                        <a  href={this.state.recentBlogPost4.url}>{this.state.recentBlogPost3.name}</a>
                    </div>
                    <div style={a3}>
                        {this.state.recentBlogPost4.description}
                    </div>
                    </div>
            </div>
            
          </div>
      );
    }
  }
export default FetchDataFromRSSFeed;