import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core';

import { ListItemButton,ListItemText,List,ListItem} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import { FiChevronRight } from 'react-icons/fi';



// Import card and realated 
import Card from "@material-ui/core/Card";

import { AccountOptions } from '../../../constants/data';

const useStyles = makeStyles((theme) => ({

    mainCard: {
      display: 'block',
      height: 139,
      width: 139,
      borderRadius: 15,

    },
    
      divider: {
          width:'100%',
      }

  }));

 
const AccountMenu = () => {
  const classes = useStyles();
  return (
       
    <>
      <Card className={classes.mainCard}>
                
        <List>
        <Link to="/register">
        <ListItem
                secondaryAction={
                  <IconButton>
                    <FiChevronRight />
                  </IconButton>
                }
                  
                disablePadding>
                <ListItemButton>
                  <ListItemText
                    
                    primary="Register"
                    primaryTypographyProps={
                      {
                        fontFamily: ['Oswald', 'sans-serif'],
                        fontSize: 20,
                      }
                     
                    }
                  />
                </ListItemButton>
        </ListItem>
        </Link>

        
        <Link to="/login">
        <ListItem
                secondaryAction={
                  <IconButton>
                    <FiChevronRight />
                  </IconButton>
                }
                  
                disablePadding>
                <ListItemButton>
                  <ListItemText
                    
                    primary="Login"
                    primaryTypographyProps={
                      {
                        fontFamily: ['Oswald', 'sans-serif'],
                        fontSize: 20,
                      }
                     
                    }
                  />
                </ListItemButton>
        </ListItem>
        </Link>

{/*             
          {
              
            AccountOptions.map(option => (
                   

              <ListItem
                secondaryAction={
                  <IconButton>
                    <FiChevronRight />
                  </IconButton>
                }
                  
                disablePadding>
                <ListItemButton>
                  <ListItemText
                    
                    primary={option}
                    primaryTypographyProps={
                      {
                        fontFamily: ['Oswald', 'sans-serif'],
                        fontSize: 20,
                      }
                     
                    }
                  />
                </ListItemButton>
              </ListItem>
                


            ))
                 
          } */}
        </List>
      </Card>
    </>
  )
};
export default AccountMenu;
