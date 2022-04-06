import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../../actions/testActions.js";

const MainPage = () => {
  const data = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const clickButton = () => {
    console.log('View Run Function');
    dispatch(testActions("Text change"));
  };
  return (
    <div className="main-page">
      <div>MainPage</div>
      {data.test}
    </div>
  );
};

export default React.memo(MainPage);
