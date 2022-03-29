import Graph from 'react-graph-vis'
import {useState} from 'react'
import Tooltip from '@mui/material'
import {Box} from '@mui/system'

function NetworkGraph({guildReport}) {
  let {updateUserGraph} = guildReport

  const[tipFocus, setTipFocus] = useState('')

  const options = {
    height: "100%",
    zoomView: false,
    nodes: {
      shape: "dot",

    },
    edges: {
      color: "rgb(255, 99, 132)",
      physics: true,
      width: 1,
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
