import React,  {useState, useEffect} from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

function Element(props){

    const { element } = props;

    const backgroundColor = element.heighlight ? 'blue' : 'white'

    return (

        <TableCell style={{backgroundColor}} >
            {element.number}
        </TableCell>

    )
}


function RowElements ( props ){

    let { elements } = props

    const listItems = elements.map( (e,i) => <Element element={e} /> )
    
    return ( <TableRow>{listItems}<br/></TableRow>);


}


function TableElements ( props ){

    let { maxElementsInRow = 10, elements } = props
    
    let rows = []

    for ( var i = 0; i < maxElementsInRow; i += 1 ){
        let row = []
        for ( var j = i; j < elements.length; j += maxElementsInRow ){
            row.push ( elements[j] )
        }
        rows.push(row)
    }

    const listItems = rows.map( (row,i) => <tr><RowElements key={'row-' + i}  elements={ row}   /></tr> )

    return ( <Table><TableBody>{listItems}</TableBody></Table>);
}

function App() {

    let defaultElements = []
    for ( var i = 1; i <= 100; i++ ){
        defaultElements.push ( {
            number : i,
            heighlight : i%3 == 0
        })
    }

    const [elements, setElements] = useState(defaultElements);


    return (
        
            <TableElements elements ={elements} />
            
    );
}

export default App;
