function TableRisk(props) {
    let risks=[
        {namerisk:'PELIGRO',color:'#ED3D3D'},
        {namerisk:'ALTO',color:'#DADE26'},
        {namerisk:'MEDIO',color:'#07D234'},
    ]
    return(
        <table className="risk-table">
                <tr>
                    <th >
                        CONVECCIÓN
                    </th>
                    <th >
                        COLOR
                    </th>
                </tr>
                <tbody>
                    {risks.map(e=>(
                        <tr>
                            <td>{e.namerisk}</td>
                            <td><div style={{
                                height: '1.5rem',
                                width:'1.5rem',
                                borderRadius:'50%',
                                backgroundColor:e.color,
                                border: '1px solid black',
                                margin:'0 auto'
                                }}></div></td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
    )
}

export {TableRisk}