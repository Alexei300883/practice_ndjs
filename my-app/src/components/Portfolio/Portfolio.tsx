import Toolbar from "./Toolbar/Toolbar";
import {useState} from "react";
import "./Portfolio.css";
import ProjectList from "./ProjectList/ProjectList";
import {project} from "../../helpers"

const Portfolio =() => {
   
    const [data, setData] = useState(project);
    const onSelectFilter = (key: string) => {
       if(key === "All"){
        setData(project)
       }else {
        const newData = project.filter((item) => item.category=== key)
        setData(newData)
       }
    }

    return (
       <div className="wraper">
       <Toolbar onSelectFilter={onSelectFilter}/>
       <ProjectList projects={data}/> 
       </div>
    )
}

export default Portfolio;