import React from 'react'

const WomenCollections = (props) => {
    const{title,image1,image2,image3,image4,image5,image6}=props.ladies;
  return (
    <div className='womenCollectionSection'>
        <h2>{title}</h2>
        <div className="womenBanner">
            <img src='assets/BannerImages/LadiesBanner.gif' alt='footer'/>
        </div>
        <div className="womenImages">
            <img src={image1} alt={title}/>
            <img src={image2} alt={title}/>
            <img src={image3} alt={title}/>
            <img src={image4} alt={title}/>
            <img src={image5} alt={title}/>
            <img src={image6} alt={title}/>
        
        </div>
      
    </div>
  )
}

export default WomenCollections;
