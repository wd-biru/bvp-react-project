import React from 'react';

import GridImg from '../../../assets/img/me/images.jpg';
import './GridView.css';

const GridViewLink = () => {
    return (
    <tbody>
        <tr>
            <td><img src={GridImg} className="gridimg" /> John Doe 1 
            <span>CEO &amp; Founder, Example</span></td>
            <td>Aug 25, 2019 at 5:07 PM</td>
            <td>298 KB</td>
            <td>Folder</td>
            <td>Dec 15, 2019 at 2:12 PM</td>
        </tr>         
    </tbody>
    )
}

export default GridViewLink;
