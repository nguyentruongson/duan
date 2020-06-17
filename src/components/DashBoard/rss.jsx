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
        },
        recentBlogPost5: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
          recentBlogPost6: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
          recentBlogPost7: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
          recentBlogPost8: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
          recentBlogPost9: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
          recentBlogPost10: {
            name: '',
            url: '',
            thumbnail: '',
            description:''
          },
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
              },
              recentBlogPost3: {
                name: myObj.items[2].title,
                url: myObj.items[2].link,
                thumbnail: myObj.items[2].thumbnail,
                description: myObj.items[2].description
              },
              recentBlogPost4: {
                name: myObj.items[3].title,
                url: myObj.items[3].link,
                thumbnail: myObj.items[3].thumbnail,
                description: myObj.items[3].description
              },
              recentBlogPost5: {
                name: myObj.items[4].title,
                url: myObj.items[4].link,
                thumbnail: myObj.items[4].thumbnail,
                description: myObj.items[4].description
              },
              recentBlogPost6: {
                name: myObj.items[5].title,
                url: myObj.items[5].link,
                thumbnail: myObj.items[5].thumbnail,
                description: myObj.items[5].description
              },
              recentBlogPost7: {
                name: myObj.items[6].title,
                url: myObj.items[6].link,
                thumbnail: myObj.items[6].thumbnail,
                description: myObj.items[6].description
              },
              recentBlogPost8: {
                name: myObj.items[7].title,
                url: myObj.items[7].link,
                thumbnail: myObj.items[7].thumbnail,
                description: myObj.items[7].description
              },
              recentBlogPost9: {
                name: myObj.items[8].title,
                url: myObj.items[8].link,
                thumbnail: myObj.items[8].thumbnail,
                description: myObj.items[8].description
              },
              recentBlogPost10: {
                name: myObj.items[9].title,
                url: myObj.items[9].link,
                thumbnail: myObj.items[9].thumbnail,
                description: myObj.items[9].description
              },
            });
          
        }
      }
      request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fsuc-khoe.rss", true);
      request.send();
    }
  
    componentDidMount() {
      this.FetchDataFromRssFeed();
    }
  
    render() {
      return (
        <div className="row" style={{borderRadius:'6px',width:'160%',overflow:'auto',background:'white',height:'700px', paddingLeft:'inherit'}}>
           <div style={{position:'absolute', width:'125%',top:'2%'}}>
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
                        <a  >{this.state.recentBlogPost1.description}</a>
                    </div>
                    </div>
                  <hr/>
                  <div>
                    <div>
                        <a href={this.state.recentBlogPost3.url}>
                        <img alt='2' style={a1} src={this.state.recentBlogPost3.thumbnail} />
                        </a>
                    </div>
                    <div style={a2}>
                        <a   href={this.state.recentBlogPost3.url}>{this.state.recentBlogPost3.name}</a>
                    </div>
                    <div style={a3}>
                        <a   >{this.state.recentBlogPost3.description}</a>
                    </div>
                    </div>
                    <hr/>
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
                        <a  >{this.state.recentBlogPost1.description}</a>
                    </div>
                    </div>
            </div>
            
          </div>
      );
    }
  }
export default FetchDataFromRSSFeed;