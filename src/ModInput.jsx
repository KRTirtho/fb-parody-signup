import { Input } from 'react-binden'
import clsx from "clsx"
import { nanoid } from "nanoid"

function ModInput(props) {
  const inputStyle = clsx(
    props.className,
    "peer transition-all p-1 border-2 border-solid rounded outline-none",
    {
      ["border-red-400"]: props.model.touched && !!props.model.error,
      ["border-gray-500 focus:border-blue-400"]: !props.model.error
    },
  )

  const id = props.id ?? nanoid()

  const rowTypes = ["checkbox", "radio"]
  const secondDivStyles = clsx(
    "inline-flex",
    !rowTypes.includes(props.type) ? "flex-col-reverse" : "flex-row items-center"
  )

  const labelStyles = clsx(
    "transition-all select-none peer-focus:text-blue-500 font-semibold",
    { ["font-normal peer-focus:text-black ml-2"]: rowTypes.includes(props.type), ["peer-focus:text-red-500"]: props.model.touched && !!props.model.error }
  )

  return (
    <div className={secondDivStyles}>
      {props.model.error && <p className="text-red-500 text-sm ml-2 group-focus">{props.model.error}</p>}
      <Input id={id} className={inputStyle} {...props} />
      <label htmlFor={id} className={labelStyles}>{props.label}</label>
    </div>
  )
}

export default ModInput
