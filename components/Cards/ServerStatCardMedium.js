import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import Doughnut from "../Charts/Doughnut"
import Line from "../Charts/Line"
import NetworkGraph from '../Charts/NetworkGraph'

import { dark } from '../../styles/theme/M3colors'

export default function SSCM(props){

  const { name } = props.chartType
  const {data} = props

  function cardChart(name){
    switch(name){
      case 'Messages Per Channel':
        return <Doughnut data={data} />
      case 'Activity Per Channel':
        return <Line data={data} />
      case 'User Map':
        return <NetworkGraph data={data} />
      default:
        return <></>
    }
  }

  return (
    <Card sx={{backgroundColor: dark.surface, boxShadow: 0, borderRadius: 3, px: 2}}>
      <CardHeader title={name} />
      <CardContent>
        {cardChart(name)}
      </CardContent>
    </Card>
  )
}
