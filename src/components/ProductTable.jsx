import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {

    const rows = [];
    let lastCategory = null;

    products.forEach(product => {

        if (inStockOnly && !product.stocked) return;

        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) return;

        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
        }
        rows.push(<ProductRow product={product} key={product.name} />)
        lastCategory = product.category
    });

    return (
        <table style={{ margin: 'auto', width: '150px', border: '1px solid black', borderRadius: '2px', marginTop: '10px' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}
