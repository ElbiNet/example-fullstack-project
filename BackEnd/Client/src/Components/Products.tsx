import React, { useEffect, useState } from "react";
import {useQuery, gql, useMutation} from "@apollo/client";
import {LOAD_PRODUCTS} from "../GraphQL/Queries";
import { useNavigate } from "react-router-dom";
import {ADD_PRODUCT_MUTATION, REMOVE_PRODUCT_MUTATION} from "../GraphQL/Mutations";

function Products() {
    const { error, loading, data } = useQuery(LOAD_PRODUCTS,{
            context: {
                headers: {
                    "Authorization": sessionStorage.getItem("Authorization")
                }
            }});
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (data) {
            setProducts(data.getProducts);
        }
    }, [data]);

    const navigate = useNavigate();

    const logOut = () =>{
        sessionStorage.removeItem("Authorization");
        sessionStorage.removeItem("title");
        sessionStorage.removeItem("companyId");
        navigate('/')
    };

    const [removeProduct] = useMutation(REMOVE_PRODUCT_MUTATION,{
        onCompleted({ removeProduct }) {
            // @ts-ignore
            window.location = '/products';
        }
    });

    const  removeProductFromSystem = (productId: number) => {

        removeProduct({
            variables: {
                companyId: Number(sessionStorage.getItem("companyId")),
                id: Number(productId)
            },
            context: {
                headers: {
                    "Authorization": sessionStorage.getItem("Authorization")
                }
            }
        },).then(r => console.log(r));

        if (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
                <div className="container-fluid w-full flex flex-wrap items-center justify-start px-6">
                    <div className="flex space-x-2 justify-center pr-5">
                        <button type="button"
                                onClick={() => logOut()}
                                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                            Log Out
                        </button>
                        <button type="button"
                                onClick={() => navigate(`/products/add`)}
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Add Product
                        </button>
                    </div>
                    <div className="container-fluid">
                        <a className="text-xl text-black" href="#">Ricoma | Products</a>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        id
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Description
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Color
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Size
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Price
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {products.map((value, index, array) => {
                                        return <tr key={value.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {value.id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {value.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {value.description}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {value.color}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {value.size}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                ${value.price}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2 justify-center">
                                                    <button type="button"
                                                            onClick={() => navigate(`/products/${value.id}`)}
                                                            className="font-poppins-regular text-white bg-blue-600 border border-[1px] border-headerBorderColor p-3 rounded-md shadow-lg mt-3">
                                                            Edit
                                                    </button>
                                                    <button
                                                        onClick={() => removeProductFromSystem(value.id)}
                                                        className="font-poppins-regular text-white bg-checkBoxColor1 border border-[1px] border-headerBorderColor p-3 rounded-md shadow-lg mt-3">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;