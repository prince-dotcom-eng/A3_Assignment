function getStatus(score) {
  return Number(score) >= 40 ? "PASS" : "FAIL";
}

export default function StudentRow({
  student,
  editValue,
  setEditScores,
  onSave,
}) {
  const status = getStatus(student.score);

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td className={status === "PASS" ? "pass" : "fail"}>{status}</td>
      <td>
        <div className="update-wrap">
          <input
            type="number"
            min="0"
            max="100"
            value={editValue}
            onChange={(e) =>
              setEditScores((prev) => ({
                ...prev,
                [student.id]: e.target.value,
              }))
            }
          />
          <button onClick={() => onSave(student.id)}>SAVE</button>
        </div>
      </td>
    </tr>
  );
}