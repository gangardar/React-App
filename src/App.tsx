import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
import Like from "./components/Like";

function App() {
  const [alertState, setAlertState] = useState(false);
  return (
    <div>
      <Like buttonType="btn btn-link" onClick={() => console.log("Clicked")} />

      {alertState && (
        <Alert onClose={() => setAlertState(false)} alertClass="alert">
          Alert!
        </Alert>
      )}
      <Button
        buttonName="Button"
        buttonType="btn btn-primary"
        onClick={() => setAlertState(true)}
      />
    </div>
  );
}
export default App;
