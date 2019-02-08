import React from "react";
import {shallow} from "enzyme/build";

import { FilterHeaderContainer, _mapState } from "../../../components/filter/FilterHeaderContainer";

describe('<FilterHeaderContainer />', () => {
    let SUTWrapper,
        asyncCalls,
        filters;

    beforeEach(() => {
        asyncCalls = { inProgress: true };
        filters = { completed: true };
    });

    describe('constructing and rendering', () => {

        beforeEach(() => {
            SUTWrapper = shallow(<FilterHeaderContainer
                                    asyncCalls={asyncCalls}
                                    filters={filters} />).dive();
        });

        it('should render correctly', () => {
            expect(SUTWrapper).toMatchSnapshot();
        });

    });

    describe('When handling a completed filter clicked', () => {
        let toggleFilterCompletedSpy;

        beforeEach((done) => {
            SUTWrapper = shallow(<FilterHeaderContainer
                                    asyncCalls={asyncCalls}
                                    filters={filters} />);

            toggleFilterCompletedSpy = jest.fn();

            SUTWrapper.setProps({
                actions: {
                    toggleFilterCompleted: toggleFilterCompletedSpy
                }
            }, () => {
                SUTWrapper.instance().handleCompletedClicked();

                done();
            });

        });

        it('should flip the filterCompleted state', () => {
            expect(SUTWrapper.state('filterCompleted')).toBe(!filters.completed);
        });

        it('should call the toggleFilterCompleted action', () => {
            expect(toggleFilterCompletedSpy).toHaveBeenCalled();
        });

    });

});

describe('<FilterHeaderContainer /> _mapState', () => {
    let state,
        results;

    describe('when executing', () => {

        beforeEach(() => {
            state = {
                asyncCalls: {},
                filters: {}
            };

            results = _mapState(state);
        });

        it('should assign the states asyncCalls and filters to the returned props', () => {
            expect(results).toHaveProperty('asyncCalls', state.asyncCalls);
            expect(results).toHaveProperty('filters', state.filters);
        });

    });

});