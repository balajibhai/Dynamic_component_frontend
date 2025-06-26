import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div>
      <h1>Help Page</h1>
      <p>Here is the format to be given in the chat:</p>
      <p>
        I need a table like this: date: 12/03/2021 distance: 3 date: 11/02/2024
        distance: 5
      </p>
      <p>
        I need a graph like this: date: 12/03/2021 distance: 3 date: 11/04/2024
        distance: 4 date: 12/05/2024 distance: 5 date: 15/06/2024 distance: 9
      </p>
      <p>
        I need text like this: date: 12/03/2021 distance: 3 date: 11/02/2024
        distance: 5
      </p>
      <p>Add 3 tabs</p>
      <p>set current config to 3</p>
      <p>add current config to new</p>
      <p>
        Table, text and graph request (date and distance) from the user can be
        in any wording format, as these are integrated with AI.
      </p>
      <p>
        Please click this link to navigate to the app:{" "}
        <Link to="/preview">Home</Link>
      </p>
    </div>
  );
};

export default HelpPage;
