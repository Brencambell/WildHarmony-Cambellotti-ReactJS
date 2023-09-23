const Field = ({ label, name, onChange }) => {
  
  return (
    <div>
      <label className="m-2">{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;