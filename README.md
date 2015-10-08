# base-jumpers-anonymous

This is a sample project showing a simple pattern for client-side storage in AngularJS. All interactions with the database
are abstracted through model objects, implemented as services in AngularJS. Those model services can then be injected as dependencies wherever
database access is needed. Keeping interactions with the database encapsulated inside of model services allows
easy swapping of databases. Only the model services' code needs to be changed, controllers and other code remain unchanged.
