//import './Scores.css';
import ScoreItem from './ScoreItem.js';

function Scores(props) {
	let score_list = [
		<ScoreItem player_name="Jacinto" player_score="44" key="0" />,
		<ScoreItem player_name="Trump" player_score="32" key="1" />,
		<ScoreItem player_name="Anselmo" player_score="43" key="2" />,
		<ScoreItem player_name="Jacinto" player_score="10" key="3" />
	];


  return (
    <section className="Scores">
			<h2>Scores</h2>

			<ol>
				{score_list}
			</ol>
    </section>
  );
}

export default Scores;
