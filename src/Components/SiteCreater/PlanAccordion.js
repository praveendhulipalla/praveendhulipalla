import React, { useEffect, useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import request from "../../utils/axiosAPI";

const useStyles = makeStyles({
  "@global": {
    ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "white"
    },
    ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "rgb(81, 187, 122)",
      color:"white"
    }
  }
});

const PlanAccordion = () => {
  const [indPlansData, setIndPlansData] = useState([]);
  const [organizationsData, setOrganizationsData] = useState([]);
  const history = useHistory();

  const getPlans = async () => {
      await request({
          method: "GET",
          url: "/plans/all/token"
        }).then(response => {
          
          const individualPlansData = JSON.stringify(response.individualPlans);
          const indPlansParsedData = JSON.parse(individualPlansData);

          const orgPlansData = JSON.stringify(response.orgPlans);
          const orgPlansParsedString = JSON.parse(orgPlansData);
          
          setIndPlansData(indPlansParsedData);
          setOrganizationsData(orgPlansParsedString);
          
        })
        .catch(error => {
          
        });;
    
  };
  
  useEffect(() => {
    getPlans();
  }, []);

  const getTreeItemsFromData = treeItems => {
    return treeItems.map(treeItemData => {
      console.log(treeItemData);
      let children = undefined;
      if (treeItemData.children && treeItemData.children.length > 0) {
          children = getTreeItemsFromData(treeItemData.children);
      }
      return (
        <TreeItem
          key={treeItemData.id}
          nodeId={treeItemData.id}
          label={treeItemData.name}
          children={children}
        />
      );
    });
  };

  const DataTreeView = ({ treeItems, orgItems }) => {

    const classes = useStyles();
    return (
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon /> }
      >
        {getTreeItemsFromData(treeItems)}
        {getTreeItemsFromData(orgItems)}
      </TreeView>
    );
  };

  return (
    <div>
      <div style={{ backgroundColor: "theme.palette.background.paper", fontFamily:"cursive", color:"darkblue" }}>
        <DataTreeView treeItems={organizationsData} orgItems={indPlansData} />
      </div>
      <div>
        <button onClick={() => history.push('/displayPlans')}
                  style={{
                    borderRadius: "15px",
                    border: "none",
                    fontSize: "13px",
                    width: "90px",
                    height: "26px",
                    backgroundColor: "rgb(81, 187, 122)",
                    color: "white",
                    marginTop: "1rem"
                  }}
                >Create Plan</button>
      </div>
    </div>
  );
};

export default PlanAccordion;
