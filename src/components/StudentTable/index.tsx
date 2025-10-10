/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { ProgressBar } from '../ProgressBar';
import { StateChip } from '../StateChip';
import './styles.scss';
import { StudentTableItem } from './StudentTableItem';

// Define the data type
export type Student = {
    id: number;
    module: string;
    doneLessons: number;
    maxLessons: number;
    processLessons: number;
    learningTime: string;
    mistakes: number;
    points: number;
    attestationStatus: 'rejected' | 'accepted' | 'checking' | 'notCompleted'; // Adjust based on your StateChip states
};

// Sample data - replace with your actual data source
const defaultData: Student[] = [
    {
        id: 1,
        module: 'Алфавит',
        doneLessons: 10,
        maxLessons: 10,
        processLessons: 0,
        learningTime: '0ч 32м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'rejected',
    },
    {
        id: 2,
        module: 'Фонетика',
        doneLessons: 0,
        maxLessons: 14,
        processLessons: 7,
        learningTime: '0ч 24м',
        mistakes: 0,
        points: 0,
        attestationStatus: 'notCompleted',
    },
    {
        id: 3,
        module: 'Лексикология',
        doneLessons: 15,
        maxLessons: 15,
        processLessons: 0,
        learningTime: '0ч 26м',
        mistakes: 0,
        points: 100,
        attestationStatus: 'accepted',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },
    {
        id: 3,
        module: 'Дошкхоллар',
        doneLessons: 9,
        maxLessons: 9,
        processLessons: 0,
        learningTime: '0ч 41м',
        mistakes: 3,
        points: 97,
        attestationStatus: 'checking',
    },

    // Add more student data objects here as needed
];

const columnHelper = createColumnHelper<Student>();

export const StudentTable = () => {
    // Define columns
    const columns: ColumnDef<Student, any>[] = [
        columnHelper.accessor('id', {
            header: '#',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('module', {
            header: 'Модуль',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor(row => row, {
            id: 'lessons',
            header: 'Уроки',
            cell: info => (
                <div>
                    <ProgressBar
                        doneLessons={info.row.original.doneLessons}
                        maxLessons={info.row.original.maxLessons}
                        processLessons={info.row.original.processLessons}
                    />
                </div>
            ),
        }),
        columnHelper.accessor('learningTime', {
            header: 'Время обучения',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('mistakes', {
            header: 'Ошибки',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('points', {
            header: 'Баллы',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('attestationStatus', {
            header: 'Аттестация',
            cell: info => <div><StateChip state={info.getValue()} /></div>,
        }),
    ];

    // Initialize the table
    const table = useReactTable({
        data: defaultData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="StudentTable__container">
            <table className="StudentTable">
                <thead className="StudentTable__head">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className={`StudentTable__head_${header.id}`}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <StudentTableItem key={row.id} row={row} />
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