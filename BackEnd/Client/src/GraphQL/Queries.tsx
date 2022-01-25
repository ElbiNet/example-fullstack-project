import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
    query{
        getProducts {
            id
            name
            description
            color
            size
            price
        }
    }
`;

export const LOAD_PRODUCT_DETAIL = gql`
    query getProductDetail($id: Float!) {
    getProductDetail(id: $id) {
        id
        name
        description
        color
        size
        price
    }
  }
`;