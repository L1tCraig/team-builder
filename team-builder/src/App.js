import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form';
import Member from './Components/Member'

const blankForm = {
  teammember: '',
  email: '',
  role: '',
  skillset: '',
}

const members = [{
  teammember: 'Craig',
  email: 'L1tCraigJ@gmail.com',
  role: 'Lead',
  skillset: 'Knowing peoples strenghts and weakness to better assign workloads'

},
  {
  teammember: 'Malkovich',
  email: 'Malkovich@Malkovich.com',
  role: 'Malkovich',
  skillset: 'Malkovich Malkovich Malkovich, Malkovich. Malkovich Malkovich Malkovich',
}]

function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formValues, setFormValues] = useState(blankForm)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const { teammember, email, role, skillset } = formValues
    setTeamMember([
      ...teamMember,
      {
        teammember: teammember.trim(),
        email: email.trim(),
        role: role,
        skillset: skillset.trim()
      }
    ])
    setFormValues(blankForm)
  }


  
  return (
    <div>
      {
        members.map(og => {
          return (
            <Member key={og.id} details={og} />
          )
        })
      }
    <Form 
    values={formValues}
    update={updateForm}
    submit={submitForm}
    />
    {
      teamMember.map(member => {
        return (
          <Member key={member.id} details={member} />
        )
      })
    }
    </div>
  );
}

export default App;
