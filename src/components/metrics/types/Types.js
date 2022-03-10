import { useContext } from "react";
import { MetricsContext } from "../../../context/MetricsContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Types(props) {
    const {types} = useContext(MetricsContext);
    const typesLabels=[
        'CHOQUE',
        'ATROPELLO',
        'CHOQUE Y ATROPELLO',
        'OCUPANTE',
        'INCENDIO',
        'VOLCAMIENTO',
        'OTRO'
    ];

    const handleKeys=(key)=>{
        if (key==='Choque' || key==='Choque ') {
            return 0
        }
        if (key==='Atropello') {
            return 1
        }
        if (key==='Choque y Atropello') {
            return 2
        }
        if ( (key==='Caida Ocupante')|| (key==='Caida de Ocupante') || (key==='Caída Ocupante') || (key==='Caída de Ocupante')) {
            return 3
        }
        if (key==='Incendio') {
            return 4
        }
        if (key==='Volcamiento') {
            return 5
        }
        if (key==='Otro' || key==='null') {
            return 6
        }
    }
    const handleData=()=>{
        let result={
            'CHOQUE':0,
            'ATROPELLO':0,
            'CHOQUE Y ATROPELLO':0,
            'OCUPANTE':0,
            'INCENDIO':0,
            'VOLCAMIENTO':0,
            'OTRO':0
        }
        types.map(e=>{
            let temp=e.types;
            for (const key in temp) {
                let k=typesLabels[handleKeys(key)]
                if (result[k]) result[k]+=temp[key]
                else result[k]=temp[key]
            }
        })
        return result;
    }

    const handleTable=()=>{
        let r=[]
        types.map(e=>{
            let result={
                'CHOQUE':0,
                'ATROPELLO':0,
                'CHOQUE Y ATROPELLO':0,
                'OCUPANTE':0,
                'INCENDIO':0,
                'VOLCAMIENTO':0,
                'OTRO':0
            }
            let temp=e.types;
            for (const key in temp) {
                let k=typesLabels[handleKeys(key)]
                if (result[k]) result[k]+=temp[key]
                else result[k]=temp[key]
            }
            r.push({year:e.year, data:result})
        })
        return r;
    }

    let da= Object.entries(handleData()).sort((s1,s2)=>
        s1[0].localeCompare(s2[0])
    ).map(e=>(e[1]))

    const data={
        labels:typesLabels.sort((s1,s2)=>
                            s1.localeCompare(s2)
                        ),
        datasets:[
            {
                data:da,
                backgroundColor:[
                    '#DD4A48',
                    '#FF9B6A',
                    '#9145B6',
                    '#FFD365',
                    '#00C897',
                    '#D1D1D1',
                    '#9ADCFF'
                ]
            }
        ] 
    }
    const options={
        maintainAspectRatio:true,
        responsive:true
    }
    
    return (
        <div>
            <Doughnut data={data} options={options}/>
            <table className='table-metrics'>
                <tr>
                    <th >
                        AÑO
                    </th>
                    {typesLabels.map(e=>(<th>{e}</th>))}
                </tr>
                <tbody>
                    {
                        handleTable().map(e=>(<tr>
                            <td>{e.year}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['CHOQUE'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['ATROPELLO'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['CHOQUE Y ATROPELLO'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['OCUPANTE'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['INCENDIO'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['VOLCAMIENTO'])}</td>
                            <td>{Intl.NumberFormat('en-US').format(e.data['OTRO'])}</td>
                        </tr>))
                    }
                    <tr className='table-metrics-total'>
                        <td>TOTAL</td>
                        {
                            Object.values(handleData()).map(e=>(
                                <td>{Intl.NumberFormat('en-US').format(e)}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export {Types}