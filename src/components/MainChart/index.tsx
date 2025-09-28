import { Button } from "../../shared/ui/Button"
import { BarChart } from "../BarChart"
import './styles.scss';
export const MainChart = () => {
    return (
        <div className="MainChart">
            <div className="MainChart__top">
                <span className="MainChart__title">Успеваемость класса</span>
                <div className="MainChart__navigation">
                    <Button variant="iconThird" size="iconSmall">
                        <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L2 7L8 13" stroke="#303030" strokeWidth="1.5" />
                        </svg>
                    </Button>
                    <Button variant="iconThird" size="iconSmall">
                        <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="#303030" strokeWidth="1.5" />
                        </svg>
                    </Button>
                </div>
            </div>
            <BarChart />
        </div>
    )
}