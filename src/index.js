import React from "react";
import ReactDOM from "react-dom";
import data from "./products.json";

import "./styles.css";

class WomenTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: []
    };
  }
  
  componentDidMount() {
    this.setState(prevState => {
      return {
        json: data
      };
    });
  }

  render() {
    return (
      <section className="productsWrap">
      {this.state.json.map((data, i) => {
           return (
              <div className="Product" key={i}>
                 <img src={"./././images/" + data.productImage}/>
                 {data.isSale === true &&
                 <div className="promoMessage">
                   <span class="colorPromoRed">
                     Sale
                   </span>
                  </div>}:null
                 {data.isExclusive === true &&
                 <div className="promoMessage">
                   <span class="colorPromoGreen">
                     Exclusive
                   </span>
                  </div>}:null
                  <div className="pricingWrap">
                    <span className="productName">{data.productName}</span>
                    <span className="productPrice">{data.price}</span>
                  </div>
              </div>
              
            );
          })}
        <div className="clearFix"></div>
        </section>
     
    );
  }
}

ReactDOM.render(<WomenTop />, document.getElementById("root"));