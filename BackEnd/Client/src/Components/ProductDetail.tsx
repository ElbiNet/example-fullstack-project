import React, { useState } from 'react';
import { LOAD_PRODUCT_DETAIL } from "../GraphQL/Queries";
import {useParams} from "react-router";
import { useMutation } from "@apollo/client";
import login from "./Login";
import {useNavigate} from "react-router-dom";

function ProductDetail() {

    /*
    const { productId } = useParams();

    const { error, loading, data } = useQuery(LOAD_PRODUCT_DETAIL,{
            variables: { id : Number(productId) },
            onCompleted: data => {
                console.log('on completed');
                setproductDetail(data.getProductDetail);

            },
            context: {
                headers: {
                    "Authorization": sessionStorage.getItem("Authorization")
                }
            }},
        );
    const [productDetail, setproductDetail] = useState([]);
    useEffect(() => {
        if (data) {
        }
    }, [data]);

     */

    const [ name, setName] = useState("");
    const [ description, setDescription] = useState("");
    const [ price, setPrice] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-start px-6">
                    <div className="flex space-x-2 justify-center pr-5">
                        <button type="button"
                                onClick={() => navigate(`/products`)}
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Go Back
                        </button>
                    </div>
                    <div className="container-fluid">
                        <a className="text-xl text-black" href="#">Ricoma | Product Detail</a>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden p-2">
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-1"
                                           htmlFor="name">
                                        Product Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="py-2 px-3 border border-gray-300 rounded-md shadow-sm mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1"
                                           htmlFor="description">
                                        Description
                                    </label>
                                    <input id="description"
                                           type="text"
                                           name="description"
                                           value={description}
                                           onChange={(e) => setDescription(e.target.value)}
                                           className="py-2 px-3 border border-gray-300 rounded-md shadow-sm mt-1 block w-full"/>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1"
                                           htmlFor="price">
                                        Price
                                    </label>
                                    <input id="price"
                                           type="number"
                                           name="price"
                                           value={price}
                                           onChange={(e) => setPrice(e.target.value)}
                                           className="py-2 px-3 border border-gray-300 rounded-md shadow-sm mt-1 block w-full"/>
                                </div>
                                <div className="mt-6">
                                    <button
                                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                                        Update Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;