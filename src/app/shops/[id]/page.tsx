"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the route
  const router = useRouter(); // Use the router hook to handle navigation
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [cart, setCart] = useState<Product[]>([]); // Cart state

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Product ID is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Product not found (status: ${response.status})`);
        }
        const data: Product = await response.json();
        setProduct({ ...data, quantity: 1 }); // Initialize product with quantity 1
        setLoading(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Error fetching product"
        );
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    if (product) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevCart, product];
        }
      });
    }
  };

  const handleIncreaseQuantity = () => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product?.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = () => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product?.id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    router.push("/cart"); // Redirect to the checkout page
  };

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-500">
        {Array(fullStars).fill(<i className="fas fa-star"></i>)}
        {halfStar && <i className="fas fa-star-half-alt"></i>}
        {Array(emptyStars).fill(<i className="far fa-star"></i>)}
      </div>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

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
                  {totalCartItems}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </header>

      <div className="font-[sans-serif] p-4">
        <div className="lg:max-w-screen-lg max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:sticky top-0 lg:col-span-3">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-2 shrink-0">
                  <div className="bg-gray-200 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover object-top w-full h-full cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-44 max-h-64 object-top object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-2">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {product.title}
                </h3>
                <div className="flex items-center space-x-1 mt-2">
                  {renderRatingStars(product.rating.rate)}
                  <p className="text-sm text-gray-800 !ml-3">
                    {product.rating.rate} ({product.rating.count})
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-gray-800 text-2xl font-bold">
                    ${product.price}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">Tax included</p>
                </div>
              </div>

              {/* Size selection and Add to Cart functionality */}
              <div className="mt-8">
                {/* Size buttons */}
                <div className="mt-6">
                  <div className="flex gap-4">
                    <div className="flex border border-gray-300 w-48">
                      <div className="flex-1 px-4 py-3 border-r border-gray-300 text-center text-sm cursor-pointer">
                        <button
                          type="button"
                          onClick={handleDecreaseQuantity}
                          className="border px-4 py-2"
                        >
                          −
                        </button>
                      </div>
                      <div className="flex-1 px-4 py-4 border-r border-gray-300 text-center text-sm">
                        <span>
                          {cart.find((item) => item.id === product.id)
                            ?.quantity || 1}
                        </span>
                      </div>
                      <div className="flex-1 px-4 py-3 text-center text-sm cursor-pointer">
                        <button
                          type="button"
                          onClick={handleIncreaseQuantity}
                          className="border px-4 py-2"
                          disabled={
                            !cart.find((item) => item.id === product.id)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="px-4 py-3 w-full border border-gray-800 bg-gray-800 hover:bg-transparent hover:text-gray-800 text-white text-sm font-semibold transition-all duration-300"
                    >
                      Add to cart
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="mt-4 px-4 py-3 w-full border border-purple-600 bg-purple-600 hover:bg-gray-800 text-white text-sm font-semibold transition-all duration-300"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
