export type Student = {
  placeNumber: number
  name: string
  time: number // в минутах, как у вас и было
  doneModules: number
  points: number
  parallelClass?: string // опционально, как в вашем интерфейсе
}

// Тип для пропсов компонента, если он нужен elsewhere
export type StudentTableProps = {
  data: Student[]
  type: 'parallel' | 'classmates'
}