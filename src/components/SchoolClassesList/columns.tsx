import { createColumnHelper } from '@tanstack/react-table'
import { minutesToHoursAndMinutes } from '../../shared/utils'
import cn from 'classnames'
import { SortableHeader } from '../SortableHeader/sortableHeader'
import type { SchoolItem } from '.'

const columnHelper = createColumnHelper<SchoolItem>()

export const getColumns = () => [
  columnHelper.accessor('place', {
    header: ({ column }) => <SortableHeader title="Место" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => {
      const placeNumber = info.getValue()

      return (
        <div className={cn("TableItem__place")}>
          <span>{placeNumber}</span>
        </div>
      )
    }
  }),
  columnHelper.accessor('className', {
    header: ({ column }) => <SortableHeader<SchoolItem, string> title="Класс" column={column} />,
    enableSorting: true,
    sortingFn: 'alphanumeric',
    cell: info => <span title={info.getValue()} className='TableItem__name'>{info.getValue()}</span>
  }),
  columnHelper.accessor('classTeacher', {
    header: ({ column }) => <SortableHeader<SchoolItem, string> title="Учитель" column={column} />,
    enableSorting: true,
    sortingFn: 'alphanumeric',
    cell: info => <span title={info.getValue()} className='TableItem__name'>{info.getValue()}</span>
  }),
  columnHelper.accessor('learningTime', {
    header: ({ column }) => <SortableHeader title="Время обучения" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={minutesToHoursAndMinutes(info.getValue())} className='TableItem__time'>{minutesToHoursAndMinutes(info.getValue())}</span>
  }),
  columnHelper.accessor('doneModules', {
    header: ({ column }) => <SortableHeader title="Выполнено модулей" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={String(info.getValue())} className='TableItem__modules'>{info.getValue()}</span>
  }),
  columnHelper.accessor('points', {
    header: ({ column }) => <SortableHeader title="Баллы" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={String(info.getValue())} className='TableItem__points'>{info.getValue()}</span>
  }),
]