export default function StatsBar({ total, passed, avg }) {
  return (
    <div className="stats">
      TOTAL: {total} &nbsp;&nbsp; PASSED: {passed} &nbsp;&nbsp; AVG SCORE: {avg}
    </div>
  );
}