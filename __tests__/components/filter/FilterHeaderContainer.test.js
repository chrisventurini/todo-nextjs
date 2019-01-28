import mockStoreBuilder from "../../utils/mockStoreBuilder";
import {shallow} from "enzyme/build";
import FilterHeader from "../../../components/filter/FilterHeader";
import FilterHeaderContainer from "../../../components/filter/FilterHeaderContainer";
import React from "react";

describe('<FilterHeaderContainer />', () => {

    describe('rendering', () => {
        let SUTWrapper,
            storeData;

        beforeAll(() => {
            storeData = { asyncCalls: {}, filters: {} };
            let store = mockStoreBuilder(storeData);
            SUTWrapper = shallow(<FilterHeaderContainer store={store}/>).dive();
        });
        
        it('should have the stores asyncCalls as a property', () => {
            expect(SUTWrapper.instance().props).toHaveProperty('asyncCalls', storeData.asyncCalls);
        });

        it('should have the stores filters as a property', () => {
            expect(SUTWrapper.instance().props).toHaveProperty('filters', storeData.asyncCalls);
        });

        it('should have the stores todo actions as a property', () => {
            expect(SUTWrapper.instance().props).toHaveProperty('actions');
        });

        it('should render correctly', () => {
            expect(SUTWrapper).toMatchSnapshot();
        });

    });

    describe('When handling a completed filter clicked', () => {
        let SUTWrapper,
            toggleCompletedSpy,
            storeData;

        beforeAll(() => {
            storeData = { asyncCalls: {}, filters: { completed: true } };
            let store = mockStoreBuilder(storeData);
            SUTWrapper = shallow(<FilterHeaderContainer store={store}/>).dive();

            toggleCompletedSpy = jest.fn();
            SUTWrapper.instance().props.actions.toggleFilterCompleted = toggleCompletedSpy;

            SUTWrapper.find(FilterHeader).props().onCompletedClick();
        });

        it('should flip the filterCompleted state', () => {
            expect(SUTWrapper.state('filterCompleted')).toBe(false);
        });

        it('should dispatch', () => {
            expect(toggleCompletedSpy).toHaveBeenCalled();
        });

    });

});