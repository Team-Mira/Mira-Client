import Graph from 'react-graph-vis'

function NetworkGraph({guildReport}) {
  const {updateUserGraph} = guildReport
  return (
    <div>
      <Graph graph={updateUserGraph} />
    </div>
  );
}


export default NetworkGraph;
