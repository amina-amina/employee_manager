import React from 'react'
import  "../../assets/front office/front.css";
export default function MainPage() {
    return (
        <div>
            <body >
                <header>
                   
                    <nav class="navbar navbar-expand-lg bg-dark  ">
  <div class="container-fluid ">
    <a class="navbar-brand text-white mr-5" >Employee Manager</a>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav float-end">
        <a class="nav-link active text-white" aria-current="page" >Register</a>
        <a class="nav-link text-white" >Login</a>
      </div>
    </div>
  </div>
</nav>

                </header>

                <main>
                  <div className='text-center'>
                  <button className='m-3 main_btn '>Demande Document</button>
                  <button className='m-3 main_btn'>Demande Congé</button>
                  </div>
                </main>
            </body>
        </div>
    )
}
