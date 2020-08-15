import React from "react"
import IntlCurrencyInput from "react-intl-currency-input"

const currencyConfig = {
    locale: "de-DE",
    formats: {
        number: {
            BRL: {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};
const myFunction = (event) => {
    console.log(event);
    var input = document.getElementById('price-field');

input.onkeyup = function(){
    this.value = this.value.toUpperCase();
}
}

    // console.log(event.keyCode);
    // console.log("sdsds");
    // console.log(event.which);
    // var char = event.which || event.keyCode;
    // console.log(event);
    // var def=document.getElementById("price-field");
    // console.log(def);
    // document.getElementById("price-field").bind('keyup',function (e) {
    //         if (e.which >= 97 && e.which <= 122) {
    //             var newKey = e.which - 32;
    //             // I have tried setting those
    //             e.keyCode = newKey;
    //             e.charCode = newKey;
    //         }})
    //         document.getElementById("price-field").val((document.getElementById("price-field").val()).toUpperCase());
    //     }
    // document.getElementById("price-field").innerHTML = "The Unicode CHARACTER code is: " + char;
//   }
    // var x = event.keyCode;
    // console.log(x);
    // if (x == 27) {  // 27 is the ESC key
    // alert("You pressed the Escape key!");
    // }

// }

const BrlCurrencyComponent = () => {
    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();

        console.log(value); // value without mask (ex: 1234.56)
        console.log(maskedValue); // masked value (ex: R$1234,56)
    };

    return (
        // <IntlCurrencyInput currency="BRL" config={currencyConfig}
        //         onChange={handleChange} />
        <input id="price-field" type="text" onKeyDown={(event)=>myFunction(event) }></input>
    );
}

export default BrlCurrencyComponent;