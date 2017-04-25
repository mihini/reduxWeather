import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import {sum, round} from 'lodash/math';

function average(data){
  return round(sum(data)/data.length);

}

export default (props)=>{
  return(
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
