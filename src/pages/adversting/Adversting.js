import React from "react";
import "./Adversting.css";

const Adversting = () => {
  return (
    <div>
      <div className="Adversting">
        <div className="Adversting_Carts">
          <div className="first_Adversting_cart">
            <img
              src="https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/ETQ-FitpicsHQ-0845-26-04-22-Packing-Boxes-Crob_400x.jpg?v=1652433511"
              alt=""
            />
            <div className="right_cart_div">
              <h4 className="Modular_Packaging">Modular Packaging</h4>
              <p>Unboxing like never before.</p>
              <a href="" className="Read_story">
                Read story
              </a>
            </div>
          </div>
          <div className="second_Adversting_cart">
            <img
              src="https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/WhatsApp_Image_2022-04-11_at_3.53.14_PM_400x.jpg?v=1649941950"
              alt=""
            />
            <div className="right_cart_div">
              <h4 className="Modular_Packaging">Who we are</h4>
              <p>Our joined explained.</p>
              <a href="" className="Read_story">
                Read story
              </a>
            </div>
          </div>
          <div className="third_Adversting_cart">
            <img
              src="https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/Journal_HowIt_sMade_Small2_400x.jpg?v=1621353623"
              alt=""
            />
            <div className="right_cart_div">
              <h4 className="Modular_Packaging">How it's made</h4>
              <p>Sneakers made like shoes.</p>
              <a href="" className="Read_story">
                Read story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adversting;
