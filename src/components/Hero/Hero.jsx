import React from 'react'
import { Button } from 'primereact/button';
import heroimage from '../../assets/img/2023-Ferrari-296-GT3-001-2160.jpg'
const Hero = () => {
    return (
        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-7xl font-bold mb-1 ml-1">Performance,</span>
                    <span className="block text-7xl font-bold mb-1 ml-3">Elegance,</span>
                    <span className="block text-7xl font-bold mb-1 ml-5">Puissance.</span>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={heroimage} alt="hero-1" className="md:ml-auto block md:h-full" style={{ width: "800px", clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    )
}

export default Hero