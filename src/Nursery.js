import React from "react";
import './Nursery.css';

const nurseryList = [
    {
        id:0,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729330198/362237370ea139219155cf9fca2448d3_u5cdxc.png",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
        id: 1,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729330253/8375cef653c6b9ae388a7f2dda4ba454_tfjmlu.png",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
        id: 2,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729330311/935a62fb31df9354ded9299559307ae6_l6h05w.png",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",

    },
    {
        id: 3,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729330354/7eca96d5008198d2181b991de6f19034_fyhthj.png",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
        id: 4,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729330448/ed50532940537d9d39d2626bb7a95167_hl1tqn.png",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },
    {
        id: 5,
        imageUrl: "https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729328283/download_e9sqep.jpg",
        imageAltText: "Nursery",
        content: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
    },

]

const Nursery = () => {
    return(
        <div>
            <p className="content-lurm">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. 
                Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
            <h1 className="heading">Nursery</h1>
            <div className="nursery-container">
                {nurseryList.map((nurImg) => (
                    <div key={nurImg.id}  className="nursery-item">
                        <img src = {nurImg.imageUrl} alt={nurImg.imageAltText} className="img"/>
                        <p className="content">{nurImg.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Nursery;