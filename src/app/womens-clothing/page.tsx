"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define the Product type
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  selectedColor: string;
}

export default function BestSeller() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("#23A6F0"); // Default color
  const [cart, setCart] = useState<CartItem[]>([]); // Cart state

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women&apos;s clothing"
      );
      const data: Product[] = await response.json(); // Explicitly define the data type
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to add product to cart
  const handleAddToCart = (product: Product) => {
    // Add the product with selected color to the cart
    setCart([...cart, { product, selectedColor }]);
  };

  return (
    <>
      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
        <p className="text-center">Women&apos;s Clothing</p>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          BESTSELLER PRODUCTS
        </h2>
        {/* <p className="text-center text-[#737373] -mt-10">
          Problems trying to resolve the conflict between
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all"
            >
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-top"
                  width={500}
                  height={500}
                  style={{ filter: `hue-rotate(${selectedColor})` }} // Apply color change dynamically
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {product.title}
                </h3>
                <h3 className="text-lg font-bold text-[#737373] text-center">
                  {product.category}
                </h3>
                <div className="mt-4 flex items-center flex-wrap gap-2">
                  <h4 className="text-lg font-bold text-gray-800 ml-10">
                    <span className="text-[#BDBDBD]">${product.price}</span>
                  </h4>
            
                </div>

                {/* Add to Cart Button */}
                <div className="mt-4 text-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Display */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center">Your Cart</h3>
          {cart.length > 0 ? (
            <ul className="mt-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between p-2 border-b">
                  <span>
                    {item.product.title} - {item.selectedColor}
                  </span>
                  <span>${item.product.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>
      </div>
    </>
  );
}
