import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title:'Marketing',
        path: '/marketing',
        icon: <AiIcons.AiOutlineNotification />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Dropdown 1',
                path: '/marketing/dropdown_1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dropdown 2',
                path: '/marketing/dropdown_2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title:'MSD',
        path: '/msd',
        icon: <AiIcons.AiOutlineTeam />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dropdown 1',
                path: '/msd/dropdown_1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dropdown 2',
                path: '/msd/dropdown_2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title:'Gudang',
        path: '/gudang',
        icon: <AiIcons.AiOutlineHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dropdown 1',
                path: '/gudang/dropdown_1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dropdown 2',
                path: '/gudang/dropdown_2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title:'Accounting',
        path: '/accounting',
        icon: <AiIcons.AiOutlineAudit />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dropdown 1',
                path: '/accounting/dropdown_1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Dropdown 2',
                path: '/accounting/dropdown_2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    }
];