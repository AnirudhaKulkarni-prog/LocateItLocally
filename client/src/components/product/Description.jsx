import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
const useStyle = makeStyles(theme=>({
   
}))
const Description = () => {

    const classes=useStyle()
    
    const [alignment, setAlignment] = React.useState('A');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const content = <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti quod eligendi exercitationem iste laborum, voluptatem adipisci aliquam ex fuga?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit ut asperiores neque quos. Saepe, incidunt reprehenderit vel provident cum mollitia maxime corrupti vero voluptatem porro placeat quam iusto id fugiat modi repellat amet veniam optio exercitationem eum aliquam nisi? Quisquam tempore hic sed saepe repellendus atque debitis repudiandae maxime veritatis quae minus animi, ut a excepturi vero fuga? Commodi?</div>
    return (
        <Grid container >
            <Grid
            item
            sx={{
                width: '100%',
                minHeight:300,
                backgroundColor: '#f3f3f3',
                margin:"40px 60px",
                position:"relative",
                border:"1px solid black",
                borderRadius:"10px",
                flexGrow:"1",
                
            }}
            >
            <Box 
                display="flex" 
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    color="primary"
                    size="small"
                    
                    onChange={handleAlignment}
                    sx={{position:"absolute",top:"10px",textAlign:"center"}}
                    >
                    <ToggleButton  sx={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}value="A" >
                        Description 
                    </ToggleButton>
                    <ToggleButton  value="B" >
                        Specification 
                    </ToggleButton>
                    <ToggleButton  sx={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px",paddingRight:"30px"}} value="C" >
                        Review 
                    </ToggleButton>
                    
                </ToggleButtonGroup>  
            </Box>
            <Grid sx={{textAlign:"center",margin:"60px 20px 20px 20px"}}>
            { alignment=="A"?
                <Typography> {content} - Desc</Typography>
            :
            alignment=="B"?
                <Typography> {content} - Specs </Typography>
            :
            <Typography> {content} - Review</Typography>
            }
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Description