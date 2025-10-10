
import { flexRender, type Row } from '@tanstack/react-table';
import { type Student } from './index';
import './styles.scss';
import './attestationResults.scss';
import { useState } from 'react';

interface StudentTableItemProps {
    row: Row<Student>;
}

export const StudentTableItem = ({ row }: StudentTableItemProps) => {
    const [isExpired, setIsExpired] = useState(false);
    return (
        <>
            <tr className='StudentTableItem'>
                {row.getVisibleCells().map(cell => (
                    <td
                        key={cell.id}
                        className={`StudentTableItem__${cell.column.id}`}
                    >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                <td className="StudentTableItem__btn">
                    <button className={`btn-reset StudentTableItem__btn_more ${isExpired ? 'active' : ''}`} onClick={() => setIsExpired(prev => !prev)}>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 0.999999" stroke="#7D7979" stroke-width="1.5" />
                        </svg>
                    </button>
                </td>
            </tr>
            {isExpired && <tr>
                <td colSpan={8}>
                    <div className='attestationResults__wrapper'>
                        <div className="attestationResults__container">
                            <table className='StudentTableItem__attestationResults attestationResults'>
                                <thead className="attestationResults__head">
                                    <tr>
                                        <th className="attestationResults__head_th">
                                            Задание
                                        </th>
                                        <th className="attestationResults__head_th">
                                            Время (мм:сс)
                                        </th>
                                        <th className="attestationResults__head_th">
                                            Ошибки
                                        </th>
                                        <th className="attestationResults__head_th attestationResults__head_th--points">
                                            Баллы
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                    <tr className="attestationResults__tr">
                                        <td className='attestationResults__tr-task'>1</td>
                                        <td className='attestationResults__tr-time'>0:21</td>
                                        <td className='attestationResults__tr-mistakes'>0</td>
                                        <td className='attestationResults__tr-points'>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="attestationResults__footer">
                            <span>Аттестация ожидает принятия</span>
                        </div>
                    </div>
                </td>
            </tr>}
        </>
    );
};