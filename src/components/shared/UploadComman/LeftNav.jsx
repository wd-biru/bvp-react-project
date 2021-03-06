/*
 * BVP PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 * Copyright (c) 2019 BVP.
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * BVP. The intellectual and technical concepts contained
 * herein are proprietary to BVP, Inc. and may be covered by U.S.
 * and Foreign Patents, patent applications, and are protected by trade secret
 * or copyright law. Dissemination of this information, reproduction of this
 * material, and copying or distribution of this software is strictly forbidden
 * unless prior written permission is obtained from BVP.
 */

 import React from "react";
 import logo from './myfolder.png';

 class LeftNav extends React.PureComponent {
 	render() {
 		return(
 	<div> 
 		<nav className="side-navbar">
	 		{/*Sidebar Header*/}
	 		<div className="sidebar-header d-flex align-items-center">
		 		<div className="title">
		 			<a href=""><h1 className="h4">My Folder <img src={logo} /></h1></a>
		 		</div>
	 		</div>
 		{/*Sidebar Navidation Menus*/}{/*<span className="heading">Main</span> */}
	 		<ul className="list-unstyled">
		 		<li className="active"><a href="dashboard.html"><span>162</span> <i className="far fa-folder"></i>Home </a></li>
		 		<li><a href="#"><span>1</span> <i className="far fa-folder"></i>360 Nat Geo </a></li>
		 		<li><a href="#"><span>2</span> <i className="far fa-folder"></i>AMC </a></li>
		 		<li><a href="#"><span>12</span> <i className="far fa-folder"></i>AMC </a></li>
		 		<li><a href="#"><span>62</span> <i className="far fa-folder"></i>AON </a></li>
		 		<li><a href="#"><span>1</span> <i className="far fa-folder"></i>Away </a></li>
		 		<li><a href="#"><span>10</span> <i className="far fa-folder"></i>BMW </a></li>
		 		<li><a href="#"><span>12</span> <i className="far fa-folder"></i>Bolthouse </a></li>
		 		<li><a href="#"><span>2</span> <i className="far fa-folder"></i>Brand Assets </a></li>
		 		<li><a href="#"><span>1</span> <i className="far fa-folder"></i>British Ainways </a></li>
		 		<li><a href="#"><span>0</span> <i className="far fa-folder"></i>BMS </a></li>
		 		<li><a href="#"><span>8</span> <i className="far fa-folder"></i>Canada Gooso </a></li>
		 		<li><a href="#"><span>50</span> <i className="far fa-folder"></i>CBS </a></li>
		 		<li><a href="#"><span>34</span> <i className="far fa-folder"></i>CloudMoves.TV </a></li>
		 		<li><a href="#"><span>22</span> <i className="far fa-folder"></i>AMC </a></li>
		 		<li><a href="#"><span>36</span> <i className="far fa-folder"></i>AMC </a></li>
		 		<li><a href="#"><span>47</span> <i className="far fa-folder"></i>AON </a></li>
		 		<li><a href="#"><span>67</span> <i className="far fa-folder"></i>Away </a></li>
		 		<li><a href="#"><span>87</span> <i className="far fa-folder"></i>BMW </a></li>
		 		<li><a href="#"><span>46</span> <i className="far fa-folder"></i>BMS </a></li>
		 		<li><a href="#"><span>25</span> <i className="far fa-folder"></i>Canada Gooso </a></li>
		 		<li><a href="#"><span>34</span> <i className="far fa-folder"></i>CBS </a></li>
		 		<li><a href="#"><span>1</span> <i className="far fa-folder"></i>CloudMoves.TV </a></li>
		 		{/*<li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows"></i>Example dropdown </a>
		 		<ul id="exampledropdownDropdown" className="collapse list-unstyled ">
		 		<li><a href="#">Page</a></li>
		 		<li><a href="#">Page</a></li>
		 		<li><a href="#">Page</a></li>
		 		</ul>
		 		</li> */}
	 		</ul>
 		</nav>
 	</div>
	 );
 	}
 }
 export default LeftNav;
