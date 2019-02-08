import React from 'react';
import { shallow, mount } from 'enzyme';

import LinearProgress from '@material-ui/core/LinearProgress';

import { Loader, _mapState } from '../../../components/async/Loader';

describe('<Loader />', () => {

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