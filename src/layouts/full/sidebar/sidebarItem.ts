import {
    FilesIcon,
    BoxIcon,
    ChartDonut3Icon,
    UserCircleIcon,
    Message2Icon,
    PointIcon,
    BasketIcon,
    CalendarIcon,
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Apps' },
    {
        title: 'Contact',
        icon: BoxIcon,
        to: '/apps/contacts',
        chip: '2',
        chipColor: 'surface',
        chipBgColor: 'secondary'
    },

    {
        title: 'Blog',
        icon: ChartDonut3Icon,
        to: '/',
        children: [
            {
                title: 'Posts',
                icon: PointIcon,
                to: '/apps/blog/posts'
            },
            {
                title: 'Detail',
                icon: PointIcon,
                to: '/apps/blog/1'
            }
        ]
    },
    {
        title: 'E-Commerce',
        icon: BasketIcon,
        to: '/ecommerce/',
        children: [
            {
                title: 'Shop',
                icon: PointIcon,
                to: '/ecommerce/products'
            },
            {
                title: 'Detail',
                icon: PointIcon,
                to: '/ecommerce/product/detail/1'
            },
            {
                title: 'List',
                icon: PointIcon,
                to: '/ecommerce/productlist'
            },
            {
                title: 'Checkout',
                icon: PointIcon,
                to: '/ecommerce/checkout'
            }
        ]
    },
    {
        title: 'Chats',
        icon: Message2Icon,
        to: '/apps/chats'
    },
    {
        title: 'User Profile',
        icon: UserCircleIcon,
        to: '/',
        children: [
            {
                title: 'Profile',
                icon: PointIcon,
                to: '/apps/user/profile'
            },
            {
                title: 'Followers',
                icon: PointIcon,
                to: '/apps/user/profile/followers'
            },
            {
                title: 'Friends',
                icon: PointIcon,
                to: '/apps/user/profile/friends'
            },
            {
                title: 'Gallery',
                icon: PointIcon,
                to: '/apps/user/profile/gallery'
            }
        ]
    },
    {
        title: 'Notes',
        icon: FilesIcon,
        to: '/apps/notes'
    },
    {
        title: 'Calendar',
        icon: CalendarIcon,
        to: '/apps/calendar'
    },

]

export default sidebarItem;