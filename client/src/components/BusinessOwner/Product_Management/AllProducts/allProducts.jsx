import React from 'react'

import  { makeStyles,Grid,TextField,OutlinedInput,Box,useTheme,useMediaQuery,InputBase,Card,CardContent, CardMedia,Button} from '@material-ui/core'
import { List, ListItem,ListItemText,ListItemAvatar,Avatar,ListItemIcon ,Checkbox } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Person, Google, Facebook, Password, } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import { borderRadius, color } from '@mui/system';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ListItemButton from '@mui/material/ListItemButton';



const useStyle = makeStyles(theme => (
    {
        mainHeading: {
            marginTop: 80,
            marginLeft: 40,
            marginBottom: 50,
            fontSize: '2.4rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight: 'bold',
            // '@media(minWidth:600px)': {
            //     fontSize:'1.5rem'
            // }
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem'
            }
        },
        headingDescription: {
            fontFamily: ['Montserrat', 'sans-serif'],
            //fontSize: 20,
            color: '#A1B3BA',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            }
        },
        horizontalDivider: {
            //width: '100%',
            width:'82vw',
            marginTop: 20,
        },
        mainBoxScreen: {
            width: '100%',
            backgroundColor:'purple',
        },
        containerForwholeList: {
           // backgroundColor: 'green',
           
        },
        productList: {
           // backgroundColor: 'red',
            width: '100%',
            //marginTop:10,
        },
        productInfoContent: {
            //backgroundColor: 'pink',
            marginTop: 10,
            paddingLeft: 30,
            marginLeft: 40,
            
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 10,
                marginLeft: 10,
                marginRight:0,
            }
        },
        productContentStyle: {
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight: 'bold',
            fontSize: '1.2rem',

            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
            }
        },
        avatarstyle: {
            width: '100px',
            height: '100px'
        },
       
        
    }
));


const Productdata = [
    {
        value: '0',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '1',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '2',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '3',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '4',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '5',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
    {
        value: '6',
        imageUrl:'https://m.media-amazon.com/images/I/71S5CrAHymS._SL1280_.jpg',
        name: 'Leather Shoes',
        category: 'FootWear',
        price: '560.0',
        availability:'In Stock',
    },
]




const ViewAllProducts = () => {
    const classes = useStyle();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const productImage = null;
    // This is used for Category Selection of the form on the page
    const [currency, setCurrency] = React.useState('EUR'); 

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    // For Product Availability
    const [availability, setAvailability] = React.useState('In Stock');
    const handleProductAvailability = (event) => {
        setAvailability(event.target.value);
    };


    // Code To handle CheckBox
    const [checked, setChecked] = React.useState([0]);
    
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };
    // checkBox Code End



    return (
        <div>  
            {/* <Grid container> */}
            <Typography className={classes.mainHeading} component="div" >All Products</Typography>
                        <Grid item  style={{textAlign:'start',marginTop:'10px',marginLeft:'20px'}}>
                        <Typography className={classes.headingDescription} component="div" >All Products are Listed Down Below</Typography>
                        </Grid>
                       
                <Divider className={classes.horizontalDivider} />

            
            <Grid container spacing={2} direction='row' className={classes.containerForwholeList}> {/** Main Grid for both vertical containers */}
               
                <Grid item lg={12} xs={12}>
                    <List className={classes.productList}>
                        
                        {
                            
                            Productdata.map(eachItem => (
                                
                               // List Item Start
                                <>
                                <ListItem alignItems="flex-start" key={eachItem.value}>
                                    
                                {/** ListItemButton Start */}
                                <ListItemButton role={undefined} onClick={handleToggle(eachItem.value)} dense>

                                    <ListItemIcon>
                                        <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(eachItem.value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': eachItem.value }}
                                        />
                                    </ListItemIcon>
                                                            
                                        {/** Show Image Start */}
                                        <ListItemAvatar>
                                            <Avatar alt="Product Image" src={eachItem.imageUrl} style={ {width:'100px',height:'100px',}}/>
                                        </ListItemAvatar>
                                        {/** Show Image End */}           
                                        

                                        {/* // Container for responsive Product Info*/}
                                        <Grid container direction='row' className={classes.productInfoContent} id={eachItem.value}>

                                        <Grid item lg={3} xs={12} >
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.name}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12} >
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.category}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12}>
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.price}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12}>
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.availability}</Typography>
                                        </ListItemText> 
                                        </Grid>           
                                        </Grid>
                                        {/* //Responsive product info container ends  */}

                                    </ListItemButton>
                                    {/** ListItemButton End */}
        
                                </ListItem>
                                <Divider className={classes.horizontalDivider} />
                                </>
                              
                        // List Item End         
                        ))
                        }
                 
            </List> 
            </Grid>
            </Grid> 

            {/* </Grid> */}
        </div>
    )
}

export default ViewAllProducts;