# HelpTheCityServer

The server is being developed in Javascript using Node.JS.<br/>
It will receive the requests and send responses to the users
based on the application idea. Reports will include photos, descriptions, localizations, etc.

## Database
The database actually has 8 tables, all named in Brazilian Portuguese because is an requirement at this stage.</br>

**abuse**</br>
All abuse reports made by users are store into this table;<br/>

**abuse_category**</br>
The abuse categories are stored into this table;<br/>

**configuration**<br/>
User specific configurations are stored into this table;<br/>

**localization**<br/>
Reports localization are store into this table;<br/>

**report**</br>
User reports will are stored into this table;<br/>

**report_category**<br/>
The report categories are stored into this table;<br/>

**up**</br>
Reports relevance urgency are stored into this table;<br/>

**user**</br>
User data are stored into this table;<br/>

## Architecture
The application is being built in an MSCR architecture (Model, Service, Controller, Route).<br/>

All the middleware, database and network communication will be handled by this module. (it may change in the future).

At this stage the top level architecture is:</br>
```
                                           ____________ 
/''''''''\           ..........           /____________\
|        |           |        |           |            |
| Mobile | <-------> | Server | <-------> |  Database  | 
|        |           |        |           |            |
|________|           |________|           |____________|
                          ^
___________               |
|         |               |
|   Web   | <-------------|
|_________|
```