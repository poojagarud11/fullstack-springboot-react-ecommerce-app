import React from 'react';
import PageHeading from './PageHeading';
import ProductListing from './ProductListing';
import products from '../data/products';
import BootstrapButton from './BootstrapButton';

export default function Home() {
  return (
    <div className="home-cointainer">
      <div className="cointainer col-6">
      <BootstrapButton text="Submit" type="primary" />
      <BootstrapButton text="Save" type="secondary" />
      <BootstrapButton text="Okay" type="success" />
      <BootstrapButton text="Cancel" type="danger" />
      <BootstrapButton text="Delete" type="warning" />
      <BootstrapButton text="Link" type="link" />
       </div>
       <div>  
        <div className="d-grid gap-2 col-8 mx-auto">
         <div className="alert alert-primary text-center" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="alert alert-secondary text-center" role="alert">
        A simple secondary alert—check it out!
        </div>
        <div className="alert alert-success text-center" role="alert">
        A simple success alert—check it out!
       </div>
       <div className="alert alert-danger text-center" role="alert">
      A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning text-center" role="alert">
      A simple warning alert—check it out!
     </div>
     <div className="alert alert-info text-center" role="alert">
     A simple info alert—check it out!
    </div>
    </div>
       </div>
          <PageHeading>
             <p className="page-heading-paragraph">
            Add a touch of creativity to your space with our range of full and unique stickers. Perfect for any occasion!
            </p>
          </PageHeading>
          <ProductListing products={products} />
    </div>
  );
}