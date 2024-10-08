import './Start.css';

function Start(props) {
  return (
    <div className="Start">
      <h1>Quizzical</h1>
      <p>Click Start for a short 5 question quiz on computer science</p>
      <form>
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          value={props.formData.category}
          onChange={props.handleChange}
          name="category"
        >
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals</option>
          <option value="14">Entertainment: TV</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <br />
        <label htmlFor="difficulty">Difficulty: </label>
        <select
          id="difficulty"
          value={props.formData.difficulty}
          onChange={props.handleChange}
          name="difficulty"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <button type="button" onClick={props.toggleStart}>Start</button>
      </form>
    </div>
  );
}

export default Start;
