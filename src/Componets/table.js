import '../Assets/Styles/table.css';

const Table = ()=>{

    const data = [
        { componentname: "Na", componenttype: 1, catagory: "NA" , addcategory: "NA", deletedcategory: "NA"},
        { componentname: "NA", componenttype: 1, catagory: "NA" , addcategory: "NA", deletedcategory: "NA"},
        { componentname: "NA", componenttype: 2, catagory: "NA", addcategory: "NA", deletedcategory: "NA"},
        { componentname: "NA", componenttype: 2, catagory: "NA", addcategory: "NA", deletedcategory: "NA"},
        { componentname: "NA", componenttype: 2, catagory: "NA", addcategory: "NA", deletedcategory: "NA"},
      ]
      
    return (
        <div className="tablecss">
        <table>
            <thead>
                <tr>
                    <th>sample header1</th>
                    <th>sample header2</th>
                    <th>sample header3</th>
                    <th>sample header4</th>
                    <th>sample header5</th>
                </tr>

            </thead>
            <tbody>
            {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.componentname}</td>
              <td>{val.componenttype}</td>
              <td>{val.catagory}</td>
              <td>{val.addcategory}</td>
              <td>{val.deletedcategory}</td>
            </tr>
          )
        })}

            </tbody>

        </table>
        </div>
    )
}

export default Table