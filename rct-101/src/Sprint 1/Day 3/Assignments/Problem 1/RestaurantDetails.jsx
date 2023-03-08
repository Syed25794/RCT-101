import React, { useState } from "react";
import RestaurantData from "./Restaurnat.json";
import { v4 as uuidv4 } from "uuid";
import styles from "./RestaurantDetails.module.css";

const initialData = {
  id: "",
  name: "",
  imgUrl: "",
  menu: "Pounded Yam,Tea,Coffee",
  costForOne: "",
  minPrice: "",
  orderTime: "",
  reating: "",
  votes: 8820,
  reviews: 6750,
  payment_methods: {
    card: false,
    cash: true,
    upi: true,
  },
};

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <div key={restaurant.id} className={styles.box}>
        <div className={styles.left_div}>
          <img
            className={styles.image}
            src={restaurant.imgUrl}
            alt={restaurant.name}
          />
        </div>
        <div className={styles.middle_div}>
          <div>
            <span className={styles.hotel_name}>{restaurant.name}</span>
          </div>
          <div>
            <span className={styles.menu}>{restaurant.menu}</span>
          </div>
          <div>
            <span className={styles.menu}>
              Cost ₹{restaurant.costForOne} for one
            </span>
          </div>
          <div className={styles.min_price}>
            Min ₹{restaurant.minPrice}
            <li className={styles.min_price}>
              <span>Up to {restaurant.orderTime} min</span>
            </li>
          </div>
          <span className={styles.min_price}>Accepts online payment only</span>
        </div>
        <div className={styles.right_div}>
          <div className={styles.review_box}>
            <span>{restaurant.reating}</span>
          </div>
          <div className={styles.votes}>
            <span>{restaurant.votes} votes</span>
          </div>
          <div className={styles.reviews}>
            <span>{restaurant.reviews} reviews</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const RestaurantDetails = () => {
  const [addData, setAddData] = useState(initialData);
  const [data, setData] = useState(RestaurantData);
  const [sort, setSort] = useState(0);
  const [payment,setPayment]=useState("");
  const [value,setValue]=useState("");
  const handleData = (e) => {
    const { name, value } = e.target;
    setAddData({
      ...addData,
      [name]: value,
      id: uuidv4(),
    });
  };
  const updataData = () => {
    setData([...data, addData]);
    setAddData(initialData);
  };
  // const handleSort=(value)=>{
  //   setData(RestaurantData);
  //   let newData=data.filter((elem)=>{
  //       return elem.reating > value && elem.reating <= value+1;
  //   });
  //   console.log(newData);
  //   setData(newData);
  // }
  return (
    <div className={styles.main_div}>
      <div>
        <h1>Add New Restaurants</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Hotel Name"
            name="name"
            value={addData.name}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            placeholder="Food Image"
            name="imgUrl"
            value={addData.imgUrl}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            placeholder="Price"
            name="costForOne"
            value={addData.costForOne}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            placeholder="Min Price"
            name="minPrice"
            value={addData.minPrice}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            placeholder="Delivery Time"
            name="orderTime"
            value={addData.orderTime}
            onChange={handleData}
          />
          <br />
          <input
            type="text"
            placeholder="Rating"
            name="reating"
            value={addData.reating}
            onChange={handleData}
          />
          <br />
        </form>
      </div>
      <button onClick={updataData}>Add Restaurant</button>
      <br />
      <br />
      <div>
        <button className={styles.btn}  onClick={() => {setSort(4);setPayment("")}}>4 Star</button>
        <button className={styles.btn} onClick={() => {setSort(3);setPayment("")}}>3 Star</button>
        <button className={styles.btn} onClick={() => {setSort(2);setPayment("")}}>2 Star</button>
        <button className={styles.btn} onClick={() => {setSort(1);setPayment("")}}>1 Star</button>
        <button className={styles.btn} onClick={()=>{setPayment("Cash");setSort(5)}}>Cash Only Restaurants</button>
        <button className={styles.btn} onClick={()=>{setPayment("Card");setSort(5)}}>Card Accepted Restaurants</button>
        <button className={styles.btn} onClick={()=>{setPayment("All");setSort(5)}}>All Restaurants</button>
        <button className={styles.btn} onClick={()=>{setPayment(""); setValue("hightolow")}}>High to low Cost</button>
        <button className={styles.btn} onClick={()=>{setPayment(""); setValue("lowtohigh")}}>Low to high Cost</button>
      </div>
      <div className={styles.main_restaurant_div}>
        {sort === 0
          ? data.map((restaurant) => {
              return <Restaurant key={restaurant.id} restaurant={restaurant} />;
            })
          : sort ===1 ? data.filter((restaurant)=>{
            return restaurant.reating < 2 && restaurant.reating >= 1; 
          }).sort((a,b)=>{
            return value === "hightolow" ? b.costForOne-a.costForOne : value === 'lowtohigh' ? a.costForOne-b.costForOne : null ; 
          }).map((restaurant)=>{
            console.log(restaurant.reating);
            return <Restaurant  key={restaurant.id} restaurant={restaurant} />
          }): sort ===2 ? data.filter((restaurant)=>{
            return restaurant.reating < 3 && restaurant.reating >= 2; 
          }).sort((a,b)=>{
            return value === "hightolow" ? b.costForOne-a.costForOne : value === 'lowtohigh' ? a.costForOne-b.costForOne : null ; 
          }).map((restaurant)=>{
            return <Restaurant  key={restaurant.id} restaurant={restaurant} />
          }): sort ===3 ? data.filter((restaurant)=>{
            return restaurant.reating < 4 && restaurant.reating >= 3; 
          }).sort((a,b)=>{
            return value === "hightolow" ? b.costForOne-a.costForOne : value === 'lowtohigh' ? a.costForOne-b.costForOne : null ; 
          }).map((restaurant)=>{
            return <Restaurant  key={restaurant.id} restaurant={restaurant} />
          }): sort ===4 ? data.filter((restaurant)=>{
            return restaurant.reating < 5 && restaurant.reating >= 4; 
          }).sort((a,b)=>{
            return value === "hightolow" ? b.costForOne-a.costForOne : value === 'lowtohigh' ? a.costForOne-b.costForOne : null ; 
          }).map((restaurant)=>{
            return <Restaurant  key={restaurant.id} restaurant={restaurant} />
          }): null }


          {payment === "All"
            ? data.map((restaurant) => {
                return <Restaurant key={restaurant.id} restaurant={restaurant} />;
              })
            : payment === "Cash" ? data.filter((restaurant)=>{
              console.log(restaurant.payment_methods.cash);
              return restaurant.payment_methods["cash"] ; 
            }).map((restaurant)=>{
              console.log(restaurant.payment_methods.cash);
              return <Restaurant key={restaurant.id} restaurant={restaurant} />
            }): payment === "Card" ? data.filter((restaurant)=>{
              return restaurant.payment_methods["card"] ; 
            }).map((restaurant)=>{
              return <Restaurant key={restaurant.id} restaurant={restaurant} />
            }): null }
      </div>
    </div>
  );
};
