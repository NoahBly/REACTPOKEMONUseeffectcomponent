import React from "react";

function Button ({children, ClickHandler, Disabled}) {
    return (
      <button
          type="button"
          onClick={ClickHandler}
          disabled={Disabled}
          >
          {children}

      </button>



    );

}

export default Button;