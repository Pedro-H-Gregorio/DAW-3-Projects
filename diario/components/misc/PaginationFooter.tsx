"use client";

import Pagination from "../common/Pagination";

export default function PaginationFooter() {
    return (
        <footer>
            <Pagination pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} currentPage={1} maxNumberPages={6} onClickAction={(page: number) => {
                console.log(page);
            }} />
        </footer>
    );
}
