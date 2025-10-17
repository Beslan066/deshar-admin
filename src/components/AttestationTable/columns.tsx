import { createColumnHelper } from '@tanstack/react-table'
import { type AttestationStatus } from '../../types/types'
import { SortableHeader } from '../SortableHeader/sortableHeader'
import { StateChip } from '../StateChip';


export type AttestationsTableItemType = {
    id: number;
    date: Date;
    studentName: string;
    subjectName: string;
    module: string;
    mistakes: number;
    points: number;
    attestationStatus: AttestationStatus;
}
const columnHelper = createColumnHelper<AttestationsTableItemType>()
export const getColumns = () => [
    columnHelper.accessor('date', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, Date> title="Дата" column={column} />,
        enableSorting: true,
        sortingFn: 'datetime',
        cell: info => <span title={info.getValue().toISOString()} className='AttestationsTableItem__date'>{info.getValue().toLocaleDateString()}</span>
    }),
    columnHelper.accessor('studentName', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, string> title="Ученик" column={column} />,
        enableSorting: true,
        sortingFn: 'text',
        cell: info => <span title={info.getValue()} className='AttestationsTableItem__name'>{info.getValue()}</span>
    }),
    columnHelper.accessor('subjectName', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, string> title="Предмет" column={column} />,
        enableSorting: true,
        sortingFn: 'text',
        cell: info => <span title={info.getValue()} className='AttestationsTableItem__subject'>{info.getValue()}</span>
    }),
    columnHelper.accessor('module', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, string> title="Модуль" column={column} />,
        enableSorting: true,
        sortingFn: 'text',
        cell: info => <span title={info.getValue()} className='AttestationsTableItem__module'>{info.getValue()}</span>
    }),
    columnHelper.accessor('mistakes', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, number> title="Ошибки" column={column} />,
        enableSorting: true,
        sortingFn: 'alphanumeric',
        cell: info => <span title={String(info.getValue())} className='AttestationsTableItem__mistakes'>{info.getValue()}</span>
    }),
    columnHelper.accessor('points', {
        header: ({ column }) => <SortableHeader<AttestationsTableItemType, number> title="Баллы" column={column} />,
        enableSorting: true,
        sortingFn: 'alphanumeric',
        cell: info => <span title={String(info.getValue())} className='AttestationsTableItem__points'>{info.getValue()}</span>
    }),
    columnHelper.accessor('attestationStatus', {
        header: ({ column }) => <SortableHeader title="Аттестация" column={column} />,
        cell: info => <div><StateChip state={info.getValue()} /></div>,
        enableSorting: true,
        sortingFn: 'alphanumeric',
    }),
]