import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import {Comment, ChildCare} from '@material-ui/icons'

const Lista = () => {
    return (
        <div>
            <List component='nav'>
      <ListItem button>
         <ListItemIcon>
           <Comment />
         </ListItemIcon>
         <ListItemText primary='mi primer elemento' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ChildCare />
        </ListItemIcon>
        <ListItemText primary='mi segundo elemento' />
      </ListItem>
    </List>
        </div>
    )
}

export default Lista
