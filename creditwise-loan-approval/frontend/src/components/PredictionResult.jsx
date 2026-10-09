function PredictionResult(props) {
    return (
        <div>
            <h2>Prediction Result</h2>
            <p>Loan Status : {props.status}</p>
        </div>
    );
}

export default PredictionResult;