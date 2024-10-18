import './App.css'
const Box = ({ value, onClick} ) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Box;
