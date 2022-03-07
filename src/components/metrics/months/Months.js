import { useContext } from 'react';
import {MetricsContext} from '../../../context/MetricsContext';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';

import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Months(props) {
    const {months} = useContext(MetricsContext);
    
    const monthsLabels=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const sumData=(index)=>{
        let sum=0;
        for (let i = 0; i < months.length; i++) {
            let a=(months[i].months[index])?months[i].months[index]:0;
            sum+=a
        }
        return sum;
    }

    let totals=[
        sumData('01'),
        sumData('02'),
        sumData('03'),
        sumData('04'),
        sumData('05'),
        sumData('06'),
        sumData('07'),
        sumData('08'),
        sumData('09'),
        sumData('10'),
        sumData('11'),
        sumData('12'),
    ]

    const data={
        labels:monthsLabels,
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
    

    return(
        <>
            <Line data={data} options={options}/>
            <table >
                <tr>
                    <th >
                        AÑO
                    </th>
                    {monthsLabels.map(e=>(<th>{e}</th>))}
                </tr>
                <tbody>
                    {
                        months.map(e=>(<tr>
                            <td>{e.year}</td>
                            <td>{e.months['01']}</td>
                            <td>{e.months['02']}</td>
                            <td>{e.months['03']}</td>
                            <td>{e.months['04']}</td>
                            <td>{e.months['05']}</td>
                            <td>{e.months['06']}</td>
                            <td>{e.months['07']}</td>
                            <td>{e.months['08']}</td>
                            <td>{e.months['09']}</td>
                            <td>{e.months['10']}</td>
                            <td>{e.months['11']}</td>
                            <td>{e.months['12']}</td>
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

export {Months}