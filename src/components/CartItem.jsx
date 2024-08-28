import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    } else {
      dispatch(remove(item.id));
    }
  };

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4">
      <div className="flex items-center">
        {/* Increase image size */}
        <img src={item.image} alt={item.name} className="w-24 h-24 mr-4" /> 
        <div>
        <h4 className="text-lg font-bold">
  {item.title.length > 45 ? `${item.title.substring(0, 45)}...` : item.title}
</h4>
          {/* Style price */}
          <p className="text-gray-700 font-semibold">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        {/* Style decrement button */}
        <button
          onClick={handleDecrease}
          className="px-3 py-2 text-lg font-bold text-white bg-red-500 rounded hover:bg-red-600"
        >
          -
        </button>
        {/* Fixed width for quantity display */}
        <span className="w-12 text-center ">{item.quantity}</span>
        {/* Style increment button */}
        <button
          onClick={handleIncrease}
          className="px-3 py-2 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
