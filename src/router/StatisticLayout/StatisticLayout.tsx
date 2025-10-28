// import { ClassCardMain } from "../../components/ClassCardMain";
// import { MainChart } from "../../components/MainChart"
// import { ResultsCard } from "../../components/ResultsCard"
// import { StatisticsBlock } from "../../components/StatisticsBlock";
import { testOptionsTeacher, testOptionsVicePrincipal, testOptionsDepartment } from "../../mocks/data";
import useRole from "../../shared/hooks/useRole";
import { Selector } from "../../shared/ui/Selector"

// import { TEST_CLASSMATES } from '../../mocks/data';
import './StatisticLayout.scss';
// import { ClassTable } from "../../components/ClassTable";
// import { SchoolsTable } from "../../components/SchoolsTable";
// import { barChartMockData } from '../../mocks/data'
import { Outlet, useNavigate } from "react-router-dom";
export const StatisticLayout = () => {
    const navigate = useNavigate();
    const { role } = useRole();
    let options;
    switch (role) {
        case "teacher":
            options = testOptionsTeacher;
            break;
        case "vicePrincipal":
            options = testOptionsVicePrincipal;
            break;
        case "department":
            options = testOptionsDepartment;
            break;
        default:
            options = testOptionsTeacher;
            break;
    }
    const handleSelectChange = (id: string) => {
        if (role === "department" || role === "vicePrincipal") {

            if (+id === 0) {
                navigate("/")
            } else {

                navigate(`/${id}`)
            }
        }
    }
    return (
        <main className="StatisticLayout">
            <div className="StatisticLayout__inner">
                <div className="StatisticLayout__head">
                    <h1 className="StatisticLayout__title">Общая статистика</h1>
                    <Selector className="StatisticLayout__selector" options={options} onChange={handleSelectChange} />
                </div>
                <div className="StatisticLayout__content">
                    <Outlet />
                </div>
            </div>
        </main >
    )
}