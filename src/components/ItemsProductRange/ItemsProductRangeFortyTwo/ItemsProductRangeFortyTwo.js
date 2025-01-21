import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div , DivBackground , DivBtn } from '../../styled-components/Div/div';
import {ButtonItem} from "../../styled-components/Button/Button";
import "./ItemsProductRangeFortyTwo.css"

const ItemsProductRangeFortyTwo = () => {
  const {id = 42} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-39">
                <DivBackground Background="#898f4b">
                    <div className="img-item-thirtynine-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="700px" marginbot="-150px">
                        <div className="div-main-factor-ipr39">
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
                            <DivBtn>
                                <ButtonItem>
                                    Select Capsule pack size
                                </ButtonItem>
                            </DivBtn>
                        </div>
                    </Div>
                </DivBackground>
                <div className="title-item-won">

                </div>
        </div>
    </div>
  )
}

export default ItemsProductRangeFortyTwo