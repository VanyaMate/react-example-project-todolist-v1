import Button, {IButtonProps} from "../../ui/buttons/button/button.component";
import React from "react";
import {useActions} from "../../../hooks/redux/use-actions.hook";
import {todoitemApi} from "../../../store/todoitem/todoitem.api";
import { toast } from 'react-hot-toast';

interface ITodoItemDeleteButton extends IButtonProps {
    taskId: number;
}

const TodoItemDeleteButton: React.FC<ITodoItemDeleteButton> = (props) => {
    const {todoitem} = useActions();
    const [dispatchDelete, { isFetching }] = todoitemApi.useLazyDeleteQuery();
    const deleteTask = function () {
        dispatchDelete({ id: props.taskId })
            .then(() => todoitem.remove(props.taskId) && toast.success(`Todo deleted`, {
                duration : 2000,
                position : 'bottom-right',
                className: 'toast-container',
            }));
    }

    return (
        <Button
            active
            loading={isFetching}
            onClick={deleteTask}
        >
            Delete
        </Button>
    );
};

export default TodoItemDeleteButton;