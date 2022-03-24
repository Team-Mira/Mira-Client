import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import Doughnut from "../Charts/Doughnut"
import Line from "../Charts/Line"

export default function SSCM(props){

  const { name } = props.data

  function cardChart(name){
    switch(name){
      case 'Messages Per Channel':
        return <Doughnut />
      case 'Activity Per Channel':
        return <Line />
      default:
        return <></>
    }
  }

  return (
    <Card>
      <CardHeader title={name} />
      <CardContent>
        {cardChart(name)}
      </CardContent>
    </Card>
  )
}
