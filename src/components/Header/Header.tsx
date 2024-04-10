import { Box, Button, Grid, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

export default function Header() {
  return (
    <Grid container>
        <Box>
            <Typography>Kapibara Lab</Typography>
            <Typography>Современные методики диагностики</Typography>
        </Box>
        <Box>
            <Button>Лаборатория</Button>
            <Button>Галерея</Button>
            <Button>Оставить заявку</Button>
        </Box>
        <Box>
            <PhoneIcon></PhoneIcon>
            <Box>+7 123 456 7890</Box>
            <Box>Звонок бесплатный</Box>
        </Box>
    </Grid>
  )
}
