import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    setTotalAmount(calculatedTotal.toFixed(2)); // Round off to two decimal places
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-amber-400">Your Cart</div>
                <div className="font-semibold text-5xl text-amber-300 -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}
              </p>
              <button className="mb-20 bg-amber-300 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-amber-300 font-bold hover:text-amber-300 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="uppercase bg-amber-300 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-amber-300 font-semibold hover:text-amber-300 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
