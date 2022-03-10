import { useContext } from "react"
import { MetricsContext } from "../../../context/MetricsContext";

function Streets(props) {
    const {streets} = useContext(MetricsContext)
    
    const handleData=()=>{
        let result={}
        streets.map(e=>{
            let temp=e.streets;
            for (const key in temp) {
                result[key]=(result[key])?result[key]:0+temp[key];
            }
        })
        return result;
    }

    return (
        <div>
            <table className='table-metrics'>
                <tr>
                    <th >
                        NOMBRE DEL BARRIO
                    </th>
                    <th>
                        CANTIDAD
                    </th>
                </tr>
                <tbody>
                    {Object.entries(handleData()).sort(
                        (s1,s2)=>
                            s1[0].localeCompare(s2[0])
                        ).map(e=>{
                        if (e[1]>0) {
                            return (
                                <tr>
                                    <td>{e[0]}</td>
                                    <td>{Intl.NumberFormat('en-US').format(e[1])}</td>
                                </tr>
                            )
                        } 
                    })}

                </tbody>
            </table>
        </div>
    )
}

export {Streets}