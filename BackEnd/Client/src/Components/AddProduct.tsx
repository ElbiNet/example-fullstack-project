import React, { useState } from 'react';
import {ADD_PRODUCT_MUTATION} from "../GraphQL/Mutations";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";

function AddProduct() {

    const [ companyId, setCompanyId] = useState("");
    const [ name, setName] = useState("");
    const [ description, setDescription] = useState("");
    const [ color, setColor] = useState("");
    const [ size, setSize] = useState("");
    const [ price, setPrice] = useState("");

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const navigate = useNavigate();

    const [addProduct, { error }] = useMutation(ADD_PRODUCT_MUTATION,{
        onCompleted({ addProduct }) {
            // @ts-ignore
            window.location = '/products';
        }
    });

    const  addProductToSystem = () => {

        addProduct({
            variables: {
                companyId: Number(sessionStorage.getItem("companyId")),
                name: name,
                description: description,
                color: color,
                size: size,
                price: Number(price),
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
                                onClick={() => navigate(`/products`)}
                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Go Back
                        </button>
                    </div>
                    <div className="container-fluid">
                        <a className="text-xl text-black" href="#">Ricoma | Create Product</a>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden p-2">
                            <form onSubmit={onSubmit}>
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
                                           htmlFor="color">
                                        Color
                                    </label>
                                    <input id="color"
                                           type="text"
                                           name="color"
                                           value={color}
                                           onChange={(e) => setColor(e.target.value)}
                                           className="py-2 px-3 border border-gray-300 rounded-md shadow-sm mt-1 block w-full"/>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1"
                                           htmlFor="size">
                                        Size
                                    </label>
                                    <input id="size"
                                           type="text"
                                           name="size"
                                           value={size}
                                           onChange={(e) => setSize(e.target.value)}
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
                                        onClick={addProductToSystem}
                                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                                        Create Product
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

export default AddProduct;