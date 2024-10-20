import React from 'react';
import './Product.css'

const productList = [
    {
        id: 0,
        imgUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729361504/57a26487b27ba64aecadd2f4d7e83e50_x7vuqt.jpg",
        alt: "Monsterra",
        buttonText: "View Product",
        headingText: "Monsterra",
        description: 'Indoor Plant, Low maintenance',
        ratingImg: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729361789/2d5f9291095d1210262f4a0d5f4c77e7_ezhnvn.png",
        ratingText: "4.9",
        

    }
]
const Product = () => {
    return(
        <div>
            <div className='p-con'>
            <p>300 products</p>
            <button className='button'>
                SORT BY <span className='arrow'>&#x25BC;</span>
            </button>
            </div>
        </div>
    )
}

export default Product;