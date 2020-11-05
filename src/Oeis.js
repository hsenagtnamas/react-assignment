import React, { useState, useEffect } from 'react';

export default function Oeis (){

  const [ id, setId ] = useState ( '' );

  return (
    <div>
      <h1>Enter the OEIS sequence number and press Submit</h1><br/>
      <OeisSelectionPanel id = { id }  onSubmit = {setId} />
      { id !== '' ? <OeisDisplayPanel id = { id } /> : '' }
    </div>
  )

}


export function OeisSelectionPanel (props){

  const { id, onSubmit } = props

  let input = React.createRef();

  return (
    <div>
      <input ref={input} type="text" value = { id }/>
      <button onClick={ () => onSubmit(input.current.value) }>Submit</button>
      <br/>
      
    </div>
  );
}


function OeisDisplayPanel(props){

  const {id} = props
  const [ sequences, setSequences ] = useState ( []  );
  const [ error, setError ] = useState ( '' );
  const [ isResultAvailable, setIsResultAvailable ] = useState ( false );


  useEffect ( () => {
      
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://oeis.org/search?fmt=json&q=id:A' + id

      fetch( proxyUrl + url )
      .then( res => res.json() )
      .then( res => { 

        setIsResultAvailable(true)
        console.log(res)
        
        if ( !res.results ){
          setError('No response found for URL : ' + url )
          setSequences([])
        }else{
          setError('')
          setSequences(res.results)
        }
      }, (e) => {
          setError(String( 'Got Error response : ' + e)) 
          setIsResultAvailable(true)
        }
        
      )

      .catch((e) => setError('Got Error : ' + e) )
      
  }, [id]);


  function diaplayResults (){

    if ( !isResultAvailable )
      return ( 'Waiting for API Response' )

    if ( error )
      return error
    
    return (

      <div>
        <h2>
          Found {sequences.length} sequence(s)<br/>
        </h2>
        <ul>
          {
            sequences.map( (sequence,index) => (
              <Sequence key={sequence.number} info={sequence} index={index} /> )
          )}
        </ul>
      </div>
    )

  }

  return (
    <div>
      { diaplayResults() }
    </div>
  )
}

function Sequence(props){

  const {index,info} = props

  return (

    <div>

      <b>{index+1} : <a href= { 'https://oeis.org/A' + info.number} > {info.number} </a>: {info.name} </b>
      Numbers : {info.data} <br/><br/>

    </div>


  )


}