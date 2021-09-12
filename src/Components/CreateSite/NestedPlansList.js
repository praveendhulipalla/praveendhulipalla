import React from "react";
import PropTypes from "prop-types";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: "100%",
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});
function getItems() {
    var json = {
        list: [
            {id: 'root',
            title: 'Organizations',
            items: [
              {
                id: '1',
                title: 'First Organization',
                items: [
                  {
                    id: 'P4',
                    title: 'Plan one',
                  },
                  {
                    id: 'P5',
                    title: 'Plan Two',
                  },
                  {
                    id: 'P6',
                    titlee: 'Plan Three',
                  }
                  // …
                ]
              },
              {
                id: '2',
                title: 'Second Oganizaton',
                items: [
                  {
                    id: 'P7',
                    title: 'Plan one',
                  },
                  {
                    id: 'P8',
                    title: 'Plan Two',
                  },
                  {
                    id: 'P9',
                    title: 'Plan Three',
                  }
                  // …
                ]
              },
              {
                id: '3',
                title: 'Third Organization',
                items: [
                  {
                    id: 'P10',
                    title: 'Plan one',
                  },
                  {
                    id: 'P11',
                    title: 'Plan Two',
                  },
                  {
                    id: 'P12',
                    title: 'Plan Three',
                  }
                ]
              }
            ],
            }]
    };
    return json;
}
class NestedList extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        const { classes } = this.props;
        return (
            <div>
                {items.list.map(list => {
                    return (
                        <List
                            className={classes.root}
                            key={list.id}
                            subheader={
                                <ListSubheader>{list.title}</ListSubheader>
                            }
                        >
                            {list.items.map(item => {
                                return (
                                    <div key={item.id}>
                                        {item.subitems != null ? (
                                            <div key={item.id}>
                                                <ListItem
                                                    button
                                                    key={item.id}
                                                    onClick={this.handleClick.bind(
                                                        this,
                                                        item.name
                                                    )}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                    />
                                                    {this.state[item.name] ? (
                                                        <ExpandLess />
                                                    ) : (
                                                        <ExpandMore />
                                                    )}
                                                </ListItem>
                                                <Collapse
                                                    key={list.items.id}
                                                    component="li"
                                                    in={this.state[item.name]}
                                                    timeout="auto"
                                                    unmountOnExit
                                                >
                                                    <List disablePadding>
                                                        {item.subitems.map(
                                                            sitem => {
                                                                return (
                                                                    <ListItem
                                                                        button
                                                                        key={
                                                                            sitem.id
                                                                        }
                                                                        className={
                                                                            classes.nested
                                                                        }
                                                                    >
                                                                        <ListItemText
                                                                            key={
                                                                                sitem.id
                                                                            }
                                                                            primary={
                                                                                sitem.name
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                );
                                                            }
                                                        )}
                                                    </List>
                                                </Collapse>{" "}
                                            </div>
                                        ) : (
                                            <ListItem
                                                button
                                                onClick={this.handleClick.bind(
                                                    this,
                                                    item.name
                                                )}
                                                key={item.id}
                                            >
                                                <ListItemText
                                                    primary={item.name}
                                                />
                                            </ListItem>
                                        )}
                                    </div>
                                );
                            })}
                            <Divider key={list.id} absolute />
                        </List>
                    );
                })}
            </div>
        );
    }
}
NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NestedList);
