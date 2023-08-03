import "./ProjectList.css";
import { TypeProject } from "../../../types";

type ProjectListType = {
  projects: TypeProject[];
};

const ProjectList: React.FC<ProjectListType> = ({ projects }) => {
  return (
    <div className="conteiner_list">
      {projects.length && projects.map((item: TypeProject) => (
        <img
          key={item.id}
          src={item.img}
          alt={item.category}
          width={200}
        />
      ))}
    </div>
  );
};

export default ProjectList;
