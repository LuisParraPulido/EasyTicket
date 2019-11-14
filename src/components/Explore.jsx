import React from 'react';
import '../assets/styles/components/Explore.scss'

const Explore = () => (
    <section className="explore">
    <h2>Explora nuevos destinos</h2>
    <div className="explore__container">
        <div className="explore__item">
        <img className="explore__item--img" src="https://cdn.pixabay.com/photo/2015/12/08/00/30/golden-gate-bridge-1081782_960_720.jpg" alt="" />
        <div className="explore__item--details"> 
            <h3>San Francisco, Estados Unidos</h3>
            <h3>precio</h3>
            <h3>fecha</h3>    
        </div>
        </div>
        <div className="explore__item">
        <img className="explore__item--img" src="https://cdn.pixabay.com/photo/2015/05/28/22/54/argentina-patagonia-788744_960_720.jpg" alt="" />
        <div className="explore__item--details">          
            <h3>Bariloche, Argentina</h3>
            <h3>precio</h3>
            <h3>fecha</h3>          
        </div>
        </div>
        <div className="explore__item">
        <img className="explore__item--img" src="https://cdn.pixabay.com/photo/2019/03/08/19/52/galata-4043037_960_720.jpg" alt=""/>
        <div className="explore__item--details">
            <h3>Estambul, Turquia</h3>
            <h3>precio</h3>
            <h3>fecha</h3>
        </div>
        </div>
        <div className="explore__item">
        <img className="explore__item--img" src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg" alt=""/>
        <div className="explore__item--details">
            <h3>París, Francia</h3>
            <h3>precio</h3>
            <h3>fecha</h3>
        </div>
        </div>
    </div>
    </section>  
);

export default Explore;