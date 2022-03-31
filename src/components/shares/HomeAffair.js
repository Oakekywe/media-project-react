import React from 'react'

export default function HomeAffair({ image }) {
   return (
      <div class="col-md-4 mb-3">
         <div class="card">
            <img src={image} class="card-img-top" alt="p1" />
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-info btn-sm float-end">
                  <i className="fa fa-eye text-white"></i>
                  <strong className="text-white px-1">Detail...</strong>
               </a>
            </div>
         </div>
      </div>
   )
}
