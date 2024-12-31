import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeSixty.css"



const ItemsProductRangeSixty = () => {
    const {id = 60} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr57">
                <div className="div-main-item-ipr57">
                    <div className="img-item-fiftyseven-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-300px">
                        <div className="div-main-factor-ipr57">
                            <div className="div-capsules">
                                <h2>
                                Capsules
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <b>FROM</b>
                                <p>{item.price}</p>
                            </div>
                            <div className="div-profile">
                                <b>
                                    PROFILE
                                </b>
                                <p>
                                    {item.explanations}
                                </p>
                            </div>
                            <div className="box-number">
                                <div className="numbers">
                                    <b>+</b>
                                    <p>1</p>
                                    <b>-</b>
                                </div>
                            </div>
                            <div className="btn-factor">
                                <button>
                                    Select Capsule pack size
                                </button>
                            </div>
                        </div>
                    </Div>
                </div>
                <div className="title-item-won">
                  <div>
                      <h2>DESCRIPTION</h2>
                      <p>
                        Introducing the exquisite collaboration between Campos and In The Roundhouse – the Campos x In The Round House Coasters, a testament to craftsmanship and elegance. Elevate your table setting with this set of four coasters, each meticulously crafted with care and precision.

                        `Measuring 10cm wide, these coasters are perfectly sized to accommodate your favorite mugs, glasses, or teacups, ensuring your surfaces stay protected in style. Made from high-quality new bone china, they boast a pristine finish and a delicate feel, adding a touch of sophistication to any space.

                        Sold as a set of four, these coasters are designed to complement each other seamlessly, making them ideal for entertaining guests or enjoying quiet moments at home. Their timeless design and superior quality make them a versatile addition to any decor, from modern to traditional.

                        Whether you're hosting a soiree or simply enjoying a cup of coffee on a lazy afternoon, the Campos x In The Round House Coasters elevate every moment. Don't miss your chance to add a touch of refinement to your home – order your set today and experience the perfect blend of style and functionality.`
                      </p>
                    </div>
                    <div>
                      <h2>DELIVERY & SHIPPING INFORMATION</h2>
                      <p>
                        Dispatch Times

                        To ensure your coffee arrives as fresh as possible, we roast our coffee to order. Please note dispatch times may vary, typically within 3-4 business days after order placement for normal periods, and 3-6 days after order placement for peak sale periods (this excludes public holidays and weekends).

                        How much is delivery?

                        Delivery charges are automatically calculated based on your delivery address at checkout.

                        We're pleased to offer free standard delivery on orders valued at $50 or more.

                        For full details, please see our Delivery Policy.
                      </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemsProductRangeSixty