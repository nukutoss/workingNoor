import React from 'react'

export default function StaffTable(props) {
    return (
        <table>
            <thead>
            <button className="button muted-button">State</button>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>number</th>

                </tr>
            </thead>
            <tbody>
                
                {
                props.data.map(row =>(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.number}</td>
                        <td><button className="button muted-button">Edit</button></td>
                    </tr>
                    
                ))
                }
                
            </tbody>
        </table>
    )
    
}
// const Row = ({ id }) => (
//     <tr>
//       <td>
//         <input type="text" id={`select-type-${id}`} />
//       </td>
//       <td>
//         <input type="text" id={`select-position-${id}`} />
//       </td>
//     </tr>
//   );