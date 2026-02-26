import { ENGLISH_RESULTS, JAVA_RESULTS, PYTHON_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";

import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  return (
    <>
      <Header name="JHkjgdas"/>
    <main className="scores-container">
      <Score courseName="JAVA" results={JAVA_RESULTS} />
      <Score courseName="HTML" results={HTML_RESULTS} />
      <Score courseName="PYTHON" results={PYTHON_RESULTS}></Score>
      <Score courseName="ENGLISH" results={ENGLISH_RESULTS}></Score>
     
     </main>

    </>
  );
}

export default App;