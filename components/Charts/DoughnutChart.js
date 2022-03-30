import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from "@mui/system";

export default function DoughnutChart(props){
  ChartJS.register(ArcElement, Tooltip, Legend);

  const { channels } = props.data

  const dataObj = {
    labels: channels.map(channel => {return channel.name}),
    datasets: [
      {
        label: '# of Messages',
        data: channels.map(channel => {return channel.totalMessages}),
        backgroundColor: channels.map(channel => (channel.colors.main)),
        borderColor: channels.map(channel => (channel.colors.border)),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return(
    <Box sx={{height: 300, position: 'relative'}}>
      <Doughnut data={dataObj} options={options} />
    </Box>
  )
}

