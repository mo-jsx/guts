import React from "react";
import Link from "../Link";
import "./breadcumber.css";

export interface BreadcumberProps {
  history: string[],
}

const Breadcumber = (props: BreadcumberProps) => {
  const { history } = props;

    return (
      <div>
        {history.map((link, index) => {
          return (
            <>
            {
              index === history.length - 1
              ? <Link content={link} key={index} href={`/${link}`}/>
              : <span><Link content={link} key={index} href={`/${link}`}/> &gt;&nbsp;</span>
            }
            </>
          )
          })
        }
      </div>
    );
};

export default Breadcumber;
