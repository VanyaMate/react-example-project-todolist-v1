import css from './menu-fixed.module.scss';
import Box from '../ui/containers/box/box.component';
import ContentHeight from '../content-height/content-height';
import TitleBox from '../title-box/title-box';
import Vertical from '../ui/containers/vertical/vertical.component';
import MenuTasksLinks from '../menu-tasks-links/menu-tasks-links';
import MenuLists from '../menu-lists/menu-lists';
import MenuSettings from '../menu-settings/menu-settings';


const MenuFixed = () => {
    return (
        <ContentHeight className={ css.container }>
            <Box>
                <Vertical offset={ 15 }>
                    <TitleBox title={ 'Menu' }/>
                    <MenuTasksLinks/>
                    <MenuLists/>
                    <MenuSettings/>
                </Vertical>
            </Box>
        </ContentHeight>
    );
};

export default MenuFixed;