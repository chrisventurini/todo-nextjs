import React from 'react';
import { shallow, mount } from 'enzyme';
import mockStoreBuilder from '../../utils/mockStoreBuilder';

import LinearProgress from '@material-ui/core/LinearProgress';

import Loader from '../../../components/async/Loader';

describe('<Loader />', () => {

    describe('rendering', () => {
        let SUTWrapper,
            storeData;

        beforeEach(() => {
            storeData = {asyncCalls: { inProgress: true }};
            let store = mockStoreBuilder(storeData);
            SUTWrapper = shallow(<Loader store={store}/>).dive();
        });

        it('should have the stores asyncCalls as a property', () => {
            expect(SUTWrapper.props()).toHaveProperty('asyncCalls', storeData.asyncCalls);
        });

        it('should have the jss classes as a property', () => {
            expect(SUTWrapper.props()).toHaveProperty('classes');
        });

        it('should assign the loader container classes to the wrapping div', () => {
           let { classes } = SUTWrapper.props(),
               firstDiv = SUTWrapper.first().dive();

           expect(firstDiv.hasClass(classes.loaderContainer)).toBe(true);
        });

    });

    describe('rendering with async calls in progress', () => {
        let SUTWrapper;

        beforeEach(() => {
            let store = mockStoreBuilder({asyncCalls: { inProgress: true }});
            SUTWrapper = mount(<Loader store={store}/>);
        });

        it('should render correctly', () => {
            expect(SUTWrapper).toMatchSnapshot();
        });

        it('should render a <LinearProgress />', () => {
            let foundEls = SUTWrapper.find(LinearProgress);

            expect(foundEls).toHaveLength(1);
        });

    });

    describe('rendering with async calls not in progress', () => {
        let SUTWrapper;

        beforeEach(() => {
            let store = mockStoreBuilder({asyncCalls: { inProgress: false }});
            SUTWrapper = mount(<Loader store={store}/>);
        });

        it('should render correctly', () => {
            expect(SUTWrapper).toMatchSnapshot();
        });

        it('it should not render a <LinearProgress />', () => {
            let foundEls = SUTWrapper.find(LinearProgress);

            expect(foundEls).toHaveLength(0);
        });

    });

});