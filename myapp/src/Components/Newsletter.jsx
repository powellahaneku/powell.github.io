import React from 'react'

const Newsletter = () => {
  return (<div>
        
        <section class="bg-primary p-5">
        <div class="container">
            <div class="d-md-flex justify-content-between align-items-center">
            
            <h3 class="text-light mb-3 mb-md-0 ">Sign Up for Our News Letter</h3>
            <div class="input-group news-input">
                <input type="email" class="form-control" placeholder="Email" aria-label="Email" ></input>
                <button class="btn btn-outline-light bg-dark btn-lg d-md-flex d-sm-inline" type="submit" id="button-addon2">Submit</button>
            </div>

            <div class=" align-items-center">
            
            </div>
            
            </div>
        </div>
        </section>
    </div>
    
  )
}

export default Newsletter;
