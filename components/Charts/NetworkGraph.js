import Graph from 'react-graph-vis'
import {useState} from 'react'
import {Box} from '@mui/system'
import { styled } from '@mui/material/styles'

function NetworkGraph({data}) {
  let {updateUserGraph} = data

  let StyledGraph = styled(Graph)(({theme}) => ({

  }))


  const options = {
    autoResize: true,
    height: "110%",
    width: "110%",
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
    <Box sx={{height: 450, position:'relative'}}>  
      <StyledGraph graph={updateUserGraph} options={options} />
    </Box>
  );
}


export default NetworkGraph;
