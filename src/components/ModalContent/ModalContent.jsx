import Modal from 'react-modal';
import { toast } from 'sonner';

import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';
import { useCustomStyles } from '../../hooks/useCustomStyles';
import { useCart } from '../../hooks/useCart';

import CartIcon from '../CartIcon';
import CloseIcon from '../CloseIcon';

import './ModalContent.scss';

const ModalContent = () => {
    const { customStyles } = useCustomStyles();
    const { addToCart } = useCart();

    const {
        data: { products },
        isActiveModal,
        closeModal,
        productSelected,
    } = useContext(ProductsContext);
    const { productCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        // Esta comprobacion si esta bien !!, creo que es lo mas seguro!!
        if (!productCart.some((prod) => prod.id === product.id)) {
            addToCart(product);
            toast.success('Product added to cart');
            return;
        }

        // addToCart(product);
        // toast.success("Product added to cart");
    };

    return (
        <Modal
            isOpen={isActiveModal}
            onRequestClose={closeModal}
            style={customStyles}
            appElement={portal}
        >
            <div className='modal'>
                <figure className='modal__figure'>
                    <img
                        src={productSelected.image}
                        alt=''
                        className='modal__image'
                    />
                </figure>
                <section className='modal__section'>
                    <div className='modal__details'>
                        <h2 className='modal__title'>
                            {productSelected.title}
                        </h2>
                        <p className='modal__description'>
                            {productSelected.description}
                        </p>
                        <p className='modal__category'>
                            {productSelected.category}
                        </p>
                        <p className='modal__price'>
                            Price: $ {productSelected.price}
                        </p>
                    </div>

                    <button
                        className={`modal__add-to-cart`}
                        onClick={() => handleAddToCart(productSelected)}
                        disabled={productCart.some(
                            (prod) => prod.id === productSelected.id
                        )}
                    >
                        <CartIcon
                            fillColorIcon='#fff'
                            widthIcon={35}
                            heightIcon={35}
                        />
                        <span className='modal__add-to-cart-label'>
                            {productCart.some(
                                (prod) => prod.id === productSelected.id
                            )
                                ? 'The product is added '
                                : 'Add to Cart'}
                        </span>
                    </button>
                </section>
                <button className='modal__close' onClick={closeModal}>
                    <CloseIcon />
                </button>
            </div>
        </Modal>
    );
};

export default ModalContent;
