import todoService from '../../services/todoService';

// Mock dependencies
jest.mock('isomorphic-unfetch');
import mockFetch from 'isomorphic-unfetch';

describe('todoService', () => {

    describe('when fetching all', () => {
        let stubJson,
            stubResponse,
            results;

        beforeEach(async function () {
            stubJson = { collection: {}, count: 0 };
            stubResponse = {
                json: jest.fn(() => stubJson)
            };

            mockFetch.mockReturnValue(stubResponse);

            results = await todoService.fetchAll({ completed: false });
        });

        it('should return the JSON from the reponse', () => {
            expect(stubResponse.json).toBeCalled();
            expect(results).toEqual(stubJson);
        });

        it('should add fetch the data from the API', () => {
            expect(mockFetch).toBeCalledWith('http://localhost:3000/api/todos?completed=false');
        });

    });

});