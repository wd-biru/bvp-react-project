import React from 'react';

const SquareChild = (props) => {
    const {otherData} = props.widget

    const styles = {
        height: '100%',
        width: '100%',
        backgroundColor : otherData.backgroundColor
    }




    return  <div style={styles}/>;
}

export default SquareChild;