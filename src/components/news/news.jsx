import React from 'react';

 

 
import HeaderCom from '../header/header';
import FetchDataFromRssFeed from '../DashBoard/rss';
import FooterCom from '../Footer/Footer';
 
 

class News extends React.Component { 

	 
    
    render()  {
        return (
            <div>
                <HeaderCom />
                <div style={{width:'70%',margin: 'auto'}}>
                    <FetchDataFromRssFeed/>
                </div>
                <FooterCom/>
            </div>
        );
    }
}
export default News;