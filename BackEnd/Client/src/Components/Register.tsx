import React, { useState } from "react";
import { REGISTER_TO_SYSTEM } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


function Register() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registerCompany, { error }] = useMutation(REGISTER_TO_SYSTEM,{
        onCompleted({ registerCompany }) {
            sessionStorage.setItem("Authorization", "Bearer " + registerCompany.accessToken);
            sessionStorage.setItem("title", jwt_decode(registerCompany.accessToken).title);
            sessionStorage.setItem("companyId", jwt_decode(registerCompany.accessToken).companyId);
            // @ts-ignore
            window.location = '/products';
        }
    });

    const registerToSystem = () => {
        registerCompany({
            variables: {
                title: title,
                address: address,
                email: email,
                password: password,
            },
        },).then(r => console.log(r));

        if (error) {
            console.log(error);
        }

    }
    const navigate = useNavigate();

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-400">
            <div className="bg-black flex flex-col w-80 rounded-lg px-8 py-10">
                <div className="text-white mt-10">
                    <h1 className="font-poppins-bold text-4xl">Welcome Ricoma!</h1>
                    <p className="font-poppins-light pt-5">Let's Register!</p>
                </div>
                <form onSubmit={onSubmit}
                    className="flex flex-col space-y-8 mt-10">
                <input
                    type="text"
                    placeholder="Title"
                    className="shadow-lg rounded-md focus:ring-0 p-2 border-0"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Address"
                    className="shadow-lg rounded-md focus:ring-0 p-2 border-0"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="shadow-lg rounded-md focus:ring-0 p-2 border-0"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="shadow-lg rounded-md onFocus:ring-0 p-2 border-0 mt-3"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button
                    onClick={registerToSystem}
                    className="font-poppins-regular text-white bg-checkBoxColor1 border border-[1px] border-headerBorderColor p-2 rounded-md shadow-lg mt-3">
                    Register
                </button>
                <p onClick={() => navigate(`/`)}
                    className="font-poppins-light text-white text-[12px] cursor-pointer">Already Registered? Login.</p>
                </form>
            </div>
        </div>
    );
}

export default Register;