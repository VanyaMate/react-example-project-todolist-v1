import {Routes, Route} from "react-router-dom";
import {
    URL_CALENDAR, URL_COMPLETED,
    URL_HOMEPAGE,
    URL_LIST,
    URL_OVERDUE,
    URL_TODAY,
    URL_UPCOMING
} from "../../constants/urls.constant";
import TodayPageContent from "./today-page-content/today-page-content.component";
import UpcomingPageContent from "./upcoming-page-content/upcoming-page-content.component";
import CalendarPageContent from "./calendar-page-content/calendar-page-content.component";
import ListPageContent from "./list-page-content/list-page-content.component";
import AllPageContent from "./all-page-content/all-page.content.component";
import OverduePageContent from "./overdue-page-content/overdue-page-content.component";
import CompletedPageContent from "./completed-page-content/completed-page-content.component";

const PageContent = () => {
    return (
        <Routes>
            <Route path={URL_HOMEPAGE} element={<AllPageContent/>}/>
            <Route path={URL_UPCOMING} element={<UpcomingPageContent/>}/>
            <Route path={URL_COMPLETED} element={<CompletedPageContent/>}/>
            <Route path={URL_TODAY} element={<TodayPageContent/>}/>
            <Route path={URL_CALENDAR} element={<CalendarPageContent/>}/>
            <Route path={URL_OVERDUE} element={<OverduePageContent/>}/>
            <Route path={URL_LIST + '/:id'} element={<ListPageContent/>}/>
        </Routes>
    );
};

export default PageContent;