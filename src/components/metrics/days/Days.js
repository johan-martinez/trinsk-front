import {MetricsContext} from '../../../context/MetricsContext';
import { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';

import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function Days(props) {
    const {days} = useContext(MetricsContext)
    const daylabels=['LUNES',
                        'MARTES',
                        'MIÉRCOLES',
                        'JUEVES',
                        'VIERNES',
                        'SÁBADO',
                        'DOMINGO'
                    ]

        let totals={
            'LUNES':days.reduce((sum,item)=>sum+item.days['LUNES    '],0),
            'MARTES':days.reduce((sum,item)=>sum+item.days['MARTES   '],0),
            'MIÉRCOLES':days.reduce((sum,item)=>sum+item.days['MIÉRCOLES'],0),
            'JUEVES':days.reduce((sum,item)=>sum+item.days['JUEVES   '],0),
            'VIERNES':days.reduce((sum,item)=>sum+item.days['VIERNES  '],0),
            'SÁBADO':days.reduce((sum,item)=>sum+item.days['SÁBADO   '],0),
            'DOMINGO':days.reduce((sum,item)=>sum+item.days['DOMINGO  '],0)
        }

    
    const data={
        labels:daylabels,
        datasets:[
            {
                label:'ACCIDENTES',
                data:totals
            }
        ]
    }
    
    const options={
        maintainAspectRatio:true,
        responsive:true
    }

    return (
        <>
            <div >
                <Bar data={data} options={options}></Bar>
                
            </div>
            <table >
                <tr>
                    <th >
                        AÑO
                    </th>
                    {daylabels.map(e=>(<th>{e}</th>))}
                </tr>
                <tbody>
                    {
                        days.map(e=>(<tr>
                            <td>{e.year}</td>
                            <td>{e.days['LUNES    ']}</td>
                            <td>{e.days['MARTES   ']}</td>
                            <td>{e.days['MIÉRCOLES']}</td>
                            <td>{e.days['JUEVES   ']}</td>
                            <td>{e.days['VIERNES  ']}</td>
                            <td>{e.days['SÁBADO   ']}</td>
                            <td>{e.days['DOMINGO  ']}</td>
                        </tr>))
                    }
                    <tr>
                        <td>TOTAL</td>
                        {
                            Object.values(totals).map(e=>(
                                <td>{e}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export {Days}