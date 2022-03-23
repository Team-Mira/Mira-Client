import Message from "@mui/icons-material/Message";
import Mood from "@mui/icons-material/Mood";
import Reply from "@mui/icons-material/Reply";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import QuestionMark from "@mui/icons-material/QuestionMark";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import Typography from "@mui/material/Typography";

export default function SSCS(props){
  const { name, amount } = props.data

  function cardIcon(name){
    switch(name){
      case 'Total Messages':
        return <Message />
      case 'Total Reactions':
        return <Mood />
      case 'Total Replies':
        return <Reply />
      case 'Active Users':
        return <DirectionsRun />
      default:
        return <QuestionMark />
    }
  }

  return (
    <Card>
      <CardHeader title={name} avatar={cardIcon(name)}/>
      <CardContent>
        <Typography variant="h4">{amount}</Typography>
      </CardContent>
    </Card>
  )
}
