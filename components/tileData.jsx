import React from 'react';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from 'react-icons/lib/fa/search';
import HomeIcon from 'react-icons/lib/fa/home';
import BookIcon from 'react-icons/lib/fa/book';
import ContactIcon from 'react-icons/lib/fa/comments-o';


export const mailFolderListItems = (
  <div>
    <Link href='/'>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon size="24" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <BookIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactIcon size="24" />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
);

