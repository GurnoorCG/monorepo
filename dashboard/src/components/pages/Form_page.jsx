import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Form_page.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import Checkbox from "@mui/material";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";


const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Form_page = () => {
  const [Reponame, setReponame] = useState("");
  const [Status, setStatus] = useState("");
  const [QueuedAt, setQueuedAt] = useState();
  const [ScanningAt, setScanningAt] = useState();
  const [FinishedAt, setFinishedAt] = useState();
  const [Ruleid, setRuleid] = useState("");
  const [description, setdescription] = useState("");
  const [Severity, setSeverity] = useState("");
  const [Pathname, setPathname] = useState("");

  // const handleSubmit = async (e) => {
  //   console.log("hello")
  //   e.preventDefault();
  //   await addEmployee();
  // }
  const history=useNavigate();
  const addEmployee = () => {
    console.log("hello1")
    Axios.post("http://localhost:8080/create", {
      Reponame: Reponame,
      Status: Status,
      QueuedAt: QueuedAt,
      ScanningAt: ScanningAt,
      FinishedAt: FinishedAt,
      Ruleid: Ruleid,
      description: description,
      Severity: Severity,
      Pathname: Pathname,
    }).then(() => {
      console.log("done");
    });
  history("/Result_list");

  };

  return (
    <>
    <div className="topContainer">
      <Box sx={{ display: "flex",flexDirection:"column", width: "50%" }}>
        <Box sx={{ p: 3, width: "100%" }}>
          <DrawerHeader />

          <form action="#" >
            <div className="form-heading">
              <h1 className="heading">Data Input Form</h1>
            </div>

            <div className="user-details">

              <div className="input-box">
                <span className="details">Repository Name</span>
                <input
                  type="string"
                 
                  
                  onChange={(event) => {
                    setReponame(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span for="cars" className="details">
                  Status
                </span>
                <select
                  name="cars"
                  id="cars"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setStatus(event.target.value);
                  }}

                >
                  <option value="Queued">Queued</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Success">Success</option>
                  <option value="Failure">Failure</option>
                </select>
                {/* <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked /> */}
                {/* <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup> */}
                </div>

              <div className="input-box">
                <span className="details">QueuedAt</span>
                <input
                  type="datetime-local"
                  
                  onChange={(event) => {
                    setQueuedAt(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">ScanningAt</span>
                <input
                  type="datetime-local"
                  
                  onChange={(event) => {
                    setScanningAt(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">FinishedAt</span>
                <input
                  type="datetime-local"
                  
                  onChange={(event) => {
                    setFinishedAt(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <h3 className="findings" style={{color:'#E9EDC9'}}>Findings</h3>
            </div>

            <div className="user-details">
              <div className="input-box">
                <span className="details">RuleId</span>
                <input
                  type="string"
                 
                  
                  onChange={(event) => {
                    setRuleid(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Description</span>
                <input
                  type="string"
                  
                  
                  onChange={(event) => {
                    setdescription(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Severity</span>
                <input
                  type="string"
                  
            
                  onChange={(event) => {
                    setSeverity(event.target.value);
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">Path Name</span>
                <input
                  type="string"
                  
              
                  onChange={(event) => {
                    setPathname(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="divaddButton">
              <button className="addButton" type="submit" onClick={addEmployee} >
                Submit
              </button>
            </div>
          </form>
        </Box>
        
      </Box>
      
    <img className="image" alt="img" src ="data:image/png;base64,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"></img>
    </div>
    </>
    
  );
};

export default Form_page;
