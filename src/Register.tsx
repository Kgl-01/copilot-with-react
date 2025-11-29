import { useState } from "react"

function Register() {
  const [userName, setUserName] = useState("")

  //Username should have at least 8characters, 1 special character, 1 number and 1 uppercase letter
  const validateUserName = (name: string) => {
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    return re.test(name)
  }
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // simple placeholder behavior
          alert("Registration submitted")
        }}
      >
        <div>
          <label>
            Username:{" "}
            <input
              name="username"
              value={userName}
              onChange={(e) => {
                const { value } = e.target
                setUserName(value)
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Email: <input name="email" type="email" />
          </label>
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
