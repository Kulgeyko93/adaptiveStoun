import React, { useState, useEffect } from "react";
import PostItem from "../../components/PostItem/PostItem";
import { OnePostType } from "./../../types_intefaces/types";
import Paginator from "./../../components/Paginator/Paginator";
import { page_reducer } from "./../../store/store";
import { initialStatePage } from "./../../store/dafaultState";
import "./main.scss";

const Main = ({ posts }: any) => {
  const pageSize = 2;
  const [statePage, dispatchPage] = React.useReducer(
    page_reducer,
    initialStatePage
  );
  const [data, setData] = useState(posts);

  const [isPaginatorNeed, setIsPaginatorNeed] = useState(true);

  useEffect(() => {
    data.length <= pageSize
      ? setIsPaginatorNeed(true)
      : setIsPaginatorNeed(false);
  }, [data, pageSize]);

  useEffect(() => {
    const firstValueInPortion = (statePage.page - 1) * pageSize;
    const lastValueInPortion = statePage.page * pageSize;

    const dataForCurrentPage = posts.slice(
      firstValueInPortion,
      lastValueInPortion
    );

    return setData(dataForCurrentPage);
  }, [posts, statePage.page]);

  return (
    <div className='main'>
      <div className='list__items'>
        {data.map((item: OnePostType, index: string) => (
          <PostItem key={index} item={item} />
        ))}
      </div>

      <Paginator
        data={posts}
        pageSize={2}
        isPaginatorNeed={isPaginatorNeed}
        currentPage={statePage.page}
        dispatchPage={dispatchPage}
      />
    </div>
  );
};

export default Main;
