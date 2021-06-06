import * as React from "react";
import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { StatePostType } from "./../../types_intefaces/types";
import { page_actions } from "./../../store/actions";

type Props = {
  data: Array<StatePostType>;
  pageSize: number;
  isPaginatorNeed: boolean;
  currentPage: number;
  dispatchPage: any;
};

const Paginator = ({
  data,
  pageSize,
  isPaginatorNeed,
  currentPage,
  dispatchPage,
}: Props): JSX.Element => {
  const [state, setState] = React.useState<Array<StatePostType>>(data);

  useEffect(() => {
    setState(data);
  }, [data]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(state.length / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {isPaginatorNeed && (
        <Pagination>
          <Pagination.Prev
            onClick={() => {
              if (currentPage > 1)
                dispatchPage({
                  type: page_actions.SET_CURRENT_PAGE,
                  page: currentPage - 1,
                });
            }}
            disabled={currentPage === 1}
          />
          {pageNumbers.map((p) => (
            <Pagination.Item
              key={p}
              onClick={(e: React.MouseEvent<HTMLUListElement>) => {
                if ((e.currentTarget as HTMLElement).nodeName === "A") {
                  const pageNumber = Number(
                    (e.currentTarget as HTMLElement).innerText
                  );
                  dispatchPage({
                    type: page_actions.SET_CURRENT_PAGE,
                    page: pageNumber,
                  });
                }
              }}
              active={p === currentPage}
            >
              {p}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => {
              if (currentPage < pageNumbers.length)
                // setCurrentPage(currentPage + 1);
                dispatchPage({
                  type: page_actions.SET_CURRENT_PAGE,
                  page: currentPage + 1,
                });
            }}
            disabled={currentPage === pageNumbers.length}
          />
        </Pagination>
      )}
    </div>
  );
};

export default Paginator;
