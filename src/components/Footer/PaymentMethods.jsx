import { paymentMethods } from "../../utils/paymentMethods";

const PaymentMethods = () => {
    return (
        <div className='footer__payment payment'>
            <h3 className='payment__title'>Payment Methods</h3>
            <ul className='payment__list-methods'>
                {paymentMethods.map((method) => (
                    <li className='payment__method' key={method.id}>
                        <img
                            className='payment__image'
                            src={method.image}
                            alt='method-logo'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentMethods;
