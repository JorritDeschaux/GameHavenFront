import React from "react";
import Layout from "../Components/Layout/Layout";

function About()
{

    return(
        <>
            <Layout/>
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                    <div className="flex flex-col-2 items-center justify-center">
                        <div>
                            <h1 className="text-center text-4xl m-8"><strong>About</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About