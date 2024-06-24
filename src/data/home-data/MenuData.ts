interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "HOME",
        link: "/",
        class_name:"mega",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "ABOUT",
        link: "/about_us_01",
        class_name:"nav-link",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "LISTINGS",
        link: "/listing_02",
        class_name:"mega",
    },
    
    {
        id: 4,
        has_dropdown: false,
        title: "CONTACT",
        link: "/contact",
    },
];
export default menu_data;
