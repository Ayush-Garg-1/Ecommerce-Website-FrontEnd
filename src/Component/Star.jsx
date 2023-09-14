import React from 'react'

const Star = ({stars}) => {
    // generate number
    const ratingStar = Array.from({length:5},(ele,index)=>{
        let fractionNumber = index + 0.5;
        
        return <span key={index}>
        {
            stars >= index+1 ? <i className="fa-solid fa-star star"></i> : stars >= fractionNumber ? <i className="fa-solid fa-star-half-stroke star"></i> : <i className="fa-regular fa-star"></i> 
        }
        </span>
})
return ratingStar;
}

export default Star