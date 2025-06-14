import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discription-nav-box">Description</div>
            <div className="discription-nav-box new">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, unde 
                quibusdam nostrum corrupti eius enim similique reprehenderit eaque, culpa, 
                accusantium ipsa incidunt! Placeat reprehenderit autem nemo ea mollitia eius eaque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta, voluptatum ad 
                deleniti veniam aliquam libero quod reiciendis, tempora, assumenda modi veritatis repellendus 
                cupiditate incidunt. Labore earum maiores repudiandae asperiores!
            </p>
        </div>
    </div>
  )
}

export default DiscriptionBox