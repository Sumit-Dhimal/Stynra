import {Link} from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 py-24 mt-6 mb-4">
        <img 
          className="h-72 mx-auto"
          src={product.image} 
          alt={product.name} 
        />
      </div>
      <Link 
        to={`/${product.name}`}
        className="font-medium text-xl hover:text-red-500 duration-400 ease-in-out"
      >
        {product.name}
      </Link>
      <p className="text-red-500 text-lg">Rs. {product.price}</p>
    </div>
  )
}

export default ProductCard