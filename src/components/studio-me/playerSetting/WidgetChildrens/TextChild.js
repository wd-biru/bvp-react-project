import React from 'react';

const TextChild = (props) => {
   const {otherData} = props.widget;
    const styles = {
        color: otherData.textColor,
        fontWeight: otherData.bold ? 'bold' : 'none',
        textDecoration: otherData.underline ? 'underline' : 'none',
        fontStyle: otherData.italic ? 'italic' : 'none',
        fontFamily: otherData.textFont,
        background: otherData.textBackgroundColor,
        fontSize: parseInt(otherData.textSize),
        height: '100%',
        width: '100%'
    }




  return  <div style={styles}>{otherData.textName}</div>;
}

export default TextChild;