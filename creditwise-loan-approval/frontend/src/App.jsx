import LoanForm from "./components/LoanForm";
import Navbar from "./components/Navbar";
import PredictionResult from "./components/PredictionResult";

function App(){
  return(
    <>
    <Navbar title = "CreditWise Loan prediction"/>
    <h1>Loan Prediction System</h1>

    <LoanForm/>
    <PredictionResult status = "Not yet Predicted !!"/>
   
    
    </>
  )
}

export default App;