import Graph from 'react-graph-vis'
import {useState} from 'react'
import Tooltip from '@mui/material'
import {Box} from '@mui/system'

function NetworkGraph({data}) {
  let {updateUserGraph} = data

  const[tipFocus, setTipFocus] = useState('')

  const options = {
    height: "100%",
    zoomView: false,
    nodes: {
      shape: "dot",
      color: 'rgba(54, 162, 235, 1)'
    },
    edges: {
      color: "rgba(255, 99, 132, .5",
      physics: true,
      arrowStrikethrough: true,
      endPointOffset:{
        from: 5,
        to: 5
      },
      arrows: {
        to:{
          enabled: false
        },
        middle:{
          enabled: false
        },
        from:{
          enabled: false
        }
      }
    } 
  }

  const events = {
  
  }
  return (
    <Box sx={{height: 300, position: 'relative'}}>  

      <Graph graph={updateUserGraph} options={options} />
    </Box>
  );
}


export default NetworkGraph;
