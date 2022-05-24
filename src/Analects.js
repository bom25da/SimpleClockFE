import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Analects = (props) => {

    const [checkedInputs, setCheckedInputs] = useState([props.checked]);
    
    const [anal, setAnal] = useState({analDate : props.analectsDate, analText : props.analectsText})

    const changeHandler = (checked, id) => {
      if (checked) {
        setCheckedInputs([...checkedInputs, id]);

      } else {
        // 체크 해제
        setCheckedInputs(checkedInputs.filter((el) => el !== id));
      }
    };

    const handleBlur = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {
        setAnal({[e.target.name] : e.target.value})
    }

    return (
        <TableRow key = {props.key}>
            <TableCell><input type="checkbox"
                            id={props.analectsDate}
                            onChange={(e)=>{
                                changeHandler(e.currentTarget.checked, props.analectsDate)
                              }}
                            checked={checkedInputs.includes(props.analectsDate) ? true : false}/>
            </TableCell>
            <TableCell><input type="text"
                            value={anal.analDate}
                            onChange={handleChange}
                            onBlur={handleBlur} />
            </TableCell>
            <TableCell><input type="text"
                            value={anal.analText}
                            onChange={handleChange}
                            onBlur={handleBlur} />
            </TableCell>
        </TableRow>
    )
}

export default Analects;