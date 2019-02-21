import React from 'react';
import propTypes from 'prop-types';
import { mount } from 'enzyme';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Loader, _mapState } from '../../../components/async/Loader';

describe('<Loader />', () => {

    it('should have static propTypes defined', () => {
        let expectedPropTypes = {
            asyncCalls: propTypes.object.isRequired,
            classes: propTypes.object.isRequired,
        };
        expect(Loader).toHaveProperty('propTypes', expectedPropTypes);
    });

    describe('constructing and rendering', () => {
        let SUTWrapper,
            asyncCalls,
            stubClasses;

        describe('with async calls in progress', () => {

            beforeEach(() => {
                stubClasses = { loaderContainer: 'loaderContainer' };
                asyncCalls = { inProgress: true };

                SUTWrapper = mount(<Loader asyncCalls={asyncCalls} classes={stubClasses} />);
            });

            it('should render correctly', () => {
               expect(SUTWrapper).toMatchSnapshot();
            });

            it('should render a <LinearProgress />', () => {
                let foundEls = SUTWrapper.find(LinearProgress);

                expect(foundEls).toHaveLength(1);
            });

        });

        describe('with no async calls in progress', () => {

            beforeEach(() => {
                stubClasses = { loaderContainer: 'loaderContainer' };
                asyncCalls = { inProgress: false };

                SUTWrapper = mount(<Loader asyncCalls={asyncCalls} classes={stubClasses} />);
            });

            it('should render correctly', () => {
               expect(SUTWrapper).toMatchSnapshot();
            });

            it('should render a <LinearProgress />', () => {
                let foundEls = SUTWrapper.find(LinearProgress);

                expect(foundEls).toHaveLength(0);
            });

        });

    });

});

describe('<Loader /> _mapstate', () => {

    describe('when executing', () => {
        let state,
            results;

        beforeEach(() => {
            state = {
                asyncCalls: { inProgress: false }
            };

            results = _mapState(state)
        });

        it('should return the asyncCalls that are part of the state', () => {
            expect(results).toHaveProperty('asyncCalls', state.asyncCalls);
        });

    });

});
