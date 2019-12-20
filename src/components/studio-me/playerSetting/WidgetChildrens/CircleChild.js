import React from 'react';

const CircleChild = (props) => {
    const {otherData} = props.widget
    const styles = {
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor : otherData.backgroundColor
    }




    return  <div style={styles}/>;
}

export default CircleChild;