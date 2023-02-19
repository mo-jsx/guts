import React from "react";
import SimpleLink from "../Link";
import "./breadcumber.css";

const Breadcumber = ({ history }) => {
    return (
      <div>
        {history.map((link, index) => {
          return (
            <>
            {
              index === history.length - 1
              ? <SimpleLink content={link} key={index} />
              : <span><SimpleLink content={link} key={index} /> &gt;&nbsp;</span>
            }
            </>
          )
          })
        }
      </div>
    );
};

export default Breadcumber;
