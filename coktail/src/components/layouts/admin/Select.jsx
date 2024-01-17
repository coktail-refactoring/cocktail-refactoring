export const Select = ({ options, onChange, value }) => (
  <div onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </div>
)
