import react, { useState, useEffect } from "react";
import api from "../src/mockdata.json";
import api2 from "../src/mock2.json";

const Landing = () => {
  const [launch, setLaunch] = useState([]);
  const [success, setSuccess] = useState(true);
  const [land, setLand] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const getData = async ( ) => {
    const url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${success}&land_success=${land}&launch_year=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    setLaunch(responseJson);
    console.log(responseJson, "lalala");
  };

  const getText = (text) => {
    console.log(text, "text");
    setSearchValue(text);
  };
  useEffect(() => {
    getData();
  }, [searchValue , land , success]);

  return (
    <div className="landing">
      <h1 style={{marginLeft:"20px"}} className="title">SpaceXLaunchPrograms</h1>
      <div className="main">
        <div className="filters">
          <h2 style={{ textAlign: "left" }}>Filters</h2>
          <div style={{ width: "130px" }}>
            <p style={{ textAlign: "end" }}> Launch Year</p>
            <hr></hr>
          </div>
          <div className="dflex">
            <ul>
              {console.log(api, "apiapi")}

              {api.map((item) => {
                return <li onClick={() => getText(item.year)}>{item.year}</li>;
              })}
            </ul>
            <ul>
              {api2.map((item) => {
                return <li onClick={() => getText(item.year)}>{item.year}</li>;
              })}
            </ul>
          </div>
          <div style={{ width: "150px" }}>
            <p style={{ textAlign: "end" }}> Successful launch</p>
            <hr></hr>
          </div>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li onClick={() => setSuccess(true)}>True</li>
            <li onClick={() => setSuccess(false)}>False</li>
          </ul>
          <div style={{ width: "150px" }}>
            <p style={{ textAlign: "end" }}>Successful landing</p>
            <hr></hr>
          </div>
          <ul style={{ display: "flex", justifyContent: "space-between" }}>
            {console.log(land, "landtrue")}
            <li onClick={() => setLand(true)}>True</li>
            <li onClick={() => setLand(false)}>False</li>
          </ul>
        </div>
        <div className="programs">
          {console.log(launch, "launch")}
          {launch?.map((data) => {
            return ( 

              <div className="data"> 
              
              <div className="img-container">
                <img src={data.links.mission_patch}></img> 
                </div> 
                <div className="textDiv">
               <div className="heading"> <h3 className="flightname">
                  {data.mission_name}
                </h3> 
                <h3>#{data.flight_number}</h3> 
            </div>
                <h3>Mission Ids</h3>
                <p>{data.mission_id}</p> 
                <div className="flex">
                <h3>Launch Year</h3>
                <p>{data.launch_year}</p> 
                </div> 
                <div className="flex">
                <h3>Sucessfull launch</h3>
                {console.log(data.launch_success, "success")}
                <p>{data.launch_success?"true": "false"}</p> 
                </div> 
                <div className="flex">
                <h3>Sucessfull Landing</h3> 
                <p>{data.land_success?"true": "false"}</p> 
                </div> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h2 className="name">
        Developed by: <span style={{marginLeft:"5px" , color:"purple"}}> Muskaan suri</span>
      </h2>
    </div>
  );
};

export default Landing;
