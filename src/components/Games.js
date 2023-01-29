import React from 'react';

class Games extends React.Component{
    
    render(){
        return(
            <div className='settings' >
                 <div className='titleBarGames'>
                        <p style={{fontWeight:'bold'}}>iPod > Games</p>
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img className='image' src="https://nextbridge.com/wp-content/uploads/2021/01/lets-play-a-game-online.gif" alt='img' />
                </div>
                
            </div>
        );
    }
    
}


export default Games;