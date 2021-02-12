import React from 'react'


const Icons = ()=>{
    return(
        <div className="content">
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="card card-plain">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Material Design Icons</h4>
                <p className="card-category">Handcrafted by our friends from
                  <a target="_blank" href="https://design.google.com/icons/">Google</a>
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card-body">
                    <div className="iframe-container d-none d-lg-block">
                      <iframe src="https://design.google.com/icons/">
                        <p>Your browser does not support iframes.</p>
                      </iframe>
                    </div>
                    <div className="col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto">
                      <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the
                        <a href="https://design.google.com/icons/" target="_blank">Material Icons</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Icons