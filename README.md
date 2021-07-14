# SQLEditor
Lightweight SQL editor to query database

Heroku app link - https://protected-journey-60683.herokuapp.com/

Created SQLEditor using React framework with hooks and lightweight library [react-codeMirror2](https://www.npmjs.com/package/react-codemirror2). The SQL editor also provides syntax highlighting for SQL queries which makes the UX better for users.
List of predefined queries are displayed in a sidebar for easy access.
The data after running query is displayed in form of table with pagination. The table is created using react-table lightweight library. 

To make the query experience smooth beautiful and efficient, on clicking of any predefined queries from sidebar the query gets highlighted and set in the SQLEditor. By clicking the run button the query is executed and result displayed in table. There is a reset button which on being clicked sets our query to default query.


With respect to structure of our application SQLEditor is the parent of Table component.
The AppContainer is the parent of SQLEditor component and AppContainer is rendered inside our main App component.
The mock folder contains the candidateData and sqlqueriesData used in the application. The mock data also stores the data in a normalized format so that there is no duplication of data.

Performance metrics to calculate Page load time calculated using [lighthouse chrome extension](https://developers.google.com/web/tools/lighthouse)
First Contentful Paint 0.5s
Speed Index 0.5s
Largest Contentful Paint 0.5s
Time to interactive 0.5s
Total Blocking Time 0ms
Cumulative Layout Shift 0

I would calculate page load time from total blocking time which here in this case is almost zero ms. So I would consider the first contentful paint which is 0.5s as my page load time.

Have used some optimizations to improve the load time
1) Used production build which has optimizations like code minification, dead code removal resulting in smaller bundle size
2) Used ESM build for material UI which helps with tree shaking so that the unused code is not included in the bundle
3) Tried using minimum 3rd party libaries and the ones used are light weight libraries.

<img width="1040" alt="Screen Shot 2021-07-14 at 10 31 20 AM" src="https://user-images.githubusercontent.com/57975516/125564093-c9ad86b0-647d-4475-b81f-2599e4ac701e.png">

