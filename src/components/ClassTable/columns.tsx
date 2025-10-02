import { createColumnHelper, type Column } from '@tanstack/react-table'
import { type Student } from '../../types/types'
import { minutesToHoursAndMinutes } from '../../shared/utils'
import cn from 'classnames'
import { SortableHeader } from './sortableHeader'

const columnHelper = createColumnHelper<Student>()

export const getColumns = (type: 'parallel' | 'classmates') => [
  columnHelper.accessor('placeNumber', {
    header: ({ column }) => <SortableHeader title="Место" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => {
      const placeNumber = info.getValue()
      const placeClasses = {
        1: 'tableItem__place_first',
        2: 'tableItem__place_second',
        3: 'tableItem__place_third',
      }
      const placeClass = placeClasses[placeNumber as keyof typeof placeClasses] || 'tableItem__place_other'

      return (
        <div className={cn("tableItem__place", placeClass)}>
          <span>{placeNumber}</span>
        </div>
      )
    }
  }),
  columnHelper.accessor('name', {
    header: ({ column }) => <SortableHeader<Student, string> title="Ученик" column={column} />,
    enableSorting: true,
    sortingFn: 'alphanumeric',
    cell: info => <span title={info.getValue()} className='tableItem__name'>{info.getValue()}</span>
  }),

  ...(type === 'parallel'
    ? [columnHelper.accessor('parallelClass', {
      header: ({ column }: { column: Column<Student, string> }) => <SortableHeader<Student, string> title="Класс" column={column} />,
      enableSorting: true,
      sortingFn: 'alphanumeric',
      cell: info => info.getValue() || '—'
    })]
    : []),
  columnHelper.accessor('time', {
    header: ({ column }) => <SortableHeader title="Затрачено времени" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={minutesToHoursAndMinutes(info.getValue())} className='tableItem__name'>{minutesToHoursAndMinutes(info.getValue())}</span>
  }),
  columnHelper.accessor('doneModules', {
    header: ({ column }) => <SortableHeader title="Выполнено модулей" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={String(info.getValue())} className='tableItem__done'>{info.getValue()}</span>
  }),
  columnHelper.accessor('points', {
    header: ({ column }) => <SortableHeader title="Баллы" column={column} />,
    enableSorting: true,
    sortingFn: 'basic',
    cell: info => <span title={String(info.getValue())} className='tableItem__points'>{info.getValue()}</span>
  }),
]