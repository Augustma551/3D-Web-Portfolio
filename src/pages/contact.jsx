import React, {Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';
import Loader from '../components/loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import VendingMachine from '../models/vendingmachine';


const Contact = () =>{
    const [form, setForm] = useState({
        name : "",
        email : "",
        message : ""

    })

    const [isLoading, setIsLoading] = useState(false)
    const [ currentAnimation ] =  useState(true)

    const { alert, showAlert, hideAlert} = useAlert()
    const handleChange = (e)=>{
        setForm({ ...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
    

  
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
            from_name : form.name,
            to_name : "Cherellenio",
            from_email: form.email,
            to_email: "erell.rizky@gmail.com",
            message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

        ).then(() =>{
            setIsLoading(false);
            showAlert({ show: true, text:' Message sent sucessfully', type : 'success'})
            setTimeout(() =>{
                hideAlert();
                setForm({name:"", email: "", message:""})
            }, [3000])
        }).catch((error) => {
            setIsLoading(false);

            console.log(error);
            showAlert({show:true, text: 'I didnt receive your Message', type:'Danger'})
        })

    };
    
    return (
        <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
            {alert.show && <Alert{...alert}/>}
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className='head-text'>Get In Touch</h1>
                <form
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit = {handleSubmit}
                >
                <label className='text-black-500 font-semibold'>
                        Name
                    <input 
                        type="text"
                        name="name"
                        className='input'
                        placeholder='Kevin'
                        required
                        value={form.name}
                        onChange={handleChange}
                       
                    ></input>
                </label>
                <label className='text-black-500 font-semibold'>
                    Email
                    <input
                        type="email"
                        name="email"
                        className='input'
                        placeholder='kevin@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                       
                    >
                    
                    </input>
                </label>
                <label className='text-black-500 font-semibold'>
                    Your Message
                    <textarea 
                        name='message'
                        rows={4}
                        className='textarea'
                        placeholder='whats in your mind'
                        required
                        value={form.message}
                        onChange={handleChange}
                        
                    />

                    
                </label>
                    <button
                        type='submit'
                        className='btn'
                        disabled={isLoading}
                        
                    >
                            {isLoading ? 'sending...' : 'send message'}

                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas 
                    camera={{
                        position: [1, 0, 5],
                        fov: 95,
                        near: 0.1,
                        far: 1000

                    }}
                >
                    <directionalLight intensity= {2.5} position={[0,0,1]}/>
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <VendingMachine 
                             currentAnimation={currentAnimation}
                             position={[1.5, -5, 0]}
                             rotation={[3, 3.65, 0]}
                             scale={[0.5, 0.5, 0.5]}
                        >
                        </VendingMachine>

                    </Suspense>
                    
                </Canvas>
            </div>
            
        </section>
    )
    }
export default Contact;