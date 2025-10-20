
import { useReactTable, getCoreRowModel, flexRender, type SortingState, getSortedRowModel } from '@tanstack/react-table';

import './styles.scss';
import { StudentTableItem } from './StudentTableItem';
import type { AttestationStatus } from '../../types/types';
import { getStudentTableColumns } from './columns';
import { useMemo, useState } from 'react';

export type StudentTableItemType = {
    id: number;
    module: string;
    doneLessons: number;
    maxLessons: number;
    processLessons: number;
    learningTime: string;
    mistakes: number;
    points: number;
    attestationStatus: AttestationStatus;
};


export const StudentTable = ({ data }: { data: StudentTableItemType[] }) => {
    const columns = useMemo(() => getStudentTableColumns(), []);
    const [tableData] = useState(data);
    const [sorting, setSorting] = useState<SortingState>([]);
    // Initialize the table
    const table = useReactTable({
        data: tableData,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="StudentTable__container">
            <table className="StudentTable">
                <thead className="StudentTable__head">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className={`StudentTable__head_${header.id}`}>
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? 'cursor-pointer select-none StudentTable__head_inner'
                                                    : '',
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g transform="rotate(180 10 10)">
                                                        <path d="M15 10L10 15L5 10" stroke="#7D7979" stroke-width="1.5" />
                                                        <path d="M10 15L10 5" stroke="#7D7979" stroke-width="1.4" />
                                                    </g>
                                                </svg>,
                                                desc: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10L10 15L5 10" stroke="#7D7979" stroke-width="1.5" />
                                                    <path d="M10 15L10 5" stroke="#7D7979" stroke-width="1.4" />
                                                </svg>,
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <StudentTableItem<StudentTableItemType> key={row.id} row={row} status={row.original.attestationStatus} />
                    ))}

                </tbody>
            </table>
        </div>
    );
};

{/* <table className='StudentTableItem__attestationTable AttestationTable'>
<thead className="AttestationTable__head">
    <tr>
        <th>Задание</th>
        <th>Время (мм:сс)</th>
        <th>Ошибки</th>
        <th>Баллы</th>
    </tr>
</thead>
<tbody className='AttestationTable__body'>
    <tr className='AttestationTable__item'>
        <th>
            1
        </th>
        <th>0:21</th>
        <th>0</th>
        <th>11</th>
    </tr>
</tbody>
</table> */}