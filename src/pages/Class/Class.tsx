import { useParams } from 'react-router-dom';
import './styles.scss';
import { ClassTable } from '../../components/ClassTable';
import { Tooltip } from '../../shared/ui/Tooltip';
import { TeacherItem } from '../../shared/ui/TeacherItem';
export const Class = () => {
    const { classId } = useParams();

    return (
        <main className="ClassPage">
            <ClassTable />
            {/* <Tooltip /> */}
            <TeacherItem name='test' />
        </main>
    )
}