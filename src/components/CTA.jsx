import { Link } from "react-router-dom";
import React from "react";

const CTA = () =>{
    return(
        <section className="">

            <Link to = '/contact'
            className="btn"
              
            >
               Contact
            </Link>
        </section>
    )
}

export default CTA;