# SQLEditor
Lightweight SQL editor to query database

Heroku app link - https://protected-journey-60683.herokuapp.com/

GitHub Link - https://github.com/rhinocrose938/SQLEditor


Created SQLEditor using React framework with hooks and lightweight library CodeMirror with syntax highlighting for SQL.
List of predefined queries are displayed in a persistent drawer component name AppContainer created with material UI.
The data after running query is displayed in form of table with pagination. The table is created using react-table lightweight library. 

To make the query experience smooth beautiful and efficient, clicking of any predefined queries in drawer component the query gets highlighted and set in the SQLEditor. By clicking the run button the query is executed and result displayed in table. There is a reset button which on being clicked sets our query to default query.


With respect to structure of our application SQLEditor is the parent of Table component.
The AppContainer is the parent of SQLEditor component and AppContainer is rendered inside our main App component.
The mock folder contains the candidateData and sqlqueriesData used in the application.

Performance metrics to calculate Page load time calculated using lighthouse chrome extension.
First Contentful Paint 0.5s
Speed Index 0.5s
Largest Contentful Paint 0.5s
Time to interactive 0.5s
Total Blocking Time 0s
Cumulative Layout Shift 0

I would calculate page load time from total blocking time which here in this case is almost zero. So I would consider the first contentful paint which is 0.5s as my page load time.
