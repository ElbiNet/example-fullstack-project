import { gql } from "@apollo/client";

export const LOGIN_TO_SYSTEM = gql`
    mutation loginCompany (
        $email: String!
        $password: String!
    ){
        loginCompany (
            email: $email
            password: $password
        ){
            accessToken
        }
    }
`;

export const REGISTER_TO_SYSTEM = gql`
    mutation registerCompany (
        $title: String!
        $address: String!
        $email: String!
        $password: String!
    ){
        registerCompany (
            title: $title
            address: $address
            email: $email
            password: $password
        ){
            accessToken
        }
    }
`;

export const ADD_PRODUCT_MUTATION = gql`
    mutation addProduct (
        $companyId: Float!
        $name: String!
        $description: String!
        $color: String!
        $size: String!
        $price: Float!
    ){
        addProduct (
            companyId: $companyId
            name: $name
            description: $description
            color: $color
            size: $size
            price: $price
        ){
            id
            name
            description
            color
            size
            price
        }
    }
`;

export const REMOVE_PRODUCT_MUTATION = gql`
    mutation removeProduct (
        $id: Float!
        $companyId: Float!
    ){
        removeProduct (
            id: $id
            companyId: $companyId
        ){
            id
        }
    }
`;