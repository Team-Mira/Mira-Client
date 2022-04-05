import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'
import Image from 'next/image'

export default function LeaderBoard({ data, header }) {

    const { name, key } = header;
  let ranks = data[key]


  if (key === 'mostUsedReaction') {
    ranks = ranks?.map(rank => [rank.key, rank.url, rank.value]) || [["No Scores"]];
  } else {
    ranks = ranks?.map((rank) => {
      return [data.users[rank.key].title, rank.value];
    }) || [["No Scores"]];
  }
  console.log(ranks)
  return (
    <Box sx={{height: 300, position: 'relative', px: 0}}>
      <Table aria-label="simple table">
        {ranks.map((rank, id) => (
          <TableRow key={"row" + id}>
            {rank.map((cell, i) => {
              if(i === 0 && isNaN(rank[1])){
                return <TableCell key={"cell" + i}><Image src={rank[1]} alt="emoji-link" height='20px' width='20px' /></TableCell>
              }
              if(i === 1 && cell !== null && rank.length === 3){
                return <TableCell key={"cell" + i}>{rank[0]}</TableCell>
              }

              return <TableCell key={"cell" + i}>{cell}</TableCell>
              })}
          </TableRow>
        ))}
      </Table>
    </Box>
  );
}
