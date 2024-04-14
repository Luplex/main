import React, {useState} from "react";
import Table from "../subcomponents/Table";
import ButtonGroup from "../subcomponents/ButtonGroup.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import StatsCard from "../subcomponents/StatsCard.jsx";
import GraphComponent from "../subcomponents/GraphComponent.jsx";
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

// Importation du fichier JSON unifié
import ChartData from "../assets/ChartDataUnified.json";
import TableData from "../assets/TableDataUnified.json";  // Données unifiées de tableaux
import statsData from "../assets/statsData.json"; // assuming the data is stored here
import LineChartData from "../assets/LineChartData.json";
import LineChartComponent from "../subcomponents/LineChartComponent.jsx";
import ButtonFillpdf from "../subcomponents/ButtonFillpdf.jsx";

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [activeTab, setActiveTab] = useState("contrats");
  const { score: chartDataScore, service: chartDataService } = ChartData[activeTab] || { score: [], service: [] };
  const { table1: tableData1, table2: tableData2 } = TableData[activeTab] || { table1: [], table2: [] };
  const { stats1 : stats1, stats2: stats2, stats3: stats3, stats4: stats4 } = statsData[activeTab] || { stats1: [], stats2: [], stats3: [], stats4: [] };
  const { dataScores, labels } = LineChartData[activeTab];

  // const dataScores = [40,55,35,25,5,5,25,20,5,30,5,10,5];
  // const labels = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Août"];
  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };
  const handleClick = () => {
    if (activeTab === "contrats") {
      navigate('/contrats');
    }
    if (activeTab === "affaires") {
      navigate('/affaires');
    }
  };
  return (
    <div id="content-to-export" className="px-16 py-10 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-custom-grey">Bienvenue Daniel,</h1>
        <ButtonFillpdf label="Exporter (pdf) " />
      </div>

      <div className="flex justify-between items-center mb-6">
      <ButtonGroup active={activeTab} onButtonClick={handleButtonClick} />
        <div className="flex justify-start space-x-11">
        <DropDownButton
  label="Filtrer par service"
  options={["Achats", "Juridique", "Logistique", "Marketing", "R&D", "RH", "Autres"]}
  onChange={(option) => console.log(option)}
/>

    <DropDownButton
  label="Ce mois-ci"
  options={["Cette année", "Cette semaine"]}
  onChange={(selectedOption) => {
    console.log("Option sélectionnée :", selectedOption);
  }}
/>
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <StatsCard data={stats1} />
        <StatsCard data={stats2} />
        <StatsCard data={stats3} />
        <StatsCard data={stats4} />
      </div>
      <div className="flex justify-between mb-6">
        <GraphComponent label="Répartition par score" chartData={chartDataScore} />
        <GraphComponent label="Répartition par service" chartData={chartDataService} />

      </div>
      <div className=" bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center mb-10">
      <div className="text-xl font-bold mb-6 self-start">Score global</div>
        <div style={{width:"1016px",height: "300px", padding: "20px", boxSizing: "border-box", background: "#FFF", borderRadius: "8px" }}>
        <LineChartComponent dataScores={dataScores} labels={labels} />
        </div>
      </div>
      <div className="mb-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-custom-grey">En attente de score</h1>
    <a href="" className="text-blue-600 text-base font-semibold leading-normal"onClick={handleClick}>Voir les {activeTab}</a>
    </div>
    <div className="mb-10">


      <Table data={tableData1} />
    </div>
      
      
      <div className="mb-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-custom-grey">Score les plus élevés</h1>
    <a href="#" className="text-blue-600 text-base font-semibold leading-normal">Voir les {activeTab}</a>
    </div>

      <Table data={tableData2} />
    </div>
  );
};

export default Dashboard;
