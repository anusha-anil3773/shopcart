import { PRODUCT_LIST } from "../constant"


export const productList = (data) => {
    return {
      type: PRODUCT_LIST,
      data,
    };
  };
 
