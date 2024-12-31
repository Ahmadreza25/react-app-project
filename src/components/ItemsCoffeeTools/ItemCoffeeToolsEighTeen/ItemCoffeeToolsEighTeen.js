import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import "./ItemCoffeeToolsEighTeen.css"



const ItemCoffeeToolsEighTeen = () => {
  const {id = 18} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict18">
                <div className="div__main_ict_item18">
                    <div className="img_item_icteighteen">
                        <img src={item.img}/>
                    </div>
                    <Div height="600px" marginbot="-150px">
                        <div className="main_factor-item-eighteen">
                            <div className="div-capsules">
                                <h2>
                                    Gifts
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <p>{item.price}</p>
                            </div>
                            <div className="div-profile">
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
                                    Join add accont
                                </button>
                            </div>
                        </div>
                    </Div>
                </div>
                <div className="title-item_ictone">
                    <div>
                      <h2>
                      About the CHEMEX® Filter Coffee Maker
                      </h2>
                      <p>
                      The filter fans best friend. Serves six.
                      </p>
                      <p>
                      Made of non-porous Borosilicate glass which will not absorb odours or chemical residues.
                      </p>
                      <p>
                      Check out the Chemex Brew Guide to brush up on the best brewing technics.
                      </p>
                    </div>
                 </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsEighTeen