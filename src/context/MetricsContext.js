import axios from "axios";
import {useState,useEffect,createContext } from "react";


const MetricsContext = createContext()
let url='http://localhost:5000/metrics'



function MetricsProvider(props) {
    const [metrics, setMetrics] = useState([{}])
    const [loading, setLoading] = useState(true)
    
    let days=(metrics!==[])?getDayData():[];
    let months=(metrics!==[])?getMonthData():[];
    let risks=(metrics!==[])?getRiskData():[];
    
    function getRiskData(props) {
        let r=[];
        metrics.map(e=>{r.push({year:e.year, risk:e.riesgo})})
        return r;
    }
    
    function getMonthData() {
        let r=[];
        metrics.map(e=>{r.push({year:e.year, months:e.meses})});
        return r;
    }
    function getDayData() {
        let r=[];
        metrics.map(e=>{r.push({year:e.year, days:e.dias})});
        return r;
    }
    useEffect(() => {
        getMetrics()
    }, [])
    
    
    function getMetrics() {
        axios.get(url)
        .then((data)=>{
            setMetrics(JSON.parse(data.data));
            setLoading(false)
            })
            .catch(()=>{})
    }
    return (
        <MetricsContext.Provider
            value={{
                metrics,
                loading,
                days,
                months,
                risks
            }}
        >
            {props.children}
        </MetricsContext.Provider>
    )
}

export {MetricsContext, MetricsProvider}