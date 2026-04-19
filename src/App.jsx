import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StatsBar from "./components/StatsBar";
import StudentTable from "./components/StudentTable";

const initialStudents = [
  { id: 1, name: "Aarav", score: 78 },
  { id: 2, name: "Meera", score: 45 },
  { id: 3, name: "Kabir", score: 90 },
  { id: 4, name: "Ananya", score: 32 },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [editScores, setEditScores] = useState(
    Object.fromEntries(initialStudents.map((s) => [s.id, String(s.score)]))
  );

  const total = students.length;
  const passed = students.filter((s) => Number(s.score) >= 40).length;
  const avg = total
    ? Math.round(students.reduce((sum, s) => sum + Number(s.score), 0) / total)
    : 0;

  const addStudent = () => {
    const trimmed = name.trim();
    const numericScore = Number(score);

    if (!trimmed) return;
    if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) return;

    const newStudent = {
      id: Date.now(),
      name: trimmed,
      score: numericScore,
    };

    setStudents((prev) => [...prev, newStudent]);
    setEditScores((prev) => ({ ...prev, [newStudent.id]: String(numericScore) }));
    setName("");
    setScore("");
  };

  const saveScore = (id) => {
    const nextScore = Number(editScores[id]);
    if (Number.isNaN(nextScore) || nextScore < 0 || nextScore > 100) return;

    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, score: nextScore } : student
      )
    );
  };

  return (
    <div className="app">
      <div className="terminal">
        <Header />
        <StudentForm
          name={name}
          score={score}
          setName={setName}
          setScore={setScore}
          onAdd={addStudent}
        />
        <StatsBar total={total} passed={passed} avg={avg} />
        <StudentTable
          students={students}
          editScores={editScores}
          setEditScores={setEditScores}
          onSave={saveScore}
        />
        
      </div>
    </div>
  );
}