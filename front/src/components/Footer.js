import React from 'react'

const Footer = () => {
  return (
    <>
   <footer className="bg-success text-center text-white">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Footer Content</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <div className="text-white contacti">Email: example@example.com</div>
          </li>
          <li>
            <div className="text-white contacti">Phone: +1 (123) 456-7890</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2023 Foody App. All rights reserved.
  </div>
</footer>


    </>
  )
}

export default Footer