import TodoCreationHeaderContainer from '../components/todo/TodoCreationHeaderContainer';
import FilterHeader from '../components/filter/FilterHeader';
import Loader from '../components/async/Loader';
import TodoList from '../components/todo/TodoList';


export default () => {

    return (
        <div>
            <TodoCreationHeaderContainer />
            <FilterHeader />
            <Loader />
            <TodoList />
        </div>
    );

}

