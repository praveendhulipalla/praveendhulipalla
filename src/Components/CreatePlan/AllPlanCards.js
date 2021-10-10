import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core";

import PlanCard from "./PlanCard";

const plansData = [
  {details: ['Custom and secure business email',
  '100 participant video meetings',
  '30 GB cloud storage per user',
  'Security and management controls',
  'Standard support'],
  price: '$6',
  text: 'Business Starter'},
  {details: ['Custom and secure business email',
  '100 participant video meetings',
  '30 GB cloud storage per user',
  'Security and management controls',
  'Standard support'],
  price: '$12',
  text: 'Business Standard'},
  {details: ['Custom and secure business email',
  '100 participant video meetings',
  '30 GB cloud storage per user',
  'Security and management controls',
  'Standard support'],
  price: '$18',
  text:'Business Plus'},
  {details: ['Custom and secure business email',
  '100 participant video meetings',
  '30 GB cloud storage per user',
  'Security and management controls',
  'Standard support'],
  price: 'Contact sales for pricing',
  text:'Enterprise'}
];

const plan1data = ['Custom and secure business email',
  '100 participant video meetings',
  '30 GB cloud storage per user',
  'Security and management controls',
  'Standard support'];

  const plan2data = ['Custom and secure business email',
  '150 participant video meetings + recording',
  '2 TB cloud storage per user',
  'Security and management controls',
  'Standard support (Paid upgrade to enhanced support)'];

  const plan3data = ['Custom and secure business email + eDiscovery,retention',
  '150 participant video meetings + recording, Attendance tracking',
  '5 TB cloud storage per user',
  'Enhanced Security and management controls',
  'Standard support (Paid upgrade to enhanced support)'];

  const plan4data = ['Custom and secure business email',
  '150 participant video meetings + recording',
  '2 TB cloud storage per user',
  'Security and management controls',
  'Standard support (Paid upgrade to enhanced support)'];

const AllPlanCards = (props) => {

  const quoteArray = plansData.map((quote) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <PlanCard name={quote.text} price={quote.price} details={quote.details} />
      </Grid>
    );
  });
  
  return (
    <Grid container spacing={4}>
        {quoteArray}
      
    </Grid>
  );
};

export default AllPlanCards;