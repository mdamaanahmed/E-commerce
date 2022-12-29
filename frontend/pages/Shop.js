import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/shop.css'
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ProductItemCard from '../components/ProductItemCard'
import shop_bg from '../../assets/images/shop_bg.jpg'
import { VscSettings } from 'react-icons/vsc';
import { AppContext } from '../components/ContextProvider';

const Shop = () => {
  const [showCategories, setShowCategories] = useState(false);
  const { productItems } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setProducts(productItems);
  }, [productItems]);

  const filterCat = (value)=> {
    if(!value){
      setProducts(productItems);
    }else{
      const currentCat = productItems.filter(({category})=> category === value);
      setProducts(currentCat);
    }
  };

  let toggleCategories = () => {
    setShowCategories(!showCategories)
  };

  let showBuyPage = (id) => {
    navigate(`/buy/${id}`)
  };

  return (
    <>
      {/* search section */}
      <section className="search">
        <img src={shop_bg} alt="no shop bg" />
        <div className="content">
          <input type="text" placeholder='Search' />
          <div className="category">
            <div className='category_heading' onClick={() => toggleCategories()}>
              <p>categories</p>
              <MdOutlineKeyboardArrowDown className={showCategories ? 'icon rotate' : 'icon'} />
            </div>
            <div className={showCategories ? 'category_items show' : 'category_items'}>
              <p className="item" onClick={(e)=>filterCat(e.target.innerHTML)}>Shirts</p>
              <p className="item" onClick={(e)=>filterCat(e.target.innerHTML)}>T-Shirts</p>
              <p className="item" onClick={(e)=>filterCat(e.target.innerHTML)}>Watches</p>
              <p className="item" onClick={(e)=>filterCat(e.target.innerHTML)}>Shoes</p>
            </div>
          </div>
          <div className="search_icon">
            <FiSearch className='icon' />
          </div>
        </div>
      </section>
      {/* search section end */}

      {/* product section start */}
      <section className="shop_products">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-0 col-lg-2 p-0">
              <div className="sort_products">
                <h6>Sort by <VscSettings className='sort_icon' /></h6>
                <div>
                  <h6>Categories</h6>
                  <p onClick={()=>filterCat()}>All</p>
                  <p onClick={(e)=>filterCat(e.target.innerHTML)}>Shirts</p>
                  <p onClick={(e)=>filterCat(e.target.innerHTML)}>T-Shirts</p>
                  <p onClick={(e)=>filterCat(e.target.innerHTML)}>Watches</p>
                  <p onClick={(e)=>filterCat(e.target.innerHTML)}>Shoes</p>
                </div>
                <div>
                  <h6>Date</h6>
                  <p>newest</p>
                  <p>oldest</p>
                  <p>this week</p>
                  <p>this month</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-10 p-0">
              <div className="current_category">
                <button className='button_outline' onClick={()=>filterCat()}>All</button>
                <button className='button_outline' onClick={(e)=>filterCat(e.target.innerHTML)}>Shirts</button>
                <button className='button_outline' onClick={(e)=>filterCat(e.target.innerHTML)}>T-Shirts</button>
                <button className='button_outline' onClick={(e)=>filterCat(e.target.innerHTML)}>Watches</button>
                <button className='button_outline' onClick={(e)=>filterCat(e.target.innerHTML)}>Shoes</button>
              </div>
              <div className="products">
                <div className="row m-0">
                  {
                    products?.map((item, i) => {
                      return <ProductItemCard key={i} showbuypage={() => showBuyPage(item._id)} img={item.image} title={item.name} company={item.brand} rating={item.stars} price={item.price} discount={item.discount} review={item.reviews} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product section end */}
    </>
  )
}

export default Shop