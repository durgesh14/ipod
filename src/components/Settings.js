import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod > Settings</p>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} alt='img' src="https://cdn-icons-png.flaticon.com/512/563/563541.png" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'50%',
        height:'50%',
        alignSelf : 'center'
    },
    titleBar : {
        height:'15%',
        width:'100%',
        borderRadius:'10px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(124, 134, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 6px 12px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    }
}

export default Settings;