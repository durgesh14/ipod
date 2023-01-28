import React from 'react';

class Music extends React.Component{

    render(){
        return(
            <div className='musicScreen' style={styles.musicScreen} id='music-screen'>
                <div className='menuList' style={styles.menuList} id='menu-list'>
                    <div className='titleBar' style={styles.titleBar}>
                            <p style={{fontWeight:'bold'}}>iPod > Music</p>
                            
                    </div>
                   
                        <div className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </div>
                        <div className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </div>
                
                </div>
                <div className='imageContainermusic' style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }
    
}

const styles = {
        
}


export default Music;