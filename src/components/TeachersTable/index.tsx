import { useMemo, useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getSortedRowModel,
    type SortingState
} from '@tanstack/react-table'
import { getColumns } from './columns'
import './styles.scss';
import { useNavigate } from 'react-router-dom';
interface ClassItem {
    id: number;
    className: string;
    classLetter: string;
    classLevel: number;
}
export interface TeacherItem {
    id: number;
    place: number;
    teacherName: string;
    schoolName: string;
    classes: ClassItem[]
    studentsCount: number;
    doneModules: number;
    points: number;
}
export const TeachersTable = ({ data, link = '/' }: { data: TeacherItem[]; link?: string; }) => {
    const columns = useMemo(() => getColumns(), [])
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
        navigate(`/teachers/${id}/students`)
    }
    return (
        <div className="TeachersTable__scroll-container">

            <table className="TeachersTable">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="TeachersTable__tr">
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className='TeachersTable__th'
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
                        <tr key={row.id} className={"TeachersTableItem"} onClick={() => redirectOnStudentItemClick(row.original.id)}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={`TeachersTableItem__td_${cell.id.slice(1)}`}>
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