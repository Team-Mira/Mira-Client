import Graph from 'react-graph-vis'
import {Box} from '@mui/system'

function NetworkGraph({data}) {
  let {updateUserGraph} = data

  const options = {
    height: "100%",
    interaction: {
      zoomView: true,
    },
    nodes: {
      shape: "circularImage",
      borderWidth: 0
    },
    font: {
      color: '#ffffff'
    },
    edges: {
      color: "rgba(255, 99, 132, .5",
      physics: false,
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
    <Box sx={{height: 300, position: 'relative'}}>

      <Graph graph={updateUserGraph} options={options} />
    </Box>
  );
}


export default NetworkGraph;
