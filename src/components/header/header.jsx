import React from 'react';


import icon from './loading.png';

class HeaderCom extends React.Component {   
    hientime = () => {
		var tempDate = new Date();
		var date = tempDate.toLocaleString();
		const currDate = "Cập nhật lần cuối: "+date;
		return (
   			<p style={{display:'contents'}}>{currDate}</p>
            
  		);
	}
    
    render()  {
        return (
        <div  >
            <nav className="navbar navbar-expand-sm bg-light" style={{marginBottom:'1%'}} >
            
                <a className="nav-link" href="/" style={{color:'red'}}>
                    <img alt='1' style={{height:'29px'}} src="https://covid19stats.live/_nuxt/img/9b64d76.png"/>Covid-19 Stats
                </a>
               
                <ul className="navbar-nav">
                    <li className="nav-item" style={{paddingLeft: '10px'}}>
                        <a className="nav-link" href="/">Trang chủ</a>
                    </li>
                    <li className="nav-item" style={{paddingLeft: '10px'}}>
                        <a className="nav-link" href="/chart">Biểu đồ</a>
                    </li>
                     
                </ul>
                <div style={{position:'absolute', right: '1%'}}>
                    <a href="/"><img alt='2' style={{paddingBottom:'3px',height:'20px'}}src={icon}/></a>
                    {this.hientime()}
                </div>
            </nav>
        </div>
        );
    }
}
export default HeaderCom;