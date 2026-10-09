import { useState } from "react";

function LoanForm() {
  const [formData, setFormData] = useState({
    Applicant_Income: "",
    Coapplicant_Income: "",
    Employment_Status: "",
    Age: "",
    Marital_Status: "",
    Dependents: "",
    Credit_Score: "",
    Existing_Loans: "",
    DTI_Ratio: "",
    Savings: "",
    Collateral_Value: "",
    Loan_Amount: "",
    Loan_Term: "",
    Loan_Purpose: "",
    Property_Area: "",
    Education_Level: "",
    Gender: "",
    Employer_Category: "",
  });

  function handelSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  async function testapi() {
    const response = await fetch(
        "http://127.0.0.1:8000/loan-predict",

        {
        method: "POST",

        headers : {
            "Content-Type" : "application/json"
         },

         body : JSON.stringify(formData)

        }
    );

  }

  return (
    <form onSubmit={handelSubmit}>
      <label>Applicant Income</label>
      <input
        type="number"
        value={formData.Applicant_Income}
        onChange={(e) =>
          setFormData({
            ...formData,
            Applicant_Income: e.target.value,
          })
        }
      />
      <br />

      <label>Coapplicant Income</label>
      <input
        type="number"
        value={formData.Coapplicant_Income}
        onChange={(e) =>
          setFormData({
            ...formData,
            Coapplicant_Income: e.target.value,
          })
        }
      />
      <br />

      <label>Age</label>
      <input
        type="number"
        value={formData.Age}
        onChange={(e) =>
          setFormData({
            ...formData,
            Age: e.target.value,
          })
        }
      />
      <br />

      <label>Employment Status</label>
      <select
        value={formData.Employment_Status}
        onChange={(e) =>
          setFormData({
            ...formData,
            Employment_Status: e.target.value,
          })
        }
      >
        <option value="">Select Employment Status</option>
        <option value="Salaried">Salaried</option>
        <option value="Self-employed">Self-employed</option>
        <option value="Contract">Contract</option>
        <option value="Unemployed">Unemployed</option>
      </select>
      <br />

      <label>Marital Status</label>
      <select
        value={formData.Marital_Status}
        onChange={(e) =>
          setFormData({
            ...formData,
            Marital_Status: e.target.value,
          })
        }
      >
        <option value="">Select Marital Status</option>
        <option value="Married">Married</option>
        <option value="Single">Single</option>
      </select>
      <br />

      <label>Dependents</label>
      <input
        type="number"
        value={formData.Dependents}
        onChange={(e) =>
          setFormData({
            ...formData,
            Dependents: e.target.value,
          })
        }
      />
      <br />

      <label>Credit Score</label>
      <input
        type="number"
        value={formData.Credit_Score}
        onChange={(e) =>
          setFormData({
            ...formData,
            Credit_Score: e.target.value,
          })
        }
      />
      <br />

      <label>Existing Loans</label>
      <input
        type="number"
        value={formData.Existing_Loans}
        onChange={(e) =>
          setFormData({
            ...formData,
            Existing_Loans: e.target.value,
          })
        }
      />
      <br />

      <label>DTI Ratio</label>
      <input
        type="number"
        step="any"
        value={formData.DTI_Ratio}
        onChange={(e) =>
          setFormData({
            ...formData,
            DTI_Ratio: e.target.value,
          })
        }
      />
      <br />

      <label>Savings</label>
      <input
        type="number"
        value={formData.Savings}
        onChange={(e) =>
          setFormData({
            ...formData,
            Savings: e.target.value,
          })
        }
      />
      <br />

      <label>Collateral Value</label>
      <input
        type="number"
        value={formData.Collateral_Value}
        onChange={(e) =>
          setFormData({
            ...formData,
            Collateral_Value: e.target.value,
          })
        }
      />
      <br />

      <label>Loan Amount</label>
      <input
        type="number"
        value={formData.Loan_Amount}
        onChange={(e) =>
          setFormData({
            ...formData,
            Loan_Amount: e.target.value,
          })
        }
      />
      <br />

      <label>Loan Term</label>
      <input
        type="number"
        value={formData.Loan_Term}
        onChange={(e) =>
          setFormData({
            ...formData,
            Loan_Term: e.target.value,
          })
        }
      />
      <br />

      <label>Loan Purpose</label>
      <input
        type="text"
        value={formData.Loan_Purpose}
        onChange={(e) =>
          setFormData({
            ...formData,
            Loan_Purpose: e.target.value,
          })
        }
      />
      <br />

      <label>Property Area</label>
      <input
        type="text"
        value={formData.Property_Area}
        onChange={(e) =>
          setFormData({
            ...formData,
            Property_Area: e.target.value,
          })
        }
      />
      <br />

      <label>Education Level</label>
      <input
        type="text"
        value={formData.Education_Level}
        onChange={(e) =>
          setFormData({
            ...formData,
            Education_Level: e.target.value,
          })
        }
      />
      <br />

      <label>Gender</label>
      <input
        type="text"
        value={formData.Gender}
        onChange={(e) =>
          setFormData({
            ...formData,
            Gender: e.target.value,
          })
        }
      />
      <br />

      <label>Employer Category</label>
      <input
        type="text"
        value={formData.Employer_Category}
        onChange={(e) =>
          setFormData({
            ...formData,
            Employer_Category: e.target.value,
          })
        }
      />
      <br />

      <button type="submit">Predict</button>

      <br />

      <button type="button" onClick={testapi}>
        Test API
      </button>
    </form>
  );
}

export default LoanForm;
