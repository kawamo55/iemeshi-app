import React from "react";

import './Shop.scss'
import { BsChevronLeft } from 'react-icons/bs'
import { useParams, useHistory } from "react-router-dom";

type ShopData = {
  [key: string]: string;
}

type Props = {
  data: ShopData[];
};

const Content = (props: Props) => {
  const { index } = useParams()
  const history = useHistory()
  const [ shop, setShop ] = React.useState<ShopData>({})

  React.useEffect(() => {
    if (index) {
      setShop(props.data[Number(index)])
    }
  }, [index, props.data])

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="shop-single">
      <div className="head">
        <button onClick={goBack}><BsChevronLeft /> 戻る</button>
      </div>
      <div className="container">
        {shop?
          <>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;
