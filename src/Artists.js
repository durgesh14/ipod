import React from 'react';
import artistImage from './assests/react.png';

class Artists extends React.Component{
    
    render(){
        return(
            <div className='artistsContainer' style={styles.artistsContainer}>

                 <div className='titleBar' style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                    </div>

                <div className='info' style={styles.info}>
                    <div className='imageContainer' style={styles.imageContainer}>
                    </div>
                    
                    <div className='subInfo' style={styles.subInfo}>
                        <div  className='myimage'>IPod.js <img src="https://cdn-icons-png.flaticon.com/512/4623/4623628.png" /></div>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Dev: Durgesh Singh </p>
                    </div>
                    
                </div>

                <div className='info2' style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}> <a href='https://github.com/durgesh14?tab=repositories'> Github Repo </a></h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
   
}

export default Artists;