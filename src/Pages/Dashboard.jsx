import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import "../styles/dashboard.css";

const Dashboard = () => {

  // 🔹 State
  const [score, setScore] = useState(75);
  const [progress, setProgress] = useState(60);

  return (
    <div className="dashboard">

      <Navbar />

      <div className="dashboard-container">
        <h2>Welcome to PlaceMentor AI 👋</h2>

        <div className="card-container">
          
          <Card title="Resume Score" value={`${score}%`} />

          <Card title="Preparation Progress" value={`${progress}%`} />

          <Card 
            title="Status"
            value={score > 70 ? "Good 👍" : "Needs Improvement ⚠️"}
          />

        </div>

        <div className="actions">
          <button onClick={() => setScore(score + 5)}>
            Improve Score
          </button>

          <button onClick={() => setProgress(progress + 10)}>
            Update Progress
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;