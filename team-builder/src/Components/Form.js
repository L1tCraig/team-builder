import React from 'react'

export default function Form(params) {
    const { values, update, submit } = params

    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <lable>Team Member
                    <input type='text' onChange={onChange} name='teammember' value={values.teammember}/>
                </lable>
                <label>email
                    <input type='email' onChange={onChange} name='email' value={values.email}/>
                </label>
                <label>Role
                    <select onChange={onChange} name='role' value={values.role}>
                        <option value=''>---Role Selection---</option>
                        <option value='Lead'>Project Lead</option>
                        <option value='FrontEndLead'>Front End Lead</option>
                        <option value='BackEndLead'>Back End Lead</option>
                        <option value='FrontEndDev'>Front End Dev</option>
                        <option value='BackEndDev'>Back End Dev</option>
                    </select>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
    
}