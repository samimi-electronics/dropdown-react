import ShoppingCart from './ShoppingCart';


const Navbar = () => {
  return (
    <nav className="h-12 backdrop-blur-sm bg-white/80 shadow-md sticky top-0 left-0 mb-4 flex flex-row items-center justify-between">
      <div className="container flex flex-row items-center justify-between">
        <div className='navbar-start'>
          <h2 className='text-xl font-bold'>Navbar...</h2>
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;