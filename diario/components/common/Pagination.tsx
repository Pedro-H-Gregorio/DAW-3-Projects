"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationProps = {
    pages: number[];
    maxNumberPages: number;
    firstPage?: number;
    lastPage?: number;
};

function renderPages(
    currentPage: number,
    pages: number[],
    onClickAction: (page: number) => void
) {
    return pages.map((page, index) => (
        <a
            key={index}
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClickAction(page);
            }}
            className={`page ${page === currentPage ? "active" : ""}`}> {page}</a >
    ))
}


function renderFragmentedPages(
    currentPage: number,
    pages: number[],
    maxNumberPages: number,
    onClickAction: (page: number) => void
) {
    return (
        <>
            {renderPages(currentPage, pages.slice(0, maxNumberPages / 2), onClickAction)}
            <span className="extra">&hellip;</span>
            {renderPages(currentPage, pages.slice(pages.length - (maxNumberPages / 2)), onClickAction)}
        </>
    );
}


export default function Pagination({
    pages,
    firstPage = Math.min(...pages),
    lastPage = Math.max(...pages),
    maxNumberPages,
}: PaginationProps) {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);

    const createPageURL = (page: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        return `${pathname}?${params.toString()}`;
    };

    const updatePageURL = (page: number) => {
        const url = createPageURL(page);
        replace(url);
    };

    return (
        <div className="pagination">
            {currentPage !== firstPage ? <a href="#" className="previous" onClick={(e) => {
                e.preventDefault();
                updatePageURL(currentPage - 1);
            }}>Prev</a> : null}
            {
                pages.length <= maxNumberPages ?
                    renderPages(currentPage, pages, updatePageURL) :
                    renderFragmentedPages(currentPage, pages, maxNumberPages, updatePageURL)
            }
            {currentPage !== lastPage ? <a href="#" className="next" onClick={(e) => {
                e.preventDefault();
                updatePageURL(currentPage + 1);
            }}>Next</a> : null}
        </div>
    );
}
