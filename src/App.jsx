import { Form, regex, useModel } from "react-binden"
import ModInput from "./ModInput"

function App() {
  const email = useModel("")
  const password = useModel("")
  const confirmPassword = useModel("")
  const username = useModel("")
  const birthday = useModel("")
  const gender = useModel("", { name: "gender", required: true })

  function handleSubmit(_e, { errors }, { setSubmitting, resetForm }) {
    if (!errors) resetForm()
    setSubmitting(false)
  }


  return (
    <div className="flex flex-col items-center">
      <h1 className="m-2 text-3xl text-center font-bold">Honest Facebook Sign Up</h1>
      <p className="text-center"><b>Disclaimer!:</b> This is just a parody of Facebook. Nothing related actual Facebook corp. Made just for fun & entertainment</p>
      <Form className="inline-flex flex-col p-5 space-y-2 max-w-xl" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-2xl text-gray-900 font-semibold">Sign Up</h2>
          <p className="text-xs text-gray-600">It's quick & easy (profit for us)</p>
        </div>
        <hr />
        <ModInput
          model={username}
          label="Username"
          placeholder="Credit Card Pin. Oops, Username"
          pattern={[/^[a-z]+$/, "only lower case name is allowed"]}
          required
        />
        <ModInput
          type="email"
          label="Email"
          model={email}
          pattern={[regex.email, "Should be a valid email"]} placeholder="Password. Oh sorry, Email"
          required
        />
        <div className="flex space-x-5">
          <ModInput
            type="password"
            label="Password"
            model={password}
            pattern={[regex.moderatePassword, "Write a stronger password"]}
            placeholder="Why not use, Hail Zuckerberg?"
            required
          />
          <ModInput
            type="password"
            model={confirmPassword}
            imprint-model={password}
            label="Confirm Password"
            placeholder="Isn't it, Hail Zuckerberg?"
            required
          />
        </div>
        <ModInput
          type="datetime"
          label="Birthday (Makes it easier for your friends to beg treats from you)"
          model={birthday}
          pattern={[regex.date_dd_MM_yyyy, "should follow the `ddmmyy` format"]}
          required
        />
        <div>
          <p className="font-bold">Gender</p>
          <div className="flex items-center justify-between w-1/2">
            <ModInput
              type="radio"
              model={gender}
              value="male"
              label="Male"
            />
            <ModInput
              type="radio"
              model={gender}
              value="female"
              label="Female"
            />
            <ModInput
              type="radio"
              model={gender}
              value="other"
              label="Other"
            />
          </div>
        </div>
        <p className="text-gray-600 text-xs pb-5">By clicking Get Ruined, you agree that you're our product, we can do whatever we want with & we own you (for free). You may receive SMS notifications from us and can opt out at any time (not actually).
        </p>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#00a400] py-2 px-10 text-white font-bold rounded">Get Ruined</button>
        </div>
      </Form>
    </div>
  )
}

export default App
