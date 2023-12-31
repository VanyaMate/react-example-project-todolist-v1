import {usePageTodoItem} from "../../../hooks/use-page-todoitem.hook";
import React from "react";
import TodoItem from "../todo-item/todo-item.component";
import {useSlice} from "../../../hooks/redux/use-store.hook";
import css from './todo-category-items.module.scss';
import {cn} from "../../../helpers/react.helper";
import Vertical from "../../ui/containers/vertical/vertical.component";
import PageContentInside from "../../page-content/page-content-inside.component";
import Pagination from "../../pagination/pagination";

const TodoCategoryItems = () => {
    const {fetching, dispatcherName, count} = usePageTodoItem();
    const todoitems = useSlice((state) => state.todoitem);

    return (
        <PageContentInside title={dispatcherName} count={count} className={cn(css.container, fetching ? css.loading : undefined)}>
            <Vertical offset={5}>
                { todoitems.list.slice(0, 9).map((item) => <TodoItem key={item.id} item={item}/>) }
            </Vertical>
            <Pagination page={1} pages={25} onPageChange={(page) => console.log(page)}/>
        </PageContentInside>
    );
};

export default React.memo(TodoCategoryItems);