import img1 from "../../../images/img-cart/img1.png"
import img2 from "../../../images/img-cart/img2.png"
import img3 from "../../../images/img-cart/img3.png"
import img4 from "../../../images/img-cart/img4.png"
import img5 from "../../../images/img-cart/img5.png"
import "./Slider.css"



const product = [
    {
        id:1 ,
        image:img1 ,
        prich:"$9.50",
        title:"Campos Superior Capsules",
        explanation:"Caramelly & Rich Blend. Sweet like Butterscotch. Flavours like Red Fruit & Apricot.",
    },
    {
        id:2 ,
        image:img2 ,
        prich:"$9.50",
        title:"King St Blend Capsules",
        explanation:"Creamy & Balanced. Sweet like Shortbread. Flavours like Malted Chocolate & Plum",
    },
    {
        id:3 ,
        image:img3 ,
        prich:"$9.50",
        title:"Chapel St Blend Capsules",
        explanation:"Bright & Crisp Blend. Sweet like Red Apple. Flavours like Jasmine.",
    },
    {
        id:4 ,
        image:img4 ,
        prich:"$9.50",
        title:"Decaf Espresso Blend Capsules",
        explanation:"Syrupy & Bold. Sweet like Malt Chocolate. Flavours like Real Coffee.",
    },
    {
        id:5 ,
        image:img5 ,
        prich:"$9.50",
        title:"Campos Capsules Subscription",
        explanation:"Our aluminium capsules are designed to perfectly capture the flavour profile & fresh aroma of our coffees.",
    },
]



const Slider = () => {
    return(
        <div>
            <div className="div-main">
                {
                  product.map((item) => (
                    <div>
                        <div className="div-cart-main">
                              <div className="div-img">
                                  <div>
                                      <img src={item.image} className="img-cart"/>
                                  </div>
                              </div>
                              <div className="div-main-title">
                                  <div>
                                      <p className="prich">
                                        FROM{item.prich}
                                      </p>
                                  </div>
                                  <div>
                                    <h2 className="title-1">
                                      {item.title}
                                    </h2>
                                  </div>
                                  <div>
                                    <h5 className="title-2">
                                      {item.explanation}
                                    </h5>
                                  </div>
                              </div>
                        </div>
                      </div>  
                  ))
                }
            </div>
        </div>
    )
}

export default Slider

