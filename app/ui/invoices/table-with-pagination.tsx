import { Suspense } from 'react';
import { fetchFilteredInvoicesWithCount } from '@/app/lib/data';
import InvoicesTable from './table';
import Pagination from './pagination';

export default async function TableWithPagination({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const { invoices, totalPages } = await fetchFilteredInvoicesWithCount(query, currentPage);

    return (
        <>
            <InvoicesTable invoices={invoices} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
}
