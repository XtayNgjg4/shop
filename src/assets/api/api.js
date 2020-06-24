import { get, post } from './interceptor';

const maxItem = 6;
//获取商品列表
export const getShopList = params => get('goods_list', params);

//获取商品信息
export const getShopMsg = params => get('goods', params);

//加入购物车
export const addCart = params => post('add_cart', params)

//获取购物车列表
export const getCartList = params => get("cart", params)

//删除购物车商品
export const removeGoods=params => post('remove_goods',params)

//获取购物车状态
export const setCartStatus=params => post('set_cart_status',params)

//获取商品分类
export const getCats = params => get("cats", params)

//获取收藏列表
export const getFavList=params => get('fav',params)

//收藏商品
export const addfav=params => post('edit_fav',params)




