
export interface LayoutState {
    navbarDropdown: string;
    filterDropdown: string;
    sidebar: boolean;
    isList: boolean;
    productLoading: boolean;
    pageLoading: boolean;
    mobileFilter: boolean;
};

export interface FilterState {
    category: string;
    brand: string;
    rating: string;
    sort: string;
    discount: string;
};

export interface NavbarDropdownLayoutProps {
    options: {
        name: string;
        links: {
            title: string;
            url: string;
        }[];
        icon: JSX.Element;
    }
};

// export interface Product {
//     imageUrl: string[];
//     name: string;
//     description: string;
//     discountPercentage: number;
//     originalPrice: number;
//     salePrice: number;
//     productPageUrl: string;
// };

export interface DealsLayoutProps {
    heading: string;
    category: string;
};

export interface Product {
    product: {
        images: string[];
        name: string;
        description: string;
        discount: number;
        QuantityInStock: string;
        price: number;
        id: String;
    },
    homepage?: boolean;
};

export interface ProductTypeProps {
    options: Product;
    homepage?: boolean;
};

export interface IFilterValues {
    [key: string]: string | []
};

export interface FilterOption {
    items: {
        name: string;
        value: string;
    }[];
    placeholder: string;
    queryName: string;
};

export interface IFilterOptions {
    categories: FilterOption;
    ratings: FilterOption;
    brands: {
        items: {
            name: string;
            value: string;
            relatedCategory: string[];
        }[];
        placeholder: string;
        queryName: string;
    };
    sortBy: FilterOption;
    discounts: FilterOption;
};


export interface SortLayoutProps {
    options: {
        name: string;
        selection: {
            placeholder: string;
            queryName: string;
            items: FilterOption['items'];
        };
        selectedValue?: string;
        mobile?: boolean;
    }
};

export interface FilterDropdownProps {
    name: string;
    items: FilterOption['items'];
    queryName: string;
};

export interface ServerSideProps {
    params: {
        category: string;
    };
    searchParams: {
        [key: string]: string | string[]
    };
}

// export interface ProductsProps {
//     category: string;
//     products: Product['product'][];
// }

export interface ProductsState {
    products: Product['product'][];
}