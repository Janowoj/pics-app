function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit('cars');
    }

    return <div>
        <input />
        <button onClick={handleClick}>Press to submit</button>
    </div>

}

export default SearchBar;