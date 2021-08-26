import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing=()=>{
    const products=useSelector((state)=> state.allProducts.products);
    const dispatch=useDispatch();

    const fetchProducts=async()=>{
        const resposne=await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(resposne.data));
        //console.log(response);
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    //console.log("products:",products);

    return(
        <div style={{marginTop:"30px"}} className="ui grid container">
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;