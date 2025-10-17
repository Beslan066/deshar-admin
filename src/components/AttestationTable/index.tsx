import { useMemo, useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getSortedRowModel,
    type SortingState
} from '@tanstack/react-table'
import { getColumns, type AttestationsTableItemType } from './columns'
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { StudentTableItem } from '../StudentTable/StudentTableItem';
interface AttestationsTableProps {
    data: AttestationsTableItemType[];
}
export const AttestationsTable = ({ data }: AttestationsTableProps) => {
    const columns = useMemo(() => getColumns(), [])
    const [tableData] = useState<AttestationsTableItemType[]>(data)
    const navigate = useNavigate();
    // const { classId } = useParams();
    // Состояние для сортировки
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data: tableData,
        columns,
        state: {
            sorting, // Передаем состояние сортировки
        },
        onSortingChange: setSorting, // Функция для обновления сортировки
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Модель для сортировки
    })
    const redirectOnStudentItemClick = (id: number) => {
        console.log(id);
        navigate(`student/${id}`)
    }
    return (
        <div className="AttestationsTable__scroll-container">

            <table className="AttestationsTable">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="AttestationsTable__tr">
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className='AttestationsTable__th'
                                    colSpan={header.colSpan}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? 'cursor-pointer select-none'
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
                        <StudentTableItem<AttestationsTableItemType> key={row.id} row={row} status={row.original.attestationStatus} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}