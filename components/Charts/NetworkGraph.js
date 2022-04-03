import Graph from 'react-graph-vis'
import {useState} from 'react'
import {Box} from '@mui/system'

function NetworkGraph({data}) {
  let {updateUserGraph} = data



  const options = {
    autoResize: true,
    height: "100%",
    margin: 0,
    padding: 0,
    nodes: {
      shape: "dot",
      color: 'rgba(54, 162, 235, 1)'
    },
    edges: {
      color: "rgba(255, 99, 132, .5)",
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
  return (
    <Box sx={{ height: 450, px: 0, py: 0, mx: 0, my:0}}>  
      <Graph graph={updateUserGraph} options={options} />
    </Box>
  );
}


export default NetworkGraph;
