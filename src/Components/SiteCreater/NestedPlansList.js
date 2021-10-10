import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Select Plan</ListSubheader>}
        className={classes.root}
      >
       <div>   
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText inset primary="Individual Plans" />
        </ListItem>
        </div>
        <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText inset primary="Organizations" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Organization 1" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Organization 2" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Organization 3" />
            </ListItem>
          </List>
        </Collapse>
        </div>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
