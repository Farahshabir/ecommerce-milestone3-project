"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json(); // Explicitly define the data type
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to handle color change
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Function to add product to cart
  const handleAddToCart = (product: Product) => {
    // Add the product with selected color to the cart
    setCart([...cart, { product, selectedColor }]);
  };

  return (
    <>
      <header className="shadow-lg font-[sans-serif] tracking-wide relative z-50">
        <div id="collapseMenu" className="max-lg:hidden lg:!block">
          <ul className="lg:flex lg:items-center px-10 py-3 bg-[#333] min-h-[46px] gap-4">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 text-yellow-300 text-[15px] font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shops"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="hover:text-yellow-300 text-white text-[15px] font-medium"
              >
                Pages
              </Link>
            </li>
            <li className="max-lg:py-2 px-4 cursor-pointer">
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {/* {totalCartItems} */}
                </span>
              </span>
            </li>
            {/* <li>
              <span className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" viewBox="0 0 512 512">
                  <path d="..." />
                </svg>
                <span className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {totalCartItems}
                </span>
              </span>
            </li> */}
          </ul>
        </div>
      </header>
      <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
        <p className="text-center">Featured Products</p>
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
              <div className="w-[300px] h-[300px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-top"
                  width={300}
                  height={300}
                  style={{ filter: `hue-rotate(${selectedColor})` }} // Apply color change dynamically
                />
              </div>

              <div className="p-4 w-[300px] h-[300px]">
                <h3 className="text-sm font-bold text-gray-800 text-center">
                  {product.title}
                </h3>
                <h3 className="text-lg font-bold text-[#737373] text-center">
                  {product.category}
                </h3>
                <div className="mt-4 flex items-center flex-wrap gap-2 text-center">
                  <h4 className="text-lg font-bold text-gray-800 ml-10 text-center">
                    <span className="text-[#BDBDBD] text-center">
                      ${product.price}
                    </span>
                  </h4>
                </div>

                {/* Add to Cart Button */}
                <Link href={`/shops/${product.id}`} passHref>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Display */}
        {/* <div className="mt-10">
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
        </div> */}
      </div>
    </>
  );
}
