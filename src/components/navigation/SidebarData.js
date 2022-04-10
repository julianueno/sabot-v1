import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';


export const SidebarData =[

       {
        title: 'OnRoad',
        path: '/on-road',
        icon: <MdIcons.MdDeliveryDining/>,
        cName: 'nav-text'
    },
    {
        title: 'Raids',
        path: '/raids',
        icon: <GiIcons.GiPassport/>,
        cName: 'nav-text'
    },
    {
        title: 'Accidents',
        path: '/raids',
        icon: <GiIcons.GiHospitalCross/>,
        cName: 'nav-text'
    },
    {
        title: 'MyPay',
        path: '/my-pay',
        icon: <FaIcons.FaMoneyBillWaveAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'UpDates',
        path: '/updates',
        icon: <MdIcons.MdTipsAndUpdates/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
]
