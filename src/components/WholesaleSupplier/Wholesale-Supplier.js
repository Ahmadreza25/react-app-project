import React from "react";
import img1 from "../../images/wholesale-images/img-1.jpg"
import img2 from "../../images/wholesale-images/img-2.jpg"
import img3 from "../../images/wholesale-images/img-3.jpg"
import image1 from "../../images/wholesale-images/img1.jpg"
import image2 from "../../images/wholesale-images/img2.jpg"
import image3 from "../../images/wholesale-images/img3.jpg"
import "./Wholesale-Supplier.css"





const WholesaleSupplier = () => {
    return(
        <div>
            <div className="page-container">
                <div className="div-banner-promotional">
                    <div className="banner-promotional">
                        <h1>
                            PARTNERING WITH CAMPOS
                        </h1>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item-description">
                        <div className="item-image1">
                            <img src={img1}/>
                        </div>
                        <div className="item-info">
                            <p>WHY CAMPOS?</p>
                            <h1>Advice and support for your business</h1>
                            <h5>
                                We’re invested in helping your business grow. We know what it takes to run a succe
                                ssful café and we want to be on the front line, sleeves rolled up and taking on 
                                each day alongside you. Campos remains one of the best-known specialty coffee roasters 
                                in our industry, known for our service, operational excellence and consistency. We pride ourselves on s
                                haring best-practices from years of hands-on training perfecting the café.
                            </h5>
                        </div>
                    </div>
                    <div className="item-description">
                        <div className="item-info">
                            <p>SERVICE AND QUALITY</p>
                            <h1>We have an obsession with exceptional service and quality</h1>
                            <h5>
                                Ours is a culture of continuous improvement and our passion for quality extends
                                across all aspects of our business, whether it’s our coffee, service, equipment,
                                training or marketing support, we are always striving to improve. Providing support
                                to our customers is one of our top priorities. We care about you and your business 
                                and we’re willing to go above and beyond to see you succeed. 
                            </h5> 
                        </div>
                        <div className="item-image2">
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className="item-description">
                        <div className="item-image3">
                            <img src={img3}/>
                        </div>
                        <div className="item-info">
                            <p>TRAINING AND EQUIPMENT</p>
                            <h1>Access quality equipment and barista training</h1>
                            <h5>
                                We’ve curated all the best equipment to help you achieve the perfect cup of coffee
                                each time. The Campos Coffee brand is built on a foundation of consistency in the
                                cup, and Barista education and training is of the upmost importance to us; we are
                                committed to ensuring the Campos Coffee experience no matter where you drink us 
                                is consistent for your customers – it’s what makes them seek out the brand and keep
                                coming back for more. To this end, we do not only offer training to you and your baristas, we insist on it.
                            </h5> 
                        </div>
                    </div>
                </div>
                <div className="div-form-container">
                    <p className="p1">
                    Partnership
                    </p>
                    <div className="form-container">
                        <div className="div-form-input">
                            <form className="form-control">
                                <div className="input-column">
                                    <div className="input-field">
                                        <p>Name*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Phone*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Business type*</p>
                                        <input type="text" placeholder="Please select"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Business address*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Postcode*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Facebook</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Website</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Is this an existing business?*</p>
                                        <input type="text" placeholder="Please select"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Years of industry experience*</p>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <div className="input-field">
                                        <p>Last Name*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Email*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Business name*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>State*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>ABN*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Instagram</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Role</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>Trading days and hours?*</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="input-field">
                                        <p>What is your weekly coffee usage (KG)?*</p>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </form>
                            <div className="div-add-main">
                                <div>
                                    <p>
                                    Additional information about your cafe or business*
                                    </p>
                                    <textarea></textarea>
                                </div>
                                <div className="div-register-interest-btn">
                                    <button className="register-interest-btn">
                                        REGISTER INTEREST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case-studies-section">
                    <div className="div-section-title">
                        <div className="separator-line"></div>
                        <p>Case Studies</p>
                        <h1>What’s it like working with Campos?</h1>
                    </div>
                    <div className="div-studies-list">
                        <div className="case-item">
                            <img src={image1}/>
                            <div className="line-break"></div>
                            <p>Coco Cantina, QLD</p>
                        </div>
                        <div className="case-item">
                            <img src={image2}/>
                            <div className="line-break"></div>
                            <p>Krave Kafe, QLD</p>
                        </div>
                        <div className="case-item">
                            <img src={image3}/>
                            <div className="line-break"></div>
                            <p>Little Byrd, VIC</p>  
                        </div>
                    </div>
                </div>
                <div className="divView-more-btn">
                    <button className="view-more-btn">
                        VIEW MORE
                    </button>
                </div>
            </div>
        </div>
    )
}



export default WholesaleSupplier