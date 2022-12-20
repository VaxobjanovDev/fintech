import React from "react";
import { useNavigate } from "react-router-dom";

function CompanyListItem({ data }) {
  const navigate = useNavigate();

  const handleDataSend = () => navigate("/company/" + data?.id);

  return (
    <tr onClick={handleDataSend}>
      <td className="company-name">{data.name}</td>
      <td className="company-category">{data.industries}</td>
      <td className="company-location">{data.headquarters}</td>
    </tr>
  );
}

export default CompanyListItem;
