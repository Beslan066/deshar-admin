import { createColumnHelper, type Column } from '@tanstack/react-table'
import { type Student } from '../../types/types'
import { minutesToHoursAndMinutes } from '../../shared/utils'
import cn from 'classnames'
import { SortableHeader } from '../SortableHeader/sortableHeader'

const columnHelper = createColumnHelper<Student>()

export const getColumns = (type: 'parallel' | 'classmates') => [
  columnHelper.accessor('placeNumber', {
    header: ({ column }) => <SortableHeader title="Место" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => {
      const placeNumber = info.getValue()
      const placeClasses = {
        1: 'TableItem__place_first',
        2: 'TableItem__place_second',
        3: 'TableItem__place_third',
      }
      const placeClass = placeClasses[placeNumber as keyof typeof placeClasses] || 'TableItem__place_other'

      return (
        <div className={cn("TableItem__place", placeClass)}>
          <span>{placeNumber}</span>
        </div>
      )
    }
  }),
  ...(type === 'parallel'
    ? [columnHelper.accessor('class', {
      header: ({ column }: { column: Column<Student, string> }) => <SortableHeader<Student, string> title="Класс" column={column} />,
      enableSorting: true,
      sortingFn: 'alphanumeric',
      cell: info => <span title={info.getValue()} className='TableItem__class'>{info.getValue() || '—'}</span>
    })]
    : []),
  columnHelper.accessor('name', {
    header: ({ column }) => <SortableHeader<Student, string> title="Ученик" column={column} />,
    enableSorting: true,
    sortingFn: 'alphanumeric',
    cell: info => <span title={info.getValue()} className='TableItem__name'>{info.getValue()}</span>
  }),

  columnHelper.accessor('time', {
    header: ({ column }) => <SortableHeader title="Затрачено времени" column={column} />,
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