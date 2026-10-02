import PageHeading from './PageHeading';
import ProductListing from './ProductListing';
import products from '../data/products';

export default function Home() {
  return (
    <div className="home-cointainer">
          <PageHeading>
             <p className="page-heading-paragraph">
            Add a touch of creativity to your space with our range of full and unique stickers. Perfect for any occasion!
            </p>
          </PageHeading>
          <ProductListing products={products} />
    </div>
  );
}