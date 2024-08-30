import { Helmet } from 'react-helmet-async';
// sections
import { ProductListInRevisonView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductListInRevisionPage() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Product List In Revision</title>
            </Helmet>

            <ProductListInRevisonView />
        </>
    );
}
