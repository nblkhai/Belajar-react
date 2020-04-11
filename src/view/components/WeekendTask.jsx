import React from 'react'
import './bootstrap.css'
import './weekendtask.css'

const WeekendTask = (props) => {
    const {productData} = props
    const {author, title, review, desc, price, discount, image , stock} = productData
    let disc = (price-(price*(discount/100)))
    let hasilDisc = disc.toFixed(2)
    return (
        <div className="row ml-2" >
            <div className="col-lg-5 p-5">
                <img src={image} alt="" />
            </div>

            <div className="col-lg-6 p-4">
                <div >
                    <p className="author text-muted">{author}</p>
                </div>

                <div>
                    <h2 className="title">{title}</h2>
                </div>

                <div>
                    <p className="review text-muted">{review} / 5 Review</p>
                </div>

                <div>
                    <p className="desc">{desc}</p>
                </div>
                
                {
                        discount > 0 ? (
                            <div> ${hasilDisc} <s className="text-muted">${price}</s> </div>
                        ) : <div>${price}</div>
                    }

{
    
                        stock > 0 ? (
                           <input className='btn btn-outline-dark' type="button" value='BUY NOW' />
                        ) : <input className='btn btn-outline-dark' type="button" value='BUY NOW' disabled/>
                    }
                
            </div>
        </div>
                )
}

export default WeekendTask