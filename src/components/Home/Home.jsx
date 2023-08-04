import { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const {categories, setCategories} = useContext (Context);
  useEffect (() => {
    getCategories();
  }, [])

  console.log(process.env)
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res); 
    });
  }

  return (
    <div >
      <Banner />
      <div className="main-content">
        <div className="layout">
            <Category categories={categories} />
            <Products headingText="Popular Products"/>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
