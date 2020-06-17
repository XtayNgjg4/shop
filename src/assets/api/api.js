import { get, post } from './interceptor';

const maxItem = 6;
//获取商品列表
export const getShopList = params => get('goods_list',params);

//获取商品信息
export const getShopMsg = params =>get('goods',params);

//加入购物车
export const addCart =params =>post('add_cart',params)

//获取购物车列表
export const getCartList =params =>get("cart",params)