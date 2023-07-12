
export interface LayoutState {
    navbarDropdown: string;
};

export interface DropdownLayoutProps {
    options: {
        name: string;
        links: {
            title: string;
            url: string;
        }[];
        icon: JSX.Element;
    }
};

export interface product {
    imageUrl: string[];
    name: string;
    description: string;
    discountPercentage: number;
    originalPrice: number;
    salePrice: number;
    productPageUrl: string;
};

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
    }
};