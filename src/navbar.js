import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <>

                <nav class="navbar navbar-expand-lg bg-info">
                    <div class=" main-nav d-flex">
                            <a class="navbar-brand text-warning" href="#"><img src="/images/navshib.svg"/> SHIBA TOKEN</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-li">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Ecosystem</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Buy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">ShibaSwap</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Art</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="#">Community</a>
                                    </li>
                                    <li>
                                        <button class="navBtn" type="button">Use ShibaSwap</button>
                                    </li>
                                </ul>
                                
                                    
                                
                            </div>
                    </div>
                </nav>
</>
        );
    }
}
 
export default Navbar;