const CartReducer = (state,action) => {
    switch(action.type){
        case "SET_CART_DATA":{
            let {id, quantities , singleProduct} = action.payload;
            let existingProduct = state.cart?.find((product)=>{
                return product.id === id;
            })
            if(existingProduct){
                let updatedProduct = state.cart?.map((product)=>{
                    if( product.id === id){
                        let newQuantity = product.quantities + quantities;
                        if(newQuantity >= product.max){
                            newQuantity=product.max;
                        }
                        return{
                            ...product,
                            quantities:newQuantity,
                        }
                    }else{
                        return product;
                    }
                });
                return{
                    ...state,
                    cart:updatedProduct
                }
            }else{
            let cartproduct = {
                id,
                name:singleProduct.name,
                quantities,
                image:singleProduct.image,
                price:singleProduct.price,
                max:2*singleProduct.id
            }
            return{
                ...state,
                cart:[
                    ...state.cart,
                    cartproduct
                ],
            }
            }
        }
        case "REMOVE_CART_PRODUCT":{
            let updatedProducts = state.cart.filter((product)=>{
                return product.id !== action.payload
            })
            return{
                ...state,
                cart:updatedProducts
            }
        }
        case "CLEAR_ALL_CART_PRODUCT":{
            return{
                ...state,
                cart:[]
            }
        }
        case "DECREMENT_QUANTITY":{
            let updatedData = state.cart.filter((product)=>{
                if(product.id === action.payload){
                    if(product.quantities <= 1){
                        return product;
                    }else{
                    product.quantities -=1
                    return product;
                    }
                }
                return product
            })
            return{
                ...state,
                cart:updatedData
            }
        }
        case "INCREMENT_QUANTITY":{
            let updatedData = state.cart.filter((product)=>{
                if(product.id === action.payload){
                    if(product.quantities >= product.max){
                        product.quantities =product.max;
                        return product;
                    }else{
                    product.quantities +=1;
                    return product;
                    }
                }
                return product
            })
            return{
                ...state,
                cart:updatedData
            }
        }
        case "SET_CART_ITEMS":{
            let updatedTotalCartItem=0;
            state.cart?.map((ele)=> updatedTotalCartItem =  updatedTotalCartItem + ele.quantities );
            return{
                ...state,
                total_cart_product:updatedTotalCartItem
            }
        }
        case "SET_TOTAL_PRICE":{
            let updatedTotalPrice = 0;
            state.cart?.map((ele)=> updatedTotalPrice = updatedTotalPrice + (ele.price*ele.quantities));
            return{
                ...state,
                total_price:updatedTotalPrice
            }
        }
        default:
            return state
    }
}

export default CartReducer