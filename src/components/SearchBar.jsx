export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {

    return (
        <form>
            <input type="text" placeholder="Search..." style={{ margin: 'auto' }} value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <br />
                <input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

