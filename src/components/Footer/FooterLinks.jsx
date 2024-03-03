import { listItems } from "../../utils/listItems";

const FooterLinks = ({ title }) => {
    return (
        <div className='footer__menu-item'>
            <h3 className='footer__menu-title'>{title.toUpperCase()}</h3>
            <ul className='footer__list'>
                {listItems[title].map((item) => (
                    <li className='footer__item' key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
