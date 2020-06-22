import Vue from 'vue';
import { 
    Tabbar, 
    TabbarItem,
    Search,
    Icon,
    Swipe,
    SwipeItem,
    NoticeBar,
    Toast,
    PullRefresh,
    List,
    TreeSelect,
    NavBar,
    SubmitBar,
    Checkbox,
    Stepper,
    Tag,
    Grid, 
    GridItem,
    Cell, 
    CellGroup,
    GoodsAction, 
    GoodsActionIcon, 
    GoodsActionButton, 
    Lazyload,
    ActionSheet,
    Form,
    Field,
    Button,
    Skeleton,
    SwipeCell,
    Card    
} from 'vant';

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(TreeSelect)
Vue.use(NavBar)
Vue.use(SubmitBar)
Vue.use(Checkbox)
Vue.use(Stepper)
Vue.use(Tag)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Lazyload);
Vue.use(ActionSheet);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Skeleton);
Vue.use(SwipeCell);
Vue.use(Card);

Vue.prototype.$Toast= Toast;