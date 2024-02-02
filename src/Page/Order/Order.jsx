import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categorys = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menuData] = useMenu()

    const dessert = menuData.filter(item => item.category === 'dessert')
    const pizza = menuData.filter(item => item.category === 'pizza')
    const soup = menuData.filter(item => item.category === 'soup')
    const salad = menuData.filter(item => item.category === 'salad')
    const drinks = menuData.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
                <title>Food Haven || Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;