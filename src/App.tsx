import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  const [alertState, setAlertState] = useState(false);
  return (
    <div>
      {alertState && (
        <Alert
          onClose={() => setAlertState(false)}
          alertClass="alert alert-warning alert-dismissible "
        >
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
