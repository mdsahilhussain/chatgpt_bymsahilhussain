import "./App.css";
import { Configuration, OpenAIApi } from "openai";
function App() {
  const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
  });
  return <div></div>;
} 

export default App;
