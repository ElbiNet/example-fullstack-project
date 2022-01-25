import React, { useState } from "react";
import { LOGIN_TO_SYSTEM } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginCompany, { error }] = useMutation(LOGIN_TO_SYSTEM,{
        onCompleted({ loginCompany }) {
            sessionStorage.setItem("Authorization", "Bearer " + loginCompany.accessToken);
            sessionStorage.setItem("title", jwt_decode(loginCompany.accessToken).title);
            sessionStorage.setItem("companyId", jwt_decode(loginCompany.accessToken).companyId);
            // @ts-ignore
            window.location = '/products';
        }
    });

    const loginToSystem = () => {
        loginCompany({
            variables: {
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
                    <p className="font-poppins-light pt-5">Let's login!</p>
                </div>
                <form onSubmit={onSubmit}
                    className="flex flex-col space-y-8 mt-10">
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
                    onClick={loginToSystem}
                    className="font-poppins-extraBold text-white bg-checkBoxColor1 border border-[1px] border-headerBorderColor p-3 rounded-md shadow-lg mt-3">
                    Login
                </button>
                <p onClick={() => navigate(`/register`)}
                   className="font-poppins-light text-white text-[12px] cursor-pointer">Not Registered? Register.</p>
                </form>
            </div>
        </div>
    );
}

export default Login;