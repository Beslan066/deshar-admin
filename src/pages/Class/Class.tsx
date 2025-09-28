import { useParams } from 'react-router-dom';
import './styles.scss';
import { ClassTable } from '../../components/ClassTable';
export const Class = () => {
    const { classId } = useParams();

    return (
        <main className="ClassPage">
            <ClassTable />
        </main>
    )
}