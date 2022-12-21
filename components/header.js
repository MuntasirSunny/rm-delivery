import React from 'react';

function HeaderComponent() {
  return (
    <header className="site-header">
        <div className="container">
        <div className="site-header-inner">
            <div className="brand header-brand">
            <h1 className="m-0">
                <a href="#">
                <img
                    className="header-logo-image"
                    //src="dist/images/logo-light.svg"
                    src="dist/images/logo-light.svg"
                    alt="Logo"
                />
                {/* <img
                    className="header-logo-image"
                    src="dist/images/logo-dark.svg"
                    alt="Logo"
                /> */}
                </a>
            </h1>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeaderComponent;