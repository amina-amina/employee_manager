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
                  <section className='text-center'>
                  <button className='m-3 main_btn '><span>Demande Document</span></button>
                  <button className='m-3 main_btn'><span>Demande Congé</span></button>
                  </section>
<hr className="hr bg-light" />
<section className="text-center  ">
  <h2 className="text-white mb-5">Vacances</h2>
<table class="table table-secondary table-striped">
  <thead>
    <tr>
    
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
    
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
      <td >Larry the Bird</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</section>
                </main>
            </body>
        </div>
    )
}
