import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getLoading, hideLoading } from '../../store/Reducer/LoadingReducer';
import { useParams } from 'react-router-dom';
import { getNewsPaperFromSection } from '../../service/getServiceNewspaper';
import { message } from 'antd';

export default function PaginationComponent(props) {
    const { page, setPage, setNewsSection } = props;

    const pages = [];
    const RANGE = 1;
    let dotAfter = false;
    let dotBefore = false;
    const [pagination, setPagination] = useState()
    const Paginaion = async () => {
        for (let i = 1; i <= Math.ceil(page.totalPage / page.pageSize); i++) {
            pages.push(i);
        }
        setPagination(pages)

    }
    const renderDotBefore = (index) => {
        if (!dotBefore) {
            dotBefore = true;
            return (
                <span
                    key={index}
                    className="mx-2 rounded border bg-white px-3 py-2 shadow-sm"
                >
                    ...
                </span>
            );
        }
        return null;
    };
    const renderDotAfter = (index) => {
        if (!dotAfter) {
            dotAfter = true;
            return (
                <span
                    key={index}
                    className="mx-2 rounded border bg-white px-3 py-2 shadow-sm"
                >
                    ...
                </span>
            );
        }
        return null;
    };
    const params = useParams();
    let { section } = params;
    useEffect(() => {
        getData()
        Paginaion()
    }, [page])
    const getData = async () => {
        window.scrollTo(0, 0)
        dispatch(getLoading())
        try {
            const result = await getNewsPaperFromSection(section, page.currentPage);
            setNewsSection(result.data.response)
            dispatch(hideLoading())
        } catch (error) {
            message.error("Somthing wrong here")
        }
    }
    const dispatch = useDispatch();

    const renderPagination = () => {
        return pagination.map((pageNumber, index) => {

            if (
                page.currentPage <= RANGE * 2 + 1 &&
                pageNumber > page.currentPage + RANGE &&
                pageNumber < pagination.length - RANGE + 1
            ) {
                return renderDotAfter(index);
            } else if (
                page.currentPage > RANGE * 2 + 1 &&
                page.currentPage < pagination.length - RANGE * 2
            ) {
                if (pageNumber < page.currentPage - RANGE && pageNumber > RANGE) {
                    return renderDotBefore(index);
                } else if (
                    pageNumber > page.currentPage + RANGE &&
                    pageNumber < pagination.length - RANGE + 1
                ) {
                    return renderDotAfter(index);
                }
            } else if (
                page.currentPage >= pagination.length - RANGE * 2 &&
                pageNumber > RANGE &&
                pageNumber < page.currentPage - RANGE
            ) {
                return renderDotBefore(index);
            }

            return (
                <button
                    key={index}
                    onClick={() => setPage({ ...page, currentPage: pageNumber })}
                    className={pageNumber === page.currentPage ? "active" : ""}
                >
                    {pageNumber}
                </button>
            );
        });
    };

    return (
        <div>
            <div className='pagination'>
                {pagination !== undefined ? renderPagination() : <p>Out of content</p>}
            </div>
        </div>
    )

}

