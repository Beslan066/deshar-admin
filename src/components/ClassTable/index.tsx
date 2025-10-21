import { useMemo, useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getSortedRowModel,
    type SortingState
} from '@tanstack/react-table'
import type { StudentTableProps } from '../../types/types'
import { getColumns } from './columns'
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { teacherMyClasses } from '../../mocks/data';
export const ClassTable = ({ data, type }: StudentTableProps) => {
    const columns = useMemo(() => getColumns(type), [type])
    const navigate = useNavigate();
    // const { classId } = useParams();
    // Состояние для сортировки
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data: data,
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
        <div className="ClassTable__scroll-container">

            <table className="ClassCard__table ClassTable">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="ClassTable__tr">
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className='ClassTable__th'
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
                        <tr key={row.id} className={`tableItem ${teacherMyClasses.find(item => item.title === row.original.class) ? "tableItem--myStudent" : ""}`} onClick={() => redirectOnStudentItemClick(row.original.id)}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}