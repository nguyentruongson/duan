import React from 'react';
import HeaderCom from '../header/header';
import FetchDataFromRssFeed from '../DashBoard/rss';


class News extends React.Component { 

	 
    
    render()  {
        return (
            <div>
                <HeaderCom />
                <div style={{width:'70%',margin: 'auto'}}>
                    <FetchDataFromRssFeed/>
                </div>
 
            </div>
        );
    }
}
export default News;