import React, { useState } from 'react'
import Add from './Add'
import NewToll from './NewToll'
import Tolls from './Tolls'
import {FaSortAmountDown} from 'react-icons/fa'
import {GiTowTruck } from 'react-icons/gi'


function List() {

    const [selectedToll, setselectedToll] = useState("")
    const [list, setlist] = useState([
        {type: 'Car/Jeep/Van', number: 'TN 12 AB 1234 ', time: '17.03.2023 / 9:22:16 ', tollName: 'Chennai', tariff: '200'},
        {type: 'LCV', number: 'TN 13 BC 1234 ', time: '18.03.2023 / 9:24:1 ', tollName: 'Madurai', tariff: '500'},
        {type: 'Truck/Bus', number: 'TN 14 CD 1234 ', time: '20.03.2023 / 9:26:6 ', tollName: 'Chengalpattu', tariff: '600'},
        {type: 'Heavy vehicle', number: ' TN 15 DE 1234 ', time: '20.03.2023 / 9:28:60 ', tollName: 'Trichy', tariff: '800'},
    
    ])
    const [Tlist, setTList] = useState([ 
        {tollName: 'Madurai', fd_a_single: '100', fd_a_double: '200', fd_b_single: '300', fd_b_double: '500', fd_c_single : "600",fd_c_double : "600", fd_d_double : "900", fd_d_single : "800"},
        {tollName: 'Chennai', fd_a_single: '100', fd_a_double: '200', fd_b_single: '300', fd_b_double: '300', fd_c_single : "500",fd_c_double : "600", fd_d_double : "700", fd_d_single : "900"},
        {tollName: 'Trichy', fd_a_single: '100', fd_a_double: '200', fd_b_single: '300', fd_b_double: '300', fd_c_single : "600",fd_c_double : "600", fd_d_double : "900", fd_d_single : "800"},
        {tollName: 'Chengalpattu', fd_a_single: '100', fd_a_double: '400', fd_b_single: '300', fd_b_double: '450', fd_c_single : "400",fd_c_double : "600", fd_d_double : "900", fd_d_single : "800"}
    
    ])
    const [query, setquery] = useState("")
    const itemPicker = (i) => {
        setlist([...list, i])
        console.log(list)
    }
    const tollList = (tollItem) => {
        setTList([...Tlist, tollItem])

    }
    return (
        <div>


            <nav>
            
                <div className='logsHeading'>
                    <span className='logsHeading1'>Vehicle Entries___   <GiTowTruck className='truck'/> <GiTowTruck className='truck'/> </span>
                    <span>
                    <input className='search' type="text" placeholder=' Search by VH No...' onChange={(e) => setquery(e.target.value)} />
                    <span>
                    <select name="sort" id="l" onChange={(e) => { setselectedToll(e.target.value) }}>
                    <option value=""> All Tolls </option>
                            {
                                Tlist.map((i) => {
                                    return <option value={i.tollName}>{i.tollName}</option>
                                })
                            }
                        </select>
                        <FaSortAmountDown className='sortIcon'></FaSortAmountDown> 
                    </span>
                    
                   
                    </span>
                </div>
            </nav>
            <span className='buttons'>
                <Add pickItem={itemPicker} sendTolls={Tlist} ></Add>
                <NewToll tollList={tollList}></NewToll>
                <Tolls sendTlist={Tlist}></Tolls>
            </span>


            <table className="table">
                <tr>
                    <th>
                        VEHICLE TYPE
                    </th>
                    <th>
                        VEHICLE NUMBER
                    </th>
                    <th>
                        DATE/TIME
                    </th>
                    <th>
                        TOLL NAME
                    </th>
                    <th>
                        TARIFF
                    </th>
                </tr>
                {


                    list.map((i, index) => {

                        return (
                            (i.tollName.includes(selectedToll) && i.number.toLowerCase().includes(query.toLowerCase())) &&
                            <tr key={index}>
                                <td>{i.type}</td>
                                <td>{i.number}</td>
                                <td>{i.time}</td>
                                <td>{i.tollName}</td>
                                <td>{i.tariff}</td>

                            </tr>)

                    })
                }

            </table>
            <div>



            </div>


        </div>
    )
}

export default List