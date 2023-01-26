import './index.css'
import Logo from '../../assets/Logo.png'
const Footer = () => {
    return (
        <footer>
        <div className='footer_details'>
        <img src={Logo} alt="website logo image" />
        <p>
        زهران لخدمات استقدام العمالة ترحب بطلباتكم وأستفساراتكم اضغط الان علي
        اطلب خدمة لطلب خدمة او الاستفسار عن خدمة

        </p>
        </div>
        <div className='footer_contact'>
        <a href="#">تواصل معنا</a>
        </div>
        </footer>
    )
}

export default Footer