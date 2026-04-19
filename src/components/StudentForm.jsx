export default function StudentForm({ name, score, setName, setScore, onAdd }) {
  return (
    <div className="form-row">
      <label>
        <span>Student name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>

      <label>
        <span>Score (0-100)</span>
        <input
          value={score}
          onChange={(e) => setScore(e.target.value)}
          type="number"
          min="0"
          max="100"
        />
      </label>

      <button onClick={onAdd}>+ ADD</button>
    </div>
  );
}