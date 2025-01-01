"use client"; // Marking the component as a Client Component
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// Defining the Product interface with correct types
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  // Get cart from localStorage or default to an empty array
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // Function to remove a product from the cart
  const handleRemoveProduct = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // Handle quantity change (increase or decrease)
  const handleQuantityChange = (
    id: number,
    action: "increase" | "decrease"
  ) => {
    setCart((prevCart) => {
      // Map over the previous cart to modify the quantity of the product
      return prevCart.map((product) => {
        if (product.id === id) {
          if (action === "increase") {
            // Increase quantity by 1
            return { ...product, quantity: product.quantity + 1 };
          } else if (action === "decrease" && product.quantity > 1) {
            // Decrease quantity by 1 (don't go below 1)
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      });
    });
  };

  // Calculate total price
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  // Handle checkout
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    router.push("/checkout");
    // Implement checkout logic here (e.g., redirect to a payment page)
  };

  // If the cart is empty, display a message
  if (cart.length === 0) {
    return (
      <>
        {" "}
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
        <div className="font-sans">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
              <div className="flex gap-2 border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800 flex-1">
                  Shopping Cart
                </h2>
                <h3 className="text-base text-gray-800">{cart.length} Items</h3>
              </div>

              <table className="mt-6 w-full border-collapse divide-y">
                <thead className="whitespace-nowrap text-left">
                  <tr>
                    <th className="text-base text-gray-500 p-4">Description</th>
                    <th className="text-base text-gray-500 p-4">Quantity</th>
                    <th className="text-base text-gray-500 p-4">Price</th>
                    <th className="text-base text-gray-500 p-4">Remove</th>
                  </tr>
                </thead>

                <tbody className="whitespace-nowrap divide-y"></tbody>
              </table>
            </div>

            <div className="p-6 bg-white">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">${total}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="bg-yellow-400 text-white text-lg font-semibold py-2 rounded-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        ;
      </>
    );
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

      <div className="font-sans">
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
            <div className="flex gap-2 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800 flex-1">
                Shopping Cart
              </h2>
              <h3 className="text-base text-gray-800">{cart.length} Items</h3>
            </div>

            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-gray-500 p-4">Description</th>
                  <th className="text-base text-gray-500 p-4">Quantity</th>
                  <th className="text-base text-gray-500 p-4">Price</th>
                  <th className="text-base text-gray-500 p-4">Remove</th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y">
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td className="p-4">
                      <div className="flex items-center gap-4 w-max">
                        <div className="w-24 h-24 shrink-0">
                          <img
                            src={product.image}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-800">
                            {product.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                        <button
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, "decrease")
                          }
                          className="border-none outline-none text-lg font-bold"
                        >
                          -
                        </button>
                        <span className="text-gray-800 text-sm font-semibold px-3">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleQuantityChange(product.id, "increase")
                          }
                          className="border-none outline-none text-lg font-bold"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <h4 className="text-base font-bold text-gray-800">
                        ${product.price}
                      </h4>
                    </td>
                    <td className="p-4">
                      {/* Remove button */}
                      <button
                        onClick={() => handleRemoveProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-white">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-semibold">${total}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-yellow-400 text-white text-lg font-semibold py-2 rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
