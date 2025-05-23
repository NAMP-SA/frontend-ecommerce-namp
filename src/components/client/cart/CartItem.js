import { useCartContext } from "../../../contexts/CartContext";
import { TiPlus, TiMinus, TiDelete } from "react-icons/ti";


const CartItem = ({ id, name, img, quantity, price }) => {
  const subtotal = quantity * price;
  
  const { addItem, removeItem } = useCartContext();

  const handleNewQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      addItem({ id, name, price, img }, newQuantity - quantity);
    } else {
      removeItem(id);
    }
  };

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="flex bg-gray-200/70 items-center justify-between p-4 border-b border-gray-200 rounded-lg">
      <div className="flex items-center">
        <img src={`http://localhost:8080${img}`} alt={name} className="w-16 h-16 rounded-lg object-cover shadow-lg mr-4" />
        <div className="">
          <h1 className="poppins-semibold text-gray-800">{name}</h1>
          <div className="flex items-center "> 
            <span className="mr-2 poppins-regular text-sm text-gray-800 ">Cantidad:</span>
            <button
              onClick={() => handleNewQuantity(quantity - 1)}
              className="rounded-full border p-1 text-gray-800 hover:text-blue-900 hover:border-gray-400 text-sm hover:ring-1 focus:ring-gray-300 hover:ring-gray-200"
              
            >
              <TiMinus/>
            </button>
            <p className="text-lg poppins-semibold mx-2"> {quantity}</p>
            <button
              onClick={() => handleNewQuantity(quantity + 1)}
              className="rounded-full text-sm p-1 text-white bg-blue-800 hover:bg-blue-700 hover:ring-1 hover:ring-blue-500 focus:ring-blue-500"
              
            >
              <TiPlus/>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <p className="text-xl poppins-bold text-blue-950">${subtotal}</p>
        <button
          onClick={handleRemoveItem}
          className="hover:text-blue-900 text-blue-950/40 rounded-full ml-4 text-3xl"
        >
          <TiDelete/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
