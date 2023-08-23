
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CommentForm from './CommentForm';

const CommentCard = ({details}) => {

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', mt:2, }}>

{   details.comments.map((comment, index)=>{
const {content, time_stamp, user, image, id } = comment
const time = new Date(time_stamp)

return(
<div key={index}>
<ListItem  alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={details.image} />
        </ListItemAvatar>
        <ListItemText
          primary={user}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {time.toDateString()}
              </Typography>
      {content}
            </React.Fragment>
          }
        />
  </ListItem>
<Divider variant="inset" component="li" />

</div>

)

   })}

<CommentForm detailsId={details.id} />
  
    </List>
  );
}

export default  CommentCard