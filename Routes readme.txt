files

svgs -- public/images
buttons, input fields, --- src/components
(models)schemas  -- src/models (owner, customer, admin, pro)
signin, signup, notfound.jsx  -- src/pages
server routes -- src/server/server.js
App routes -- src/routes.jsx




server.js has express routes and mongo connection

Admin Schema
|-- To be sent : name, email, phnum, password, status
|-- will be generated : admin_id (AD`123456`), customers - [PA12345, PA98765, other customers under this admin]

Customer Schema
|-- To be sent : cust_name, email, password, Reference(who referred) , admin_name, phnum
|-- will be generated : Unique Cust_id, Reference_id, add_to_referred_customers_list, add_to_admins_owning_list, Referred_by.

Owner Schema 
|-- {name, email, password, phnum}

pro Schema (included in Customers Schema)
|--JoinedAt, prodays,expirydate



routes available - 
------ POST -- /add-admin - send {name,email,phnum,status,password}          
                          - returns : status

----- PUT(or POST) -- /update-admin - send - {just send whatever details needed to be updated}          
                          - returns : status

----- POST -- /toggle-admin-status/:admin_id -  send - {admin_id}  
                          - returns : status

----- GET  -- /available-admins - send a get request{}
                          - returns all available admins (required for signup page)




----- POST  -- /add-   - send {cust_name, email, phnum, password, Reference, admin_name}
                          - returns status



------ POST  -- /login  - send(email, password) --cookies will be handled in signin page.(Remember Status)
                          - returns { userType: 'owner', username: owner.username } if matches with owner details and corresponding to admin and user else, Invalid credentials(401) if doesnt matches and internal server error if 500



------- POST  -- /addNewTool  - send {toolname}
                         - added to all users with default values as empty.
                         -returns status


-------POST  -- /usersByTool/:toolName    - send {toolname}
                          - returns all users with a joining date.(all users will have all tools but no joining date unless admin adds. if joining date is available even without pro days left, it will be shown.)


-------POST  -- /deleteUser/:custId     - send {user_id} 
                        - returns status of user deletion



-------POST  --  /editUser/:custId       - send {user_id} 
                        - returns status of user deletion       