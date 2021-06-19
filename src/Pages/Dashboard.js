import CreateSite from "../Components/CreateSite/CreateSite";
import Header from "../Components/Dashboard/Header";
import GridLayout from "../Components/Layout/GridLayout";

const Daashboard = (props) => {
  //return <Header {...props} />;
  return (
    <div style={{backgroundColor:"rgb(247, 246, 246)"}}>
      <GridLayout />
    </div>
    
  )
  //return <GridLayout />;
};

export default Daashboard;
