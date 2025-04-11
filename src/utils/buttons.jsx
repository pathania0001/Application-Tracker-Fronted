
const Buttons = ({ type = "primary", children, spinner = true, disabled, big = false, className, onClick }) => {

  const handleClick = async () => {
    onClick && await onClick()

  }
  return (
    <>
      <button disabled={disabled} onClick={handleClick} className={`relative rounded ${big ? "text-lg px-6 py-1" : "text-sm py-1 px-4"}  ${type === "border" ? " border border-primary border-solid disabled:opacity-70 disabled:text-desc" : type === "danger" ? "bg-red-500 text-white" : "bg-blue-500 text-white  "} select-none ${className} disabled:opacity-50`}>
        {children}
      </button>
    </>
  )
}

export default Buttons