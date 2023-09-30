import React from "react";
import './ProjectManage.css'
import ListProjectManageCard from "../../components/ListProjectManageCard/ListProjectManageCard";

const ProjectManage = () => {
    return (
        <div className="projectManage-container">
            <div className="projectManage-search">
                <input type="search" placeholder="Tìm kiếm" />
                <select>
                    <option>Mới nhất</option>
                    <option>Theo dõi</option>
                </select>
            </div>
            <div>
                <ListProjectManageCard />
                <ListProjectManageCard />
                <ListProjectManageCard />
                <ListProjectManageCard />
                <ListProjectManageCard />
            </div>
        </div>
    )

}

export default ProjectManage;