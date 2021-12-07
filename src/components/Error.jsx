

const Error = ({mensaje}) => {
    return (
        <div className = 'bg-red-400 p-2 mb-4 text-center font-bold text-white uppercase rounded-md'>
            <p>{mensaje}</p>
        </div> 
    )
};

export default Error;