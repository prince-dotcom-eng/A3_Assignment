import StudentRow from "./StudentRow";

export default function StudentTable({
  students,
  editScores,
  setEditScores,
  onSave,
}) {
  return (
    <>
      <div className="records-title">STUDENT RECORDS</div>

      <table className="records">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              editValue={editScores[student.id] ?? student.score}
              setEditScores={setEditScores}
              onSave={onSave}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}