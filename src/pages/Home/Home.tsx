import React from "react";
import { Link } from "react-router-dom";

const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <p>{ BASE_URL }</p>

      <br />
      <Link to="/test">Go to the Test Page!</Link>
    </div>
  );
};

export default Home;
