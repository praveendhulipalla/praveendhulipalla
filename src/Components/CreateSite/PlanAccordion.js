import React, { useEffect, useState } from "react";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";


const PlanAccordion = () => {
  const [indPlansData, setIndPlansData] = useState([]);
  const [organizationsData, setOrganizationsData] = useState([]);

  const getPlans = async () => {
    //const response = await fetch('http://localhost:8080/rocon/jenkins/hello');
    //setPlans(response.data.data);

    const response = [
      {
        id: "0",
        name: "Individual Plans",
        children: [
              {
                id: 'P1',
                name: 'Ind Plan One',
              },
              {
                id: 'P2',
                name: 'Ind Plan Two',
              },
              {
                id: 'P3',
                name: 'Ind Plan Three',
              }
              // …
            ]
          
      }
    ];

    setIndPlansData(response);

    setOrganizationsData([
      {id: 'root',
      name: 'Organizations',
      children: [
        {
          id: '1',
          name: 'First Organization',
          children: [
            {
              id: 'P4',
              name: 'Plan one',
            },
            {
              id: 'P5',
              name: 'Plan Two',
            },
            {
              id: 'P6',
              name: 'Plan Three',
            }
            // …
          ]
        },
        {
          id: '2',
          name: 'Second Oganizaton',
          children: [
            {
              id: 'P7',
              name: 'Plan one',
            },
            {
              id: 'P8',
              name: 'Plan Two',
            },
            {
              id: 'P9',
              name: 'Plan Three',
            }
            // …
          ]
        },
        {
          id: '3',
          name: 'Third Organization',
          children: [
            {
              id: 'P10',
              name: 'Plan one',
            },
            {
              id: 'P11',
              name: 'Plan Two',
            },
            {
              id: 'P12',
              name: 'Plan Three',
            }
          ]
        }
      ],
      }]);
    
  };

  useEffect(() => {
    getPlans();
  }, []);

  const getTreeItemsFromData = treeItems => {
    return treeItems.map(treeItemData => {
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
    return (
      <TreeView
      
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        
      >
        {getTreeItemsFromData(treeItems)}
        {getTreeItemsFromData(orgItems)}
      </TreeView>
    );
  };

  return (
    <div>
      <div style={{ backgroundColor: "rgb(247, 246, 246)", fontFamily:"cursive", color:"sienna" }}>
        <DataTreeView treeItems={organizationsData} orgItems={indPlansData} />
      </div>
      <div>
        <button
                  style={{
                    borderRadius: "15px",
                    border: "none",
                    fontSize: "13px",
                    width: "90px",
                    height: "26px",
                    backgroundColor: "rgb(81, 187, 122)",
                    color: "white",
                    marginTop: "05em"
                  }}
                >Create Plan</button>
      </div>
    </div>
  );
};

export default PlanAccordion;
