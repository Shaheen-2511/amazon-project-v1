import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />
                <div className="home--row">
                    <Product 
                    id="01"
                    title="See U in C by Ali Karim Sayed (Author)"
                    price={4450}
                    image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                   <Product 
                    id="02"
                    title="Apple Watch Series 3 (GPS, 42mm) - Silver Aluminium"
                    price={23900}
                    image="https://m.media-amazon.com/images/I/71tNLeJY8LL._SL1500_.jpg"
                    />
                    <Product 
                    id="03"
                    title="Apple iPhone 13 Mini (256GB) - Blue"
                    price={79900}
                    image="https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg"
                    />
                </div>

                <div className="home--row">
                <Product 
                    id="03"
                    title="2020 Apple MacBook Pro"
                    price={160990}
                    image="https://m.media-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg"
                    />
                    
                    <Product 
                    id="03"
                    title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED"
                    price={38999}
                    image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg"
                    />
                    
                </div>

                <div className="home--row">                    
                <Product 
                    id="03"
                    title="Apple AirPods Pro"
                    price={21490}
                    image="https://m.media-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
                    />

                    
                </div>
            </div>
        </div>
    )
}

export default Home
