const Index = ({
    value,
    type,
    handleChange,
    name,
    label
}) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
            />
        </div>
    );
}

export default Index;
