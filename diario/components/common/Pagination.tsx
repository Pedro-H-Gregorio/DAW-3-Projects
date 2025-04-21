"use client";

type PagesProps = {
    pages: number[];
    currentPage: number;
    maxNumberPages: number;
    onClickAction: (page: number) => void;
};

type PaginationProps = PagesProps & {
    firstPage?: number;
    lastPage?: number;
};

function renderPages(currentPage: number, pages: number[], onClickAction: (page: number) => void) {
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


function FragmentedPages({ pages, currentPage, maxNumberPages, onClickAction }: PagesProps) {
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
    currentPage,
    maxNumberPages,
    onClickAction
}: PaginationProps) {
    return (
        <div className="pagination">
            {currentPage !== firstPage ? <a href="#" className="previous">Prev</a> : null}
            {
                pages.length <= maxNumberPages ?
                    renderPages(currentPage, pages, onClickAction) :
                    <FragmentedPages
                        pages={pages}
                        currentPage={currentPage}
                        maxNumberPages={maxNumberPages}
                        onClickAction={onClickAction}
                    />
            }
            {currentPage !== lastPage ? <a href="#" className="next">Next</a> : null}
        </div>
    );
}
