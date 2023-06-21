import PageContentInside from "../page-content-inside.component";
import {useStore} from "../../../hooks/redux/use-store.hook";

const UpcomingPageContent = () => {
    const todoItemSlice = useStore((state) => state.todoitem);

    return (
        <PageContentInside title={'Upcoming'} count={todoItemSlice.data.upcoming.length}>
            UpcomingPageContent
        </PageContentInside>
    );
};

export default UpcomingPageContent;