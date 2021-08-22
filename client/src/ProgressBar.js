import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: '30px',
        width: '100px',
        backgroundColor: 'whitesmoke',
        borderRadius: 0,
        margin: 50,
        transform: 'rotate(-90deg)'
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:0,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default ProgressBar;
