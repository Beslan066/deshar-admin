// import { ClassCardMain } from "../../components/ClassCardMain";
// import { MainChart } from "../../components/MainChart"
// import { ResultsCard } from "../../components/ResultsCard"
// import { StatisticsBlock } from "../../components/StatisticsBlock";
import { testOptionsTeacher, testOptionsVicePrincipal, testOptionsDepartment, testOptionsMinistry } from "../../mocks/data";
import useRole from "../../shared/hooks/useRole";
import { Selector, type Option } from "../../shared/ui/Selector"

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
        case "ministry":
            options = testOptionsMinistry;
            break;
        default:
            options = testOptionsTeacher;
            break;
    }
    const handleSelectChange = (item: Option) => {
        if (role === "department" || role === "vicePrincipal" || role === "ministry") {

            if (item.default) {
                navigate("/")
            } else {

                navigate(`/${item.id}`)
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