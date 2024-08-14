import emailjs from '@emailjs/browser';
import { useState } from "react";


function Contato() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();


        if (email === '' || message === '') {
            alert("Preencha todos os campos para enviar");
            return;
        }


        const templatesParams = {
            email: email,
            message: message
        }

        emailjs.send("service_ysuky38", "template_d63oh8g", templatesParams, "-1GlYw1cpdIZOCFq1")
            .then((response) => {
                console.log("email enviado", response.status, response.text)
                setEmail('')
                setMessage('')

            }, (err) => {
                console.log("erro: ", err)
            })
    }


    return (
            <div className="container dark:bg-black">

                <div className="ml-96 mt-20">
                    <div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6 form" action="#" onSubmit={sendEmail}>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Nos mande mande uma mensagem</h5>

                            <div>
                                <label type="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="seuemail@email.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div>
                                <label type="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">sua mensagem</label>
                                <textarea type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => setMessage(e.target.value)} value={message} />
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
   

    );
}

export default Contato;