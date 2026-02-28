import axios from 'axios';
import contactImg from '../assets/contact.png'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const Contact = ({ darkMode }) => {
    const { t } = useTranslation();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("")

    const sendMessage = (e) => {
        e.preventDefault();

        const token = '8378204671:AAFO4y7xohQA5TfKGgb2iu0EanLJU-Of57k'
        const chat_id = 1319144600

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `First Name: ${fname}\n Last Name: ${lname}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}\n`

        axios.post(url, {
            chat_id: chat_id,
            text: text
        }).then(() => {
            alert("Application sent successfully ✅")
            setFname("")
            setLname("")
            setEmail("")
            setPhone("")
            setMessage("")
        }).catch(() => {
            console.log("Invalid information provided ❌");
            
        })
    } 
    return (
        <section
        id="contact"
        style={{
            backgroundColor: darkMode ? '#111827' : '#f9fafb'
        }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12"
                data-aos='fade-up'>
                    <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold
                    mb-2 sm:mb-3"
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                       {t("contact.title1")} <span
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            {t("contact.title2")}
                        </span>
                    </h2>
                    <p
                    className="text-base sm:text-lg md:text-xl"
                    style={{
                        color: darkMode ? '#d1d5db' : '#6b7280'
                    }}>
                        {t("contact.text")}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6
                sm:gap-8 md:gap-10 items-center">
                    <div className="flex justify-center order-2 lg:order-1"
                    data-aos='fade-right'>
                        <img src={contactImg} alt="Contact"
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-full
                        h-full object-contain'/>
                    </div>
                    <form
                    style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                    shadow-lg order-1 lg:order-2'
                    data-aos='fade-left'
                    onSubmit={sendMessage}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3
                        sm:gap-4 mb-3 sm:mb-4'>
                            {/* First Name */}
                            <input
                             type="text" 
                             placeholder={t("contact.input1")}
                             style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                             }}
                             onChange={(e) => setFname(e.target.value)} value={fname}
                             className='w-full px-3 sm:px-4 py-2 sm:py-3
                             rounded-lg text-sm sm:text-base
                             focus:border-orange-500 focus:ring-2
                             focus:ring-orange-500/20 transition-all'
                             required/>
                             {/* Last Name */}
                             <input
                             type="text" 
                             placeholder={t("contact.input2")}
                             style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                             }}
                             onChange={(e) => setLname(e.target.value)} value={lname}
                             className='w-full px-3 sm:px-4 py-2 sm:py-3
                             rounded-lg text-sm sm:text-base
                             focus:border-orange-500 focus:ring-2
                             focus:ring-orange-500/20 transition-all'
                             required/>
                        </div>
                        {/* Email Address */}
                        <input
                             type="email" 
                             placeholder={t("contact.input3")}
                             style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                             }}
                             onChange={(e) => setEmail(e.target.value)} value={email}
                             className='w-full px-3 sm:px-4 py-2 sm:py-3
                             rounded-lg text-sm sm:text-base
                             focus:border-orange-500 focus:ring-2
                             focus:ring-orange-500/20 transition-all
                             mb-3 sm:mb-4'
                             required/>
                             {/* Phone Number */}
                             <input
                             type="tel" 
                             placeholder={t("contact.input4")}
                             style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                             }}
                             onChange={(e) => setPhone(e.target.value)} value={phone}
                             className='w-full px-3 sm:px-4 py-2 sm:py-3
                             rounded-lg text-sm sm:text-base
                             focus:border-orange-500 focus:ring-2
                             focus:ring-orange-500/20 transition-all
                             mb-3 sm:mb-4'
                             required/>
                             {/* Messege */}
                             <textarea
                             rows='4'
                             placeholder={t("contact.input5")}
                             style={{
                                backgroundColor: darkMode ? '#374151' : '#faede3',
                                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                color: darkMode ? 'white' : '#1f2937'
                             }}
                             onChange={(e) => setMessage(e.target.value)} value={message}
                             className='w-full px-3 sm:px-4 py-2 sm:py-3
                             rounded-lg text-sm sm:text-base
                             focus:border-orange-500 focus:ring-2
                             focus:ring-orange-500/20 transition-all
                             mb-4 sm:mb-6 resize-none'
                             required/>
                             {/* button */}
                             <button
                             type='submit'
                             style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)'
                             }}
                             className='w-full py-2 sm:py-3 text-white font-semibold
                             rounded-lg text-sm sm:text-base hover:shadow-lg
                             hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                                {t("contact.btn")}
                             </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact