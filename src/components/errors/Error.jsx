import React from 'react'
import '../../assets/css/errorstyle.css';

function Error() {
    return (  
<body>
	<div class="container-fluid">
  		<div class="row">
  			<div class="col-lg-12">
  				<div id="notfound">
					<div class="notfound">
						<div class="notfound-404">
							<h1>Oops!</h1>
						</div>
						<h2>404 - Page not found</h2>
						<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
						<span href="dashboard.html">Go To Homepage</span>
					</div>
				</div>
  			</div>
  		</div>
  	</div>
</body>

    )
}

export default Error
