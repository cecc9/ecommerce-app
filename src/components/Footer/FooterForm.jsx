import EmailIcon from "../EmailIcon";

const FooterForm = () => {
    return (
        <form className='footer__form' onClick={(e) => e.preventDefault()}>
            <label className='footer__form-label' htmlFor=''>
                <EmailIcon fillColorIcon={"#9aa2aa"} />
                <input
                    className='footer__form-input'
                    type='text'
                    placeholder='Enter your mail'
                />
            </label>
            <button className='footer__form-button'>Subscribe</button>
        </form>
    );
};

export default FooterForm;
