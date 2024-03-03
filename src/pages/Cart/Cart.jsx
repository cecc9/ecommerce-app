import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { useCart } from "../../hooks/useCart";

import AddIcon from "../../components/AddIcon";
import SubtractIcon from "../../components/SubtractIcon";
import DeleteIcon from "../../components/DeleteIcon";

import "./Cart.scss";

const Cart = () => {
    const { productCart, removeToCart, addToCart, subtractToCart } = useCart();

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/products");
    };

    return (
        <MainLayout>
            <div className='cart'>
                <h2 className='cart__title'>
                    {!productCart.length ? "The cart is empty" : "Cart"}
                </h2>
                {productCart.length <= 0 ? (
                    <div className='cart__shopping'>
                        <button
                            className='cart__shopping-button'
                            onClick={navigateTo}
                        >
                            go shopping
                        </button>
                    </div>
                ) : (
                    <ul className='cart__list'>
                        {productCart.map((product) => (
                            <li key={product.id} className='cart__item'>
                                <div className='cart__item-inner'>
                                    <picture className='cart__item-picture'>
                                        <source
                                            srcSet={product.image}
                                            type='image/jpeg'
                                        />
                                        <img
                                            className='cart__item-image'
                                            src={product.image}
                                            alt='product-image'
                                        />
                                    </picture>
                                    <div className='cart__item-details'>
                                        <h3 className='cart__item-title'>
                                            {product.title}
                                        </h3>
                                        <p className='cart__item-price'>
                                            $ {product.price}
                                        </p>
                                    </div>
                                </div>
                                <div className='cart__item-quantity'>
                                    <div className='cart__quantity-controls'>
                                        <button
                                            className='cart__quantity-btn cart__quantity-btn--add'
                                            onClick={() => addToCart(product)}
                                        >
                                            <AddIcon />
                                        </button>
                                        <p className='cart__quantity-value'>
                                            {product.quantity}
                                        </p>
                                        <button
                                            className='cart__quantity-btn cart__quantity-btn--subtract'
                                            onClick={() =>
                                                subtractToCart(product)
                                            }
                                        >
                                            <SubtractIcon />
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className='cart__remove-btn'
                                            onClick={() =>
                                                removeToCart(product.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className='cart__item-subtotal'>
                                    <span> $ {product.subTotal}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </MainLayout>
    );
};

export default Cart;
