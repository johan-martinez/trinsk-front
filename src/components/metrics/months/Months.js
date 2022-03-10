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
                borderColor:'#2666CF',
                backgroundColor:[
                    '#2666CF',
                ],
                data:totals
            }
        ]
    }
    
    const options={
        maintainAspectRatio:true,
        responsive:true
    }
    

    return(
        <div className='metrics-div'>
            <Line data={data} options={options}/>
            <table className='table-metrics'>
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
                            <td>{Intl.NumberFormat('en-US').format(e.months['01']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['02']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['03']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['04']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['05']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['06']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['07']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['08']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['09']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['10']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['11']||0)}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.months['12']||0)}</td>
                        </tr>))
                    }
                    <tr className='table-metrics-total'>
                        <td>TOTAL</td>
                        {
                            Object.values(totals).map(e=>(
                                <td>{Intl.NumberFormat('en-US').format(e)}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export {Months}