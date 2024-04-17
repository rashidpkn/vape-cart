import { useState } from 'react';
// @mui

import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeSidebar() {
  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(panel === expanded ? false : panel);
  };

  return (
    <Grid container width="250px">
      <Paper sx={{ width: 1 }}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 20 }}
            >
              Top Categories
            </ListSubheader>
          }
          sx={{ color: 'text.secondary' }}
        >
          <ListItemButton onClick={handleChange('panel1')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="VAPE DEVICES" />
            {expanded === 'panel1' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel1'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="SMOK" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Vaporesso" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Uwell" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Innokin" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Voopoo" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Geek Vape" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Show All Vape Devices" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleChange('panel2')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="VAPE JUICE" />
            {expanded === 'panel2' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel2'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="VGOD" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Nasty" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Ruthless" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="BLVK Unicorn" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Vampire Vape" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Dinner Lady" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Zeus Juice" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Show All Vape Juice" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleChange('panel3')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="SALT NIC" />
            {expanded === 'panel3' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel3'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="Cambridge Labs" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="VGOD" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Nasty" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="eCigara" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Core" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Nerd" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="BLVK Unicorn" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Show All Salt Nic" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleChange('panel4')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="POD SYSTEMS" />
            {expanded === 'panel4' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel4'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="Juul" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="MYLE" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Relx" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Show All POD Systems" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleChange('panel5')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="DISPOSABLES" />
            {expanded === 'panel5' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel5'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="Youto" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Tugboat" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="XTRA" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Esco Bars" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="VGOD" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="VICIG" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Vudu" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Show All Disposables" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleChange('panel6')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="MYLE" />
            {expanded === 'panel6' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel6'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="NEW Myle V.4" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Myle V.1" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Myle Disposables" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="fluent:mail-24-filled" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="JUUL" />
          </ListItemButton>

          <ListItemButton onClick={handleChange('panel7')}>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="solar:inbox-in-bold" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="ACCESSORIES" />
            {expanded === 'panel7' ? (
              <Iconify icon="eva:arrow-ios-upward-fill" />
            ) : (
              <Iconify icon="eva:arrow-ios-downward-fill" />
            )}
          </ListItemButton>
          <Collapse in={expanded === 'panel7'} unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemText primary="Colls & Pods" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Tanks, Glass & Tips" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Batteries and Lanyards" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="fluent:mail-24-filled" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Sale" />
          </ListItemButton>

          <ListItemButton>
            {/* <ListItemIcon> */}
            {/* <Iconify icon="fluent:mail-24-filled" width={24} /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary="Delivery Info" />
          </ListItemButton>
        </List>
      </Paper>
    </Grid>
  );
}
