import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import {MetricsContext} from '../../../context/MetricsContext'
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Risk(props) {
    const {risks} = useContext(MetricsContext)
    
    let riskslabel=[
        'HERIDO',
        'MUERTO',
        'SOLO DAÑOS'
    ]

    const sumData=(index)=>{
        let sum=0;
        for (let i = 0; i < risks.length; i++) {
            let f=Object.keys(risks[i].risk).findIndex(el=>el.includes(index))
            let ind=Object.keys(risks[i].risk)[f]
            console.log(`${index}: [${f}]=${ind}`)
            let a=(risks[i].risk[ind])?risks[i].risk[ind]:0;
            sum+=a
        }
        return sum;
    }
    let totals=[
        sumData('HERIDO'),
        sumData('MUERTO'),
        sumData('SOLO DAÑOS')
    ]
    
    const data={
        labels:riskslabel,
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
            <Pie data={data} options={options}/>
            <table >
                <tr>
                    <th >
                        AÑO
                    </th>
                    {riskslabel.map(e=>(<th>{e}</th>))}
                </tr>
                <tbody>
                    {
                        risks.map(e=>(<tr>
                            <td>{e.year}</td>
                            <td>{e.risk['HERIDO']|e.risk['CON HERIDOS']}</td>
                            <td>{e.risk['MUERTO']}</td>
                            <td>{e.risk['SOLO DAÑOS']}</td>
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

export {Risk}