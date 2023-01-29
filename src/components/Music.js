import React from 'react';

class Music extends React.Component{

    render(){
        return(
            <div className='musicScreen'id='music-screen'>
                <div className='menuList' id='menu-list'>
                    <div className='titleBar'>
                            <p style={{fontWeight:'bold'}}>iPod > Music</p>
                            
                    </div>
                   
                        <div className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </div>
                        <div className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </div>
                
                </div>
                <div className='imageContainermusic' id='image-container'>
                </div>
            </div>
        );
    }
    
}


export default Music;