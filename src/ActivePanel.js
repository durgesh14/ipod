import React from 'react';


class ActivePanel extends React.Component{
    
    
    render(){
        return(
            <div className='homeScreen' id='home-screen'>
                <div className='menuList'  id='menu-list'>
                    <div className='titleBar' >
                        <p style={{fontWeight:'bold'}}>iPod</p>
                    </div>
                    <div className='item-lists' >
                        <div className={this.props.activeItem==='NowPlaying'?'active':''}>
                            Now Playing {this.props.activeItem==='NowPlaying'?<span>&gt;</span>:''}
                        </div>
                        <div  className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span>&gt;</span>:''}
                        </div>
                        <div className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span>&gt;</span>:''}
                        </div>
                        <div className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span>&gt;</span>:''}
                        </div>
                    </div>

                    

                </div>
                <div className='imageContainerPanel' id='image-container'>
                </div>
            </div>
        );
    }
    
}



export default ActivePanel;