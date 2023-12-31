import React from 'react';
import { ITodoListCreate } from '../../../store/todolist/todolist.interface';
import Button from '../../ui/buttons/button/button.component';
import { todolistApi } from '../../../store/todolist/todolist.api';
import { useActions } from '../../../hooks/redux/use-actions.hook';
import { toast } from 'react-hot-toast';
import Row from '../../ui/containers/row/row.component';
import { RxUpdate } from 'react-icons/rx';


interface ITodoListUpdateButton {
    data: ITodoListCreate;
    listId: number;
}

const TodoListUpdateButton: React.FC<ITodoListUpdateButton> = (props) => {
    const { data, listId }                   = props;
    const [ dispatchUpdate, { isFetching } ] = todolistApi.useLazyUpdateQuery();
    const { todolist }                       = useActions();

    const updateList = function () {
        dispatchUpdate({ id: listId, body: data }).then((response) => {
            response.data && todolist.update(response.data) && toast.success(`Todo updated`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            });
        });
    };

    return (
        <Button active
                loading={ isFetching }
                onClick={ updateList }
        >
            <Row offset={5}><RxUpdate/><span>Update</span></Row>
        </Button>
    );
};

export default TodoListUpdateButton;