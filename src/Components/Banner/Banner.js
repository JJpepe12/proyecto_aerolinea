import React from 'react'
import bannerImg from '../../assets/desktop/image-interactive.jpg'
import { StylesBanner } from "../Banner/StyleBanner";

const Banner = () => {

    return (
        <>
        <StylesBanner className="banner">
            <figure>
            <img src={bannerImg} alt="guy with VR lens" />
            </figure>
            

            <article className="banner-text">
            <h2>The leader in interactive VR</h2>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for some of the best companies around the globe.
                Our award-winning creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>
            </article>
        </StylesBanner>
        </>
    )
    }

export default Banner