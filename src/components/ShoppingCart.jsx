import { ShoppingCartIcon, TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <>
      <div className='block relative'>
        <button className='cursor-pointer' onClick={() => setShowCart(!showCart)}>
          <ShoppingCartIcon  width={24}/>
        </button>
        <div className={`absolute bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg ${showCart ? 'block' : 'hidden'} top-14 -right-3 z-[1000] transition-all`}>
          <div className="absolute w-0 h-0 -top-2 right-4 border-l-8 border-r-8 border-l-transparent border-r-transparent border-b-8 border-b-white"></div>
          <ShoppingCartItem imgUrl='placeholder.jpg' price={1200} count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
          <ShoppingCartItem imgUrl='placeholder.jpg' price={1200} count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
          <ShoppingCartItem imgUrl='placeholder.jpg' price={1200} count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
          <button className='cursor-pointer w-[100px] justify-self-end bg-green-600 shadow-md text-white font-bold py-2 rounded-md'>Checkout</button>
        </div>
      </div>
    </>
  );
}

const ShoppingCartItem = ({ imgUrl, price, count, incrementCount, decrementCount }) => {
  return (
    <div className="cart-item mb-4">
      <div className="flex flex-row w-[300px] items-center justify-between">
        <div className="flex flex-row gap-4 items-center w-full">
          <div className='w-[80px] h-[80px] rounded overflow-hidden object-cover'>
            <img src={imgUrl} alt="placeholder image"/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className="text-base font-bold text-stone-800">This is a long product name</div>
              <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-sm text-stone-500">${price * count}</div>
                  <div className='flex flex-row gap-2 w-15 border rounded py-0 px-2 bg-white'>
                    {count > 1 ? (
                      <button onClick={decrementCount} className="cursor-pointer">
                        <MinusIcon className='w-4 text-red-600 text-lg' />
                      </button>
                    ) : (
                      <button className="cursor-pointer">
                        <TrashIcon className='w-4 text-red-600 text-lg cursor-pointer'/>
                      </button>
                    )}
                    <div className="text-lg text-red-600">{count}</div>
                    <button onClick={incrementCount} className="cursor-pointer">
                      <PlusIcon className='w-4 text-red-600'/>
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;