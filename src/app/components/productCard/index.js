import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity
  } = product;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex space-x-1 text-xs"> {/* Use text-xs to reduce the star size */}
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStarEmpty} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <Link href={`/products/${id}`}>
      <div className="block bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <img src={thumbnail} alt={title} className="w-full h-32 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1">{title}</h2>
          <p className="text-gray-500 text-xs mb-2">{category}</p>
          <p className="text-gray-700 text-xs mb-2 line-clamp-2">{description}</p>
          <div className="flex items-baseline mb-2">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            <span className="text-xs text-red-500 ml-2">{discountPercentage}% off</span>
          </div>
          <div className="mb-2">{renderStars(rating)}</div>
          <p className="text-green-600 text-sm font-semibold mb-1">{availabilityStatus}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
