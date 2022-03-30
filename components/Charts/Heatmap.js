import Chart from "react-apexcharts"
import { Box } from "@mui/system";

export default function Heatmap({data}) {
  const options = {
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: 'HeatMap'
      }
  }

  const series = [
    {
      name: "Series 1",
      data: [{
        x: 'W1',
        y: 22
      }, {
        x: 'W2',
        y: 29
      }, {
        x: 'W3',
        y: 13
      }, {
        x: 'W4',
        y: 32
      }]
    }]

  return (
    <Box sx={{height: 300, position: 'relative'}}>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        />
    </Box>
  )

}

